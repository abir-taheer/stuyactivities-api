const router = require("express").Router();
const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const {oAuthIds, users} = require("./../../../database/models");

async function verify(token) {

	let ticket;

	try {

		ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_CLIENT_ID,
		});

	} catch (e) {

		return null;

	}

	return ticket.getPayload();
}

router.post("/", async (req, res) => {

	const token = req.body.token || "";

	const payload = await verify(token);


	// We couldn't verify the token, do not proceed
	if(! payload){
		return res.json({
			success: false,
			error: "invalid_token",
			errorMessage: "The sign-in token provided is not valid for this app."
		});
	}

	// Try to locate userId in the database using oAuthId
	const userOAuth = await oAuthIds.findOne({
		where: {
			provider: "google",
			authId: payload.sub
		}
	});


	// This is where most sign in attempts will succeed
	if(userOAuth && userOAuth.userId){
		req.session.signedIn = true;
		req.session.userId = userOAuth.userId;
		return res.json({success: true});
	}


	// If we get to this point, that means we have to locate the user ourselves
	// Get the newest person to have used that email address
	const findUser = await users.max("gradYear", {
		where: {
			email: payload.email
		}
	});


	// The user exists and we can connect their oAuthId to their userId
	if(findUser){
		oAuthIds.create({
			provider: "google",
			authId: payload.sub,
			userId: findUser.id
		});

		req.session.signedIn = true;
		req.session.userId = findUser.id;

		return res.json({
			success: true
		});

	}


	// The user doesn't exist. It might just be some random google account signing in
	return res.json({
		success: false,
		error: "student_not_exists",
		errorMessage: "We could not locate your account. Please contact the Student Union for further assistance."
	});


});

module.exports = router;

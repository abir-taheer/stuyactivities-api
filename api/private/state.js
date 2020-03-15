const router = require("express").Router();
const {users} = require("./../../database/models");


router.get("/", async (req, res) => {

	// If the user isn't signed in, we don't have to return any info besides that
	if(! req.session.signedIn){

		return res.json({
			success: true,
			payload: {
				signedIn: false
			}
		});
	}

	const userId = req.session.userId;

	// The user is signed in. Fetch relevant information about them.
	const user = await users.findOne({
		where: {
			id: userId
		}
	});

	const firstName = user.firstName;
	const lastName = user.lastName;
	const email = user.email;
	const gradYear = user.gradYear;
	const isFaculty = user.isFaculty;

	const isAdmin = Boolean(await user.getAdmin());

	res.json({
		success: true,
		payload: {
			signedIn: true,
			firstName,
			lastName,
			email,
			gradYear,
			isFaculty,
			isAdmin
		}
	})

});

module.exports = router;

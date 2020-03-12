const router = require("express").Router();

router.get("/", (req, res) => {
	res.json({
		success: true, data: {
			signedIn: Boolean(req.session.signedIn)
		}
	});

});

module.exports = router;

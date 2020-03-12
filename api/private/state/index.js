const router = require("express").Router();

router.get("/", (req, res) => {

	res.json({data: {signedIn: Boolean(req.session.signedIn)}});

});

module.exports = router;

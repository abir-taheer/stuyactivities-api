const router = require("express").Router();
const {orgUpdates, organizations} = require("./../../../database/models");

router.get("/", async (req, res) => {
	res.json({
		success: true,
		payload: await orgUpdates.findAll({
			include: [
				{
					model: organizations,
					attributes: ["name", "publicUrl"]
				}
			]
		})
	});
});

module.exports = router;

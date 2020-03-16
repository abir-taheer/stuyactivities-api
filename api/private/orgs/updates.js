const router = require("express").Router();
const {orgUpdates, organizations, updatePics} = require("./../../../database/models");

router.get("/", async (req, res) => {
	res.json({
		success: true,
		payload: await orgUpdates.findAll({
			include: [
				{
					model: organizations,
					attributes: ["name", "publicUrl", "id"]
				},
				{
					model: updatePics,
					attributes: ["fileName"]
				}
			]
		})
	});
});

module.exports = router;

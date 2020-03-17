const router = require("express").Router();
const {updates: updates, organizations, updatePics, updateLinks, cachedUrls} = require("./../../../database/models");

router.get("/", async (req, res) => {
	res.json({
		success: true,
		payload: await updates.findAll({
			include: [
				{
					model: organizations,
					attributes: ["name", "publicUrl", "id"]
				},
				{
					model: updatePics,
					attributes: ["fileName"],
					as: "pics"
				},
				{
					model: cachedUrls,
					attributes: ["title", "description", "image", "url"],
					as: "links"
				}
			]
		})
	});
});

module.exports = router;

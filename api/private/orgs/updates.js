const router = require("express").Router();
const {orgUpdates, organizations, updatePics, updateLinks, urlMetaCache} = require("./../../../database/models");

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
					attributes: ["fileName"],
					as: "pics"
				},
				{
					model: urlMetaCache,
					attributes: ["title", "description", "image", "url"],
					as: "links"
				}
			]
		})
	});
});

module.exports = router;

const router = require("express").Router();
const {urlMetaCache} = require("./../../../database/models");
const axios = require("axios");
const querystring = require('querystring');

router.post("/", async (req, res) => {
	const originalUrl = req.body.url;

	const existing = await urlMetaCache.findOne({
		where: {
			originalUrl
		},
		attributes: ["url", "title", "description", "image"]
	});

	if(existing) {
		return res.json({
			success: true,
			payload: existing
		});
	}

	// It isn't in the cache and we need to get new data
	const apiKey = querystring.escape(process.env.LINK_PREVIEW_KEY);
	const safeUrl = querystring.escape(originalUrl);
	const {data} = await axios.get(`http://api.linkpreview.net/?key=${apiKey}&q=${safeUrl}`);

	await urlMetaCache.create({
		originalUrl,
		...data
	});

	return res.json({
		success: true,
		payload: data
	});

});

module.exports = router;

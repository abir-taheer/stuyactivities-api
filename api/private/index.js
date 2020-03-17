const router = require("express").Router();
const cors = require("cors");

const whitelist = ["https://stuyactivities.org", "http://localhost:3001", "http://localhost:3000"];
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin) || ! origin || process.env.NODE_ENV === "development") {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	},
	credentials: true
};

router.use(cors(corsOptions));

router.use("/state", require("./state"));
router.use("/auth", require("./auth"));
router.use("/orgs", require("./orgs"));
router.use("/link", require("./link"));

module.exports = router;

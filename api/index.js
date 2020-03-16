const router = require("express").Router();

router.use("/private", require("./private"));
router.use("/s3", require("./s3"));

module.exports = router;

const router = require("express").Router();

router.use("/private", require("./private"));

module.exports = router;

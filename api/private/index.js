const router = require("express").Router();

router.use("/state", require("./state"));
router.use("/auth", require("./auth"));

module.exports = router;

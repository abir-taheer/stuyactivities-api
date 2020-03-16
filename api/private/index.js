const router = require("express").Router();

router.use("/state", require("./state"));
router.use("/auth", require("./auth"));
router.use("/orgs", require("./orgs"));
router.use("/link", require("./link"));

module.exports = router;

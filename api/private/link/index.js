const router = require("express").Router();

router.use("/preview", require("./preview"));

module.exports = router;

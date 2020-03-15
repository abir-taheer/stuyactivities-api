const router = require("express").Router();

router.use("/updates", require("./updates"));

module.exports = router;

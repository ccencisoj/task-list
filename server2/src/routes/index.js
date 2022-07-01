const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/task", require("./task"));

module.exports = router;
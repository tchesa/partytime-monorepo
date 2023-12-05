const router = require("express").Router();

const serviceController = require("./services");

router.use("/services", serviceController);

module.exports = router;

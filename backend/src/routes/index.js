const router = require("express").Router();

const serviceRouter = require("./services");
const partyRouter = require("./parties");

router.use("/services", serviceRouter);
router.use("/parties", partyRouter);

module.exports = router;

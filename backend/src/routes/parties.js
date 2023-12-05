const router = require("express").Router();
const partyController = require("../controllers/partyController");

router.route("/").post(partyController.create);
router.route("/").get(partyController.getAll);
router.route("/:id").get(partyController.get);
router.route("/:id").delete(partyController.delete);
router.route("/:id").put(partyController.update);

module.exports = router;

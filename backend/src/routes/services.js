const router = require("express").Router();
const serviceController = require("../controllers/serviceController");

router.route("/").post(serviceController.create);
router.route("/").get(serviceController.getAll);
router.route("/:id").get(serviceController.get);
router.route("/:id").delete(serviceController.delete);
router.route("/:id").put(serviceController.update);

module.exports = router;

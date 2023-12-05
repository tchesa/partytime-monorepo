import { Router } from "express";
import serviceController from "../controllers/serviceController";

const router = Router();

router.route("/").post(serviceController.create);
router.route("/").get(serviceController.getAll);
router.route("/:id").get(serviceController.get);
router.route("/:id").delete(serviceController.delete);
router.route("/:id").put(serviceController.update);

export default router;

import { Router } from "express";
import partyController from "../controllers/partyController";

const router = Router();

router.route("/").post(partyController.create);
router.route("/").get(partyController.getAll);
router.route("/:id").get(partyController.get);
router.route("/:id").delete(partyController.delete);
router.route("/:id").put(partyController.update);

export default router;

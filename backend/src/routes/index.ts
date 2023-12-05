import { Router } from "express";
import serviceRouter from "./services";
import partyRouter from "./parties";

const router = Router();

router.use("/services", serviceRouter);
router.use("/parties", partyRouter);

export default router;

import { Router, Request, Response } from "express";
import { createCommunity, deleteCommunity, getCommunities, getCommunity, updateCommunity } from "../controllers/community";
import { logMiddleware } from "../middleware/log";
import { checkJWT } from "../middleware/session";

const router = Router();

// router.use(logMiddleware);
// router.use(checkJWT)

router.get("/", checkJWT, logMiddleware, getCommunities);
router.get("/:id", checkJWT, getCommunity);
router.post("/", checkJWT, createCommunity);
router.put("/:id", checkJWT, updateCommunity);
router.delete("/:id", checkJWT, deleteCommunity);


export { router };
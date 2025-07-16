import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router=express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage); //protect route is authorization if user really exist or not
//after post , protectroute is processed in protectRoute.js phir uske baad agar try me neeche tak sahi hai to next()
// apply hoga which is sendMessage wala command just upar wale line me jo likha hai and it continues until we return a respons
export default router;
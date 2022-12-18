import express from "express";
import { createHour, getHourFilter, updateHour ,getById ,getAll,updateHourAvailability} from "../controllers/hoursController.js";
import veriftyAdmin from "../middlewares/adminAuth.js";
import verifyToken from "../middlewares/verifyToken.js";

const router=express.Router()

router.post("/:hallId",createHour)
router.put("/:id",updateHour)
router.get("/find/:id",getById)
router.get("/",getAll)
router.get("/filter/",getHourFilter)
router.put("/availability/:id",updateHourAvailability)

export default router
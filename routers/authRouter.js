import express from "express";
import { deleteUser,getUser,changePassword,getByToken, login, register,getAll } from "../controllers/authController.js";
import verifyToken from "../middlewares/verifyToken.js";
// import veriftyUser from "../middlewares/userAuth.js";
const router=express.Router()

router.post("/",register)
router.get("/",getAll)
router.get("/token",verifyToken,getByToken)
router.post("/login",login)
router.delete("/deleteUser",deleteUser)
router.post("/getByEmail",getUser)

export default router
import Router from "express"
import {signUp, signIn, signOut, getUser} from "../controllers/authController.js"
const router = Router()
router.get("/profile",getUser)
router.post("/register",signUp)
router.post("/login",signIn)
router.post("/logout",signOut)
export default router
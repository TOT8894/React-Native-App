import Router from "express"
import {profile,register,login,logout} from "./controllers/authController"
const router = Router()
router.get("/profile",profile)
router.post("register",register)
router.post("/login",login)
router.post("/logout",logout)

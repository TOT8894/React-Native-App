import Router from "express"
import {getUser,getUserById,deleteUser,updateUser} from "./controllers/userController"
const router = Router()
router.get("/",getUser)
router.get("/:id",getUserById)
router.delete("/delete/:id",deleteUser)
router.put("/update/:id",updateUser)

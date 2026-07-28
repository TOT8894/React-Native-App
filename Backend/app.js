import express from "express"
import mongodb from "./config/mongodb.js"
import {errorHandler} from "./errorHandler/errorHandler.js"
import authRoute from "./routes/authRoute.js"
import dotenv from "dotenv"
dotenv.config()
const app = express()
mongodb()
app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use(errorHandler)
export default app
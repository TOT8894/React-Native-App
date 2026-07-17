import express from "express"
import mongodb from "./config/mongodb"
import errorHandler from "./errorHandler/errorHandler"
const app = express()
mongodb()
app.use("/auth",authRoute)
app.use("/user",userRoute)
app.use(errorHandler)
export default app
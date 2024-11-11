import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { errorMiddleware } from "./error/error.js"
import reservationRouter from "./routes/reservationRoute.js"
import { dbConnection } from "./database/dbConnection.js"

const app = express()
dotenv.config({ path: "./config/config.env" })

app.use(
  cors({
    origin: ["https://havets-skatter-mern-frontend.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/v1/reservation", reservationRouter)

dbConnection()

app.use(errorMiddleware)

export default app

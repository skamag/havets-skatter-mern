import express from "express"
import { sendReservation } from "../controller/reservation.js"
const router = express.Router()

// router.post("/send", sendReservation)

router.post("/test", (req, res) => {
  console.log("Test route body:", req.body)
  res.json(req.body)
})

console.log("test")

export default router

import express from "express"
import { sendReservation } from "../controller/reservation.js"
const router = express.Router()

router.post("/send", sendReservation)

router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find()
    res.status(200).json(reservations)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// router.post("/test", (req, res) => {
//   console.log("Test route body:", req.body)
//   res.json(req.body)
// })

console.log("test")

export default router

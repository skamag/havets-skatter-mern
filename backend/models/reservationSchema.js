import mongoose from "mongoose"
import validator from "validator"

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters!"],
    maxLength: [30, "First name cannot exceed 30 characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least 3 characters!"],
    maxLength: [30, "Last name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [8, "Phone number must contain at least 8 digits!"],
    maxLength: [11, "Phone number cannot exceed 11 digits!"],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
})

export const Reservation = mongoose.model("Reservation", reservationSchema)

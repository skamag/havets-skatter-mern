import React from "react"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import "./styles/reservation.css"

const Reservation = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [phone, setPhone] = useState(0)
  const navigate = useNavigate()

  const handleReservation = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        // "http://localhost:4000/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      toast.success(data.message)
      setFirstName("")
      setLastName("")
      setPhone(0)
      setEmail("")
      setTime("")
      setDate("")
      navigate("/success")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <div className="mapContainer">
            <div className="map">
              <img src="tables-map-v2.png" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>RESERVER BORD</h1>
            <p>For øvrige spørsmål, kontakt oss på tlf.</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Fornavn"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Etternavn"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Dato"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Tid"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Epost"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Telefon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button
                className="reservationButton"
                type="submit"
                onClick={handleReservation}
              >
                RESERVER{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation

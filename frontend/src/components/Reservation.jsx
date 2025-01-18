import React from "react"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import "./styles/reservation.css"

const Reservation = ({ showMap, setShowMap, children }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [phone, setPhone] = useState("")
  const [table, setTable] = useState(0)
  const navigate = useNavigate()

  const handleReservation = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "https://havets-skatter-mern.onrender.com/api/v1/reservation/send",
        // "http://localhost:4000/reservation/send",
        { firstName, lastName, email, phone, date, time, table },
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
      setTable(0)
      navigate("/success")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <div className="bannerImageContainer">
            <div className="bannerImage">
              <img src="reservationImage.webp" alt="bannerImage" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="reservationFormBox">
            <h1>RESERVER BORD</h1>
            <p>For øvrige spørsmål, kontakt oss på tlf.</p>
            <form>
              <div className="formRow">
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
              <div className="formRow">
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
              <div className="formRow">
                <input
                  type="email"
                  placeholder="Epost"
                  className="emailTag"
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
              {date !== "" && time !== "" && (
                <div className="tableSelect">
                  <p>
                    <span>Velg bord (valgfritt):</span>
                    <span>
                      <label htmlFor="bord"></label>
                      <select
                        name="bord"
                        id=""
                        onChange={(e) => {
                          setTable(e.target.value)
                          console.log(e.target.value)
                        }}
                      >
                        <option value="0">Tilfeldig</option>
                        {/* <option value="0">4-seter</option>
                      <option value="0">2-seter</option>
                      <option value="0">10-seter</option> */}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </span>
                    <span
                      className="tablesLink"
                      onClick={() => {
                        setShowMap(true)
                        console.log(showMap)
                      }}
                      tabIndex={0}
                      onKeyDown={setShowMap}
                      role="button"
                    >
                      Bordkart
                    </span>
                    {/* {Number(table) !== 0 ? (
                      <span className="tableSelectY">&#10004;</span>
                    ) : (
                      <span className="tableSelectX">&#10005;</span>
                    )} */}
                  </p>
                </div>
              )}

              <button
                className="reservationButton"
                type="submit"
                onClick={handleReservation}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handleReservation
                  }
                }}
              >
                RESERVER{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
      {children}
    </section>
  )
}

export default Reservation

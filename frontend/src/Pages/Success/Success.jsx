import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Success = () => {
  const [countdown, setCountdown] = useState(10)
  const navigate = useNavigate()

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId)
          navigate("/")
        }
        return preCount - 1
      })
    }, 1000)
    return () => clearInterval(timeoutId)
  }, [navigate])

  return (
    <>
      <section className="notFound">
        <div className="container">
          <h1>Din reservasjon blir behandlet!</h1>
          <h5>Du vil bli kontaktet så snart vi finner et ledig bord.</h5>
          <h4>
            Du sendes tilbake til vår hjemmeside om {countdown} sekunder...
          </h4>
          {/* <Link to={"/"}>Hjem</Link> */}
        </div>
      </section>
    </>
  )
}

export default Success

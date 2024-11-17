import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>FEIL OPPSTÅTT</h1>
          <p>We finner ikke siden du leter etter</p>
          <Link to={"/"}>Hjem</Link>
        </div>
      </section>
    </>
  )
}

export default NotFound

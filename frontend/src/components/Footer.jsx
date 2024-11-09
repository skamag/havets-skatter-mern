import React from "react"
import "./styles/footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">HAVETS SKATTER</div>
          <div className="right">
            <p>Navngata 123, Oslo</p>
            <p>Åpen fra 10:00 til 20:00</p>
            <p>Tlf: 123455678</p>
            <p>Epost: 1234@havetsskatter.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p></p>
          </div>
          <div className="right">
            <p>Opphavsrett Havets Skatter AS.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

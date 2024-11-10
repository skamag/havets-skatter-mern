import React from "react"
import "./styles/footer.css"

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="banner">
          <div className="left">HAVETS SKATTER</div>
          <div className="right">
            <p>Fiskebryggen 12, 0150 Oslo</p>
            <p>Åpen fra 10:00 til 20:00</p>
            <p>Tlf: 123 45 678</p>
            {/* <p>Epost: havetsskatter@gmail.com</p> */}
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p></p>
          </div>
          <div className="right">
            <p>&#169; Havets Skatter AS.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

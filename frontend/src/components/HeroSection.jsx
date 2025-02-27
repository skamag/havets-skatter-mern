import React from "react"
import Navbar from "./Navbar"
// import "./styles/heroSection.css"

const HeroSection = ({ setShowMenu }) => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar setShowMenu={setShowMenu} />
      {/* <div className="container">
        <div class="logoContainer">
          <img className="logo" src="havets-skatter-logo.png" />
        </div>
        <div class="dishContainer">
          <img src="about-1.jpg" />
        </div>
      </div> */}
    </section>
  )
}

export default HeroSection

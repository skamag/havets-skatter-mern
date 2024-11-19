import React, { useState } from "react"
import { data } from "../restApi.json"
import { Link } from "react-scroll"
import { GiHamburgerMenu } from "react-icons/gi"
import "./styles/navbar.css"

const Navbar = ({ setShowMenu }) => {
  const [show, setShow] = useState(false)

  const handleToggleMenu = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setShow(!show)
    }
  }

  return (
    <>
      <nav>
        <div className="logo">
          {/* <span className="logoImageContainer">
            <img src="/icons8-fish-food-64.png" alt="logo"></img>
          </span> */}
          HAVETS SKATTER
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
                onClick={() => setShow(false)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault() // Prevent default behavior for keyboard interaction
                    document
                      .querySelector(`#${element.link}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                    setShow(false) // Close the menu if required
                  }
                }}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={() => setShowMenu(true)}>
            MENY
          </button>
        </div>
        <div
          className="hamburger"
          tabIndex={0}
          onClick={() => setShow(!show)}
          onKeyDown={handleToggleMenu} // Allow toggle with Enter/Space
          role="button" // Accessibility role
          aria-label="Toggle navigation menu" // Accessibility label
          aria-expanded={show} // Accessibility state
        >
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  )
}

export default Navbar

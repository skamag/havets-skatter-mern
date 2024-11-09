import React, { useState } from "react"
import { data } from "../restApi.json"
import { Link } from "react-scroll"
import { GiHamburgerMenu } from "react-icons/gi"
import "./styles/navbar.css"

const Navbar = ({ setShowMenu }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <nav>
        <div className="logo">HAVETS SKATTER</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={() => setShowMenu(true)}>
            MENY
          </button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  )
}

export default Navbar

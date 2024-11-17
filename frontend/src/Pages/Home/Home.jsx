import { useState } from "react"
import Menu from "../../components/Menu"
import Map from "../../components/Map"
import HeroSection from "../../components/HeroSection"
import About from "../../components/About"
import Dishes from "../../components/Dishes"
import Team from "../../components/Team"
import Reservation from "../../components/Reservation"
import Footer from "../../components/Footer"

const Home = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showMap, setShowMap] = useState(false)

  return (
    <main className="home">
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroSection setShowMenu={setShowMenu} />

      {!showMenu && (
        <>
          <About />
          <Dishes />
          <Reservation showMap={showMap} setShowMap={setShowMap}>
            <Map showMap={showMap} setShowMap={setShowMap} />
          </Reservation>
          <Team />
          <Footer />
        </>
      )}
    </main>
  )
}

export default Home

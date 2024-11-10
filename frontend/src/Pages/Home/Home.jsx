import { useState } from "react"
import Menu from "../../components/Menu"
import HeroSection from "../../components/HeroSection"
import About from "../../components/About"
// import Qualities from "../../components/Qualities"
import Dishes from "../../components/Dishes"
import WhoAreWe from "../../components/WhoAreWe"
import Team from "../../components/Team"
import Reservation from "../../components/Reservation"
import Footer from "../../components/Footer"

const Home = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="home">
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroSection setShowMenu={setShowMenu} />

      {!showMenu && (
        <>
          <About />
          <Dishes />
          <Reservation />
          <Team />
          <Footer />
        </>
      )}

      {/* <Qualities /> */}
      {/* <WhoAreWe /> */}
    </div>
  )
}

export default Home

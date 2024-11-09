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
    <>
      <Menu showMenu={showMenu} />
      <HeroSection setShowMenu={setShowMenu} />
      <About />
      {/* <Qualities /> */}
      <Dishes />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer />
    </>
  )
}

export default Home

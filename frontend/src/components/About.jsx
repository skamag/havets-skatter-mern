import React from "react"
// import { Link } from "react-router-dom"
import "./styles/about.css"

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <p>Velkommen til Havets Skatter</p>
            </div>
            <p className="mid">
              Havets Skatter er en eksklusiv sjømatrestaurant som tilbyr det
              beste havet har å by på, tilberedt med lidenskap og presisjon. Vi
              kombinerer ferske råvarer med klassiske og moderne smaker, og våre
              dyktige kokker sørger for en matopplevelse du sent vil glemme.
              Enten du vil nyte et herlig måltid med venner, feire en spesiell
              anledning, eller bare ønsker å oppleve fantastisk sjømat, er vi
              her for å servere deg. Vår meny byr på alt fra delikate forretter
              som røkt laks og blåskjell, til saftige hovedretter som grillet
              laks og hummer Thermidor. Avslutt måltidet med våre uimotståelige
              desserter, som vår berømte sitronterte med marengs eller en fyldig
              sjokolademousse med havsalt.
            </p>
            <div className="top">
              <p>Lokasjon</p>
            </div>
            <p className="mid">
              Vi holder til i hjertet av Oslo, på Fiskebryggen 12, 0150 Oslo.
              Med en fantastisk utsikt over Oslofjorden er Havets Skatter det
              perfekte stedet for en uforglemmelig matopplevelse.
            </p>

            {/* <Link to={"/"}>Utforsk meny </Link> */}
          </div>
          <div className="imageContainer">
            {/* <img
              className="bannerImage"
              src="rustic-seafood-restaurant.webp"
              alt="about"
            /> */}
            {/* <img src="seafood-plate.png" alt="about" /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default About

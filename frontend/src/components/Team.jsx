import React from "react"
import { data } from "../restApi.json"
import "./styles/team.css"

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="headingSection">
          <h1 className="heading">VÅRT TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="teamContainer">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h2>FORNAVN ETTERNAVN</h2>
                {/* <h3>{element.name}</h3> */}
                <p>{element.designation}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team

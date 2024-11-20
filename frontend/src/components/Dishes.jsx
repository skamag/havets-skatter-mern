import React from "react"
import { data } from "../restApi.json"
import "./styles/dishes.css"

const Dishes = () => {
  return (
    <>
      <section className="dishes" id="dishes">
        <div className="container">
          <div className="headingSection">
            <h1 className="heading">POPULÆRE RETTER</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta
              pariatur eius et recusandae veritatis. Quasi, et molestias!
            </p>
          </div>
          <div className="dishesContainer">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                {/* <div className="dishesImageContainer"> */}
                <img src={element.image} alt={element.title} />
                {/* </div> */}

                <h2>{element.title}</h2>
                {/* <h3>{element.title}</h3> */}
                <button tabIndex={-1}>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Dishes

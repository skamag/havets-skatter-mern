import { data } from "../restApi.json"
import "./styles/menu.css"

const Menu = ({ showMenu }) => {
  return (
    <div className={`menuContainer ${showMenu ? "showMenu" : "hideMenu"}`}>
      <h1 className="menuHeader">Meny</h1>
      <div className="menu">
        {data[0].menu.map((element) => (
          <div className="card" key={element.id}>
            <div className="cardImageContainer">
              <img src={"/about-1.jpg"} alt={element.title} />
            </div>
            <div className="cardTextContainer">
              <h3>{element.title}</h3>
              <h5>{element.description}</h5>
              <h5>
                <b>{element.price}</b>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu

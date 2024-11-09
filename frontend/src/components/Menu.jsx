import { data } from "../restApi.json"
import "./styles/menu.css"

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`menuContainer ${showMenu ? "showMenu" : "hideMenu"}`}>
      <div className="menuHeader">
        <h1 className="menuTitle">Meny</h1>
        <h1 onClick={() => setShowMenu(false)} className="menuX">
          &#10006;
        </h1>
      </div>
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
                <b>{element.price} kr</b>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu

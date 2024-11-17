import { useState } from "react"
import { data } from "../restApi.json"
import "./styles/menu.css"

const Menu = ({ showMenu, setShowMenu }) => {
  const [menuInput, setMenuInput] = useState("")

  const renderCategory = (category, title) => {
    const filteredMenu = data[0].menu.filter(
      (element) =>
        element.category.toString() === category &&
        element.title.toLowerCase().includes(menuInput.toLowerCase())
    )

    return (
      <div className="menuSection">
        <div className="logo">{title}</div>
        {filteredMenu.length > 0 ? (
          filteredMenu.map((filteredElement) => (
            <div className="card" key={filteredElement.id}>
              <div className="cardImageContainer">
                <img src={"/about-1.jpg"} alt={filteredElement.title} />
              </div>
              <div className="cardTextContainer">
                <div>
                  <b>{filteredElement.title}</b>
                </div>
                <p>{filteredElement.description}</p>
                <div>
                  <b>{filteredElement.price} kr</b>
                </div>
                <p>
                  Allergener:
                  {filteredElement.allergies.map((allergy) => (
                    <span key={allergy}>{" " + allergy}</span>
                  ))}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Ingen treff.</p>
        )}
      </div>
    )
  }

  return (
    <div className={`menuContainer ${showMenu ? "showMenu" : "hideMenu"}`}>
      <div className="menuMain">
        <div className="menuHeader">
          <div className="menuTitle">Meny</div>
          <h1 onClick={() => setShowMenu(false)} className="menuX">
            &#10006;
          </h1>
        </div>

        <div className="menu">
          <p className="menuSearch">
            <span>Søk etter matvare:</span>
            <span>
              <input
                type="text"
                value={menuInput}
                onChange={(e) => setMenuInput(e.target.value)}
              />
            </span>
          </p>
          <div className="menuItems"></div>
          {renderCategory("forrett", "Forretter")}
          {renderCategory("hovedrett", "Hovedretter")}
          {renderCategory("dessert", "Desserter")}
        </div>
      </div>
    </div>
  )
}

export default Menu

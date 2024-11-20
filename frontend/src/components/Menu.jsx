import { useState } from "react"
import { data } from "../restApi.json"
import "./styles/menu.css"

const Menu = ({ showMenu, setShowMenu }) => {
  const [menuInput, setMenuInput] = useState("")
  const [sortOption, setSortOption] = useState("") // Sorting state

  const sortMenu = (menu) => {
    switch (sortOption) {
      case "priceAsc":
        return menu.sort((a, b) => a.price - b.price)
      case "priceDesc":
        return menu.sort((a, b) => b.price - a.price)
      case "alphabetical":
        return menu.sort((a, b) => a.title.localeCompare(b.title))
      default:
        return menu
    }
  }

  const renderCategory = (category, title) => {
    const filteredMenu = sortMenu(
      data[0].menu.filter(
        (element) =>
          element.category.toString() === category &&
          element.title.toLowerCase().includes(menuInput.toLowerCase())
      )
    )

    return (
      <div className="menuSection">
        <div className="logo">{title}</div>
        {filteredMenu.length > 0 ? (
          filteredMenu.map((filteredElement) => (
            <div className="card" key={filteredElement.id}>
              <div className="cardImageContainer">
                <img src={"/menu-2.jpg"} alt={filteredElement.title} />
                {/* <img src={"/menu-1.jpg"} alt={filteredElement.title} /> */}
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
          <h1
            onClick={() => setShowMenu(false)}
            className="menuX"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                setShowMenu(false)
              }
            }}
          >
            &#10006;
          </h1>
        </div>

        <div className="menu">
          <div className="menuOptions">
            <p className="menuSearch">
              <label htmlFor="search">Søk etter matvare:</label>
              <span>
                <input
                  id="search"
                  type="text"
                  value={menuInput}
                  onChange={(e) => setMenuInput(e.target.value)}
                />
              </span>
            </p>
            <p className="menuSort">
              <label htmlFor="sort">Sorter etter:</label>
              <span>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="">Ingen sortering</option>
                  <option value="priceAsc">Pris (lav til høy)</option>
                  <option value="priceDesc">Pris (høy til lav)</option>
                  <option value="alphabetical">Alfabetisk</option>
                </select>
              </span>
            </p>
          </div>
          <div className="menuItems">
            {renderCategory("forrett", "Forretter")}
            {renderCategory("hovedrett", "Hovedretter")}
            {renderCategory("dessert", "Desserter")}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

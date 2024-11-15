import { data } from "../restApi.json"
import "./styles/menu.css"

const Menu = ({ showMenu, setShowMenu }) => {
  const renderCategory = (category, title) => (
    <div className="menuSection">
      <h1>{title}</h1>
      {data[0].menu
        .filter((element) => element.category.toString() === category)
        .map((filteredElement) => (
          <div className="card" key={filteredElement.id}>
            <div className="cardImageContainer">
              <img src={"/about-1.jpg"} alt={filteredElement.title} />
            </div>
            <div className="cardTextContainer">
              <h3>{filteredElement.title}</h3>
              <p>{filteredElement.description}</p>
              <h5>
                <b>{filteredElement.price} kr</b>
              </h5>
              <>
                <p>
                  Allergener:
                  {filteredElement.allergies.map((allergy) => (
                    <span key={allergy}>{" " + allergy}</span>
                  ))}
                </p>
              </>
            </div>
          </div>
        ))}
    </div>
  )

  return (
    <div className={`menuContainer ${showMenu ? "showMenu" : "hideMenu"}`}>
      <div className="menuMain">
        <div className="menuHeader">
          <h1 className="menuTitle">Meny</h1>
          <h1 onClick={() => setShowMenu(false)} className="menuX">
            &#10006;
          </h1>
        </div>
        <div className="menu">
          {renderCategory("forrett", "Forretter")}
          {renderCategory("hovedrett", "Hovedretter")}
          {renderCategory("dessert", "Desserter")}
        </div>
      </div>
    </div>
  )
}

export default Menu

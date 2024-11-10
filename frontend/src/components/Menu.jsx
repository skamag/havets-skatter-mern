import { data } from "../restApi.json"
import "./styles/menu.css"

const Menu = ({ showMenu, setShowMenu }) => {
  // Helper function to render each category section
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
              <h5>{filteredElement.description}</h5>
              <h5>
                <b>{filteredElement.price} kr</b>
              </h5>
            </div>
          </div>
        ))}
    </div>
  )

  return (
    <div className={`menuContainer ${showMenu ? "showMenu" : "hideMenu"}`}>
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
  )
}

export default Menu

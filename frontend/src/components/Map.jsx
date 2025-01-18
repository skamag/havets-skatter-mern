import "./styles/map.css"

const Map = ({ showMap, setShowMap }) => {
  return (
    <div
      className={`mapContainer ${
        showMap ? "mapContainer-visible" : "mapContainer-hidden"
      }`}
    >
      <div className="mapSection">
        <div className="mapHeader">
          {/* <h1 className="mapTitle">Velg bord</h1> */}
          <div
            onClick={() => setShowMap(false)}
            className="mapX"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                setShowMap(false)
              }
            }}
          >
            &#10006;
          </div>
        </div>
        <div className="map">
          {/* <div className="mapTables">
            <div className="m-tables">
              <div className="m-tables-row">
                <div className="m-table">
                  <img src="/m-table.png"></img>
                </div>
                <div className="m-table">
                  <img src="/m-table.png"></img>
                </div>
              </div>
              <div className="m-tables-row">
                <div className="m-table">
                  <img src="/m-table.png"></img>
                </div>
                <div className="m-table">
                  <img src="/m-table.png"></img>
                </div>
              </div>
            </div>
            <div className="s-tables">
              <div className="s-table">
                <img src="/s-table.png"></img>
              </div>
              <div className="s-table">
                <img src="/s-table.png"></img>
              </div>
              <div className="s-table">
                <img src="/s-table.png"></img>
              </div>
              <div className="s-table">
                <img src="/s-table.png"></img>
              </div>
              <div className="s-table">
                <img src="/s-table.png"></img>
              </div>
            </div>
            <div className="l-table">
              <img src="/l-table.png"></img>
            </div>
          </div> */}
          <img src="/tables-map-numbered.webp" alt="map-numbered"></img>
        </div>
      </div>
    </div>
  )
}

export default Map

import React, { useState } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import { ANIMAL_CODE, MAXMIUM_ENDAGERED_SPECIES } from "../constants"
import Circle from "./Circle"

const SpecieIcon = ({ indicatorCode, ...props }) => {
  switch (indicatorCode) {
    case ANIMAL_CODE.MAMMAL:
      return <Circle color="#f54d4b" {...props} />
    case ANIMAL_CODE.BIRD:
      return <Circle color="#19c416" {...props} />
    case ANIMAL_CODE.FISH:
      return <Circle color="#1771e4" {...props} />
    default:
      return <></>
  }
}

const Map = ({ data, mapTitle }) => {
  const [viewport, setViewport] = useState({
    zoom: 1.5,
  })
  const [popup, setPopup] = useState(null)

  return (
    <>
      <ReactMapGL
        {...viewport}
        scrollZoom={false}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        width="100%"
        height="500px"
        mapStyle="mapbox://styles/jaxdesign/ckb47lo0n2v931iqpf2ds9f2n"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {data.map((country, index) => {
          if (country.total && country.longitude && country.latitude) {

            return (
              <Marker
                key={index}
                longitude={country.longitude}
                latitude={country.latitude}
              >
                <div onClick={() => setPopup({ ...country })}>
                  <SpecieIcon
                    indicatorCode={country.indicatorCode}
                    width={`${(country.total / MAXMIUM_ENDAGERED_SPECIES) * 100}px`}
                    height={`${(country.total / MAXMIUM_ENDAGERED_SPECIES) * 100}px`}
                  />
                </div>
              </Marker>
            )
          } else {
            return <></>
          }
        })}

        {popup && (
          <Popup
            tipSize={5}
            longitude={popup.longitude}
            latitude={popup.latitude}
            onClose={() => setPopup(null)}
            className="popup"
          >
            {popup.countryName} <br />
            {popup.indicatorName}: {popup.total}
          </Popup>
        )}
      </ReactMapGL>
      <p className="map-title">{mapTitle}</p>
      <style global jsx>{`
        .mapboxgl-control-container {
          display: none !important;
        }

        .map-title {
          margin-left: 40px;
          margin-right: 40px;
          max-width: 1100px;
        }

        .popup .mapboxgl-popup-content {
          padding: 10px 10px 5px;
        }

        @media screen and (max-width: 600px) {
          .map-title {
            margin-top: 0;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </>
  )
}

export default Map

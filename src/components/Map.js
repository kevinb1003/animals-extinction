import React, { useState } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import { ANIMAL_CODE } from "../constants"
import mammalIcon from "../assets/icons/mammal-icon.svg"
import birdIcon from "../assets/icons/bird-icon.svg"
import fishIcon from "../assets/icons/fish-icon.svg"

const SpecieIcon = ({ indicatorCode, ...props }) => {
  switch (indicatorCode) {
    case ANIMAL_CODE.MAMMAL:
      return <img src={mammalIcon} alt="Marker" {...props} />
    case ANIMAL_CODE.BIRD:
      return <img src={birdIcon} alt="Marker" {...props} />
    case ANIMAL_CODE.FISH:
      return <img src={fishIcon} alt="Marker" {...props} />
    default:
      return <></>
  }
}

const getLonAndLat = (indicatorCode, longitude, latitude) => {
  switch (indicatorCode) {
    case ANIMAL_CODE.MAMMAL:
      return { longitude: longitude, latitude }
    case ANIMAL_CODE.BIRD:
      return { longitude: longitude, latitude }
    default:
      return { longitude, latitude }
  }
}

const Map = ({ data, maxIconSize, mapTitle }) => {
  const [viewport, setViewport] = useState({
    zoom: 1.5,
  })
  const [popup, setPopup] = useState(null)

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        width="100%"
        height="500px"
        mapStyle="mapbox://styles/jaxdesign/ckb47lo0n2v931iqpf2ds9f2n"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {data.map((country, index) => {
          if (country.total && country.longitude && country.latitude) {
            const coords = getLonAndLat(
              country.indicatorCode,
              country.longitude,
              country.latitude
            )

            return (
              <Marker
                key={index}
                longitude={coords.longitude}
                latitude={coords.latitude}
                offsetLeft={30}
              >
                <div onClick={() => setPopup({ ...country })}>
                  <SpecieIcon
                    indicatorCode={country.indicatorCode}
                    style={{
                      width: `${country.total / (maxIconSize / 100)}%`,
                      //minWidth: `${viewport.zoom / (7 / 100)}%`,
                    }}
                  />
                </div>
              </Marker>
            )
          }
        })}

        {popup && (
          <Popup
            tipSize={5}
            longitude={popup.longitude}
            latitude={popup.latitude}
            onClose={() => setPopup(null)}
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

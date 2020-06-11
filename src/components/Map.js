import React, { useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
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

const Map = ({ data, maxIconSize, mapTitle }) => {
  const [viewport, setViewport] = useState({
    zoom: 1.5,
  })

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
          if (country.longitude && country.latitude) {
            return (
              <Marker
                key={index}
                longitude={country.longitude}
                latitude={country.latitude}
              >
                <SpecieIcon
                  indicatorCode={country.indicatorCode}
                  style={{
                    opacity: `${country.total / (maxIconSize / 100)}`,
                    width: `${country.total / (maxIconSize / 100)}%`,
                  }}
                />
              </Marker>
            )
          }
        })}
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
      `}</style>
    </>
  )
}

export default Map

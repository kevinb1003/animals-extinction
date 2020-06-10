import React, { Component } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import coords from "./assets/json/coords.json"
import mammalIcon from "./assets/icons/mammal-icon.svg"
import birdIcon from "./assets/icons/bird-icon.svg"
import { SPECIES, JSON_LIST } from "./constants"

const SpecieIcon = ({ type, ...props }) => {
  switch (type) {
    case SPECIES.MAMMALS:
      return <img src={mammalIcon} alt="Marker" {...props} />
    case SPECIES.BIRDS:
      return <img src={birdIcon} alt="Marker" {...props} />
    default:
      return <></>
  }
}

class App extends Component {
  state = {
    mapData: [],
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 0,
      longitude: 0,
      zoom: 1,
    },
    type: SPECIES.MAMMALS,
  }

  componentDidMount() {
    const { type } = this.state
    this.prepareData(type)
  }

  componentDidUpdate(prevProps, prevState) {
    const { type } = this.state

    if (prevState.type !== type) {
      this.prepareData(type)
    }
  }

  prepareData = (species) => {
    const mapData = JSON_LIST[species]
      .map((specie) => {
        const coordsData = coords.find((c) => c.alpha3 === specie.countryCode)

        if (coordsData) {
          specie.longitude = coordsData.longitude
          specie.latitude = coordsData.latitude

          return specie
        } else {
          return null
        }
      })
      .filter((specie) => specie)

    this.setState({
      mapData,
    })
  }

  render() {
    const { mapData, viewport, type } = this.state
    const maxIconSize = Math.max(...mapData.map((specie) => specie.total))

    return (
      <>
        <button onClick={() => this.setState({ type: SPECIES.BIRDS })}>Birds {SPECIES.BIRDS === type  && '|ACTIVE|'}</button>
        <button onClick={() => this.setState({ type: SPECIES.MAMMALS })}>
          Mammals {SPECIES.MAMMALS === type  && '|ACTIVE|'}
        </button>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          width="1200px"
          height="800px"
          mapStyle="mapbox://styles/jaxdesign/ckb47lo0n2v931iqpf2ds9f2n"
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
          {mapData.map((country, index) => {
            if (country.longitude && country.latitude) {
              return (
                <Marker
                  key={index}
                  longitude={country.longitude}
                  latitude={country.latitude}
                >
                  <SpecieIcon
                    type={type}
                    style={{
                      width: `${country.total / (maxIconSize / 100)}%`,
                    }}
                  />
                </Marker>
              )
            }
          })}
        </ReactMapGL>
      </>
    )
  }
}

export default App

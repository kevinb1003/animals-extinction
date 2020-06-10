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
      latitude: 0,
      longitude: 0,
      zoom: 1.5,
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
        <button onClick={() => this.setState({ type: SPECIES.BIRDS })}>
          Birds {SPECIES.BIRDS === type && "|ACTIVE|"}
        </button>
        <button onClick={() => this.setState({ type: SPECIES.MAMMALS })}>
          Mammals {SPECIES.MAMMALS === type && "|ACTIVE|"}
        </button>
        <p className="sub-title">
          The ongoing sixth mass extinction is the result of the destruction of
          populations leading to eventual extirpation of entire species. Every
          time a species or population vanishes, Earth’s capability to maintain
          ecosystem services is eroded to a degree.
        </p>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          width="100%"
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
        <style jsx global>{`
          body {
            background-color: #d1d5d5;
            margin: 0;
            }
          }
          .sub-title {
            font-size: 22px;
            font-weight: 600;
            font-stretch: condensed;
            line-height: 1.27;
            color: #1e2837;
            box-shadow: 10px 10px 15px 14px rgba(209,213,213,1);
            position: relative;
            bottom: -13px;
            z-index: 1;
            }
        `}</style>
      </>
    )
  }
}

export default App

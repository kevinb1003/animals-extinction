import React, { useState, useEffect } from "react"
import coords from "./assets/json/coords.json"
import { JSON_LIST } from "./constants"
import Header from "./components/Header"
import GridItem from "./components/GridItem"
import Grid from "./components/Grid"
import Map from "./components/Map"
import Footer from "./components/Footer.js"

const App = () => {
  const [mapData, setMapData] = useState([])

  useEffect(() => {
    const data = []

    JSON_LIST.forEach((list) => {
      list.forEach((specie) => {
        const coordsData = coords.find((c) => c.alpha3 === specie.countryCode)

        if (coordsData) {
          const specieData = {
            ...specie,
            longitude: coordsData.longitude,
            latitude: coordsData.latitude,
          }

          data.push(specieData)
        }
      })
    })

    setMapData(data)
  }, [mapData])

  const maxIconSize = Math.max(...mapData.map((specie) => specie.total))

  return (
    <>
      <Header />
      <Map
        data={mapData}
        maxIconSize={maxIconSize}
        mapTitle="The International Union for the Conservation of Nature predicts that
        99.9 percent of critically endangered species and 67 percent of
        endangered species will be lost within the next 100 years."
      />
      <Grid>
        <GridItem
          title="20 percent of evaluated reptiles are threatened with extinction."
          description="Ubiquitous toxins, global warming, nonnative predators, overcollection, habitat destruction and disease are key factors leading to their demise."
        />
        <GridItem
          title="Saltwater fish predicted to be extinct by 2048."
          description="Ubiquitous toxins, global warming, nonnative predators, overcollection, habitat destruction and disease are key factors leading to their demise."
        />
        <GridItem
          title="20 percent of evaluated reptiles are threatened with extinction."
          description="Ubiquitous toxins, global warming, nonnative predators, overcollection, habitat destruction and disease are key factors leading to their demise."
        />
      </Grid>
      <Footer />
    </>
  )
}

export default App

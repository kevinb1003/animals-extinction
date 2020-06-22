import React, { useState, useEffect } from "react"
import coords from "./assets/json/coords.json"
import { JSON_LIST, ANIMAL_COLOR } from "./constants"
import Header from "./components/Header"
import GridItem from "./components/GridItem"
import Grid from "./components/Grid"
import Map from "./components/Map"
import Footer from "./components/Footer.js"
import birdIcon from "./assets/icons/bird.svg"
import fishIcon from "./assets/icons/fish.svg"
import elephantIcon from "./assets/icons/elephant.svg"
import Selector from "./components/Selector"
import Circle from "./components/Circle"

const App = () => {
  const [mapData, setMapData] = useState([])
  const [selectedOption, selectOption] = useState(0)

  useEffect(() => {
    const data = []

    JSON_LIST[selectedOption].forEach((specie) => {
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

    setMapData(data)
  }, [selectedOption])

  return (
    <>
      <div>
        <Header />
        <Selector
          options={[
            {
              icon: <Circle color={ANIMAL_COLOR.MAMMAL} />,
              label: "Mammals",
              onClick: (i) => selectOption(i),
            },
            {
              icon: <Circle color={ANIMAL_COLOR.FISH} />,
              label: "Fish",
              onClick: (i) => selectOption(i),
            },
            {
              icon: <Circle color={ANIMAL_COLOR.BIRD} />,
              label: "Birds",
              onClick: (i) => selectOption(i),
            },
          ]}
          selectedOption={selectedOption}
          maxWidth="400px"
        />
      </div>
      <Map
        data={mapData}
        mapTitle="The International Union for the Conservation of Nature predicts that
        99.9 percent of critically endangered species and 67 percent of
        endangered species will be lost within the next 100 years."
      />
      <Grid>
        <GridItem
          icon={elephantIcon}
          title="Humans will cause so many mammal species to go extinct in the next 50 years that the planet's evolutionary diversity won't recover for 3 to 5 million years,"
          description="a team of international researchers have found."
        />
        <GridItem
          icon={fishIcon}
          title="Saltwater fish predicted to be extinct by 2048."
          description="Ubiquitous toxins, global warming, nonnative predators, overcollection, habitat destruction and disease are key factors leading to their demise."
        />
        <GridItem
          icon={birdIcon}
          title="12% of bird species are on the IUCN Red List of threatened species."
          description="The main causes are habitat loss, natural disasters, climate change, loss of food sources, hunting and poaching, invasive predators and egg collecting."
        />
      </Grid>
      <Footer />
    </>
  )
}

export default App

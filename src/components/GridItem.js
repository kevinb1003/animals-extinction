import React from "react"

const GridItem = ({ title, description, icon }) => (
  <div className="grid-item">
    <img src={icon} alt="Animal" />
    <p>
      <b>{title}</b>&nbsp;{description}
    </p>
    <style jsx>{`
      .grid-item p {
        font-size: 20px;
        font-family: AvenirNextRegular;
      }

      .grid-item b {
        font-family: AvenirNextLTPro;
      }
    `}</style>
  </div>
)

export default GridItem

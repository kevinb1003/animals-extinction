import React from "react"

const Header = () => (
  <div className="header">
    <h1>Endangered Species of Birds, Reptiles, Mammals, and Fish by Country</h1>
    <p>
      The ongoing sixth mass extinction is the result of the destruction of
      populations leading to eventual extirpation of entire species. Every time
      a species or population vanishes, Earth’s capability to maintain ecosystem
      services is eroded to a degree.
    </p>
    <style jsx global>{`
      .header {
        box-shadow: 10px 10px 15px 14px rgba(209, 213, 213, 1);
        position: relative;
        bottom: -13px;
        z-index: 1;
        padding-top: 20px;
        padding-left: 40px;
        padding-right: 40px;
      }

      h1 {
        font-family: "GTSuperTextBlack";
        font-size: 40px;
        margin: 0;
      }
    `}</style>
  </div>
)

export default Header

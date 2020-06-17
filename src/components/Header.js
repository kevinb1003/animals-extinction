import React from "react"

const Header = () => (
  <div className="header">
    <h1>Endangered Species of Birds, Mammals, and Fish by Country</h1>
    <p>
      The ongoing sixth mass extinction is the result of the destruction of
      populations leading to eventual extirpation of entire species. Every time
      a species or population vanishes, Earth’s capability to maintain ecosystem
      services is eroded to a degree.
    </p>
    <style jsx>{`
      .header {
        box-shadow: 10px 10px 65px 75px rgba(209,213,213,1);
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

      p {
        max-width: 1100px;
      }
  
      @media screen and (max-width: 600px) {
        .header {
          padding: 20px;
        }
      }
    `}</style>
  </div>
)

export default Header

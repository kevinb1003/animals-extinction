import React from "react"

const Grid = ({ children }) => (
  <div className="grid">
    {children}
    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: 40px;
        margin: 40px;
        margin-top: 0;
        margin-bottom: 0;
      }

      @media screen and (max-width: 600px) {
        .grid {
          margin: 20px;
        }
      }
    `}</style>
  </div>
)

export default Grid

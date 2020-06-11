import React from "react"

const Grid = ({ children }) => (
  <div className="grid">
    {children}
    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 40px;
        margin: 40px;
        margin-top: 0;
        margin-bottom: 0;
      }
    `}</style>
  </div>
)

export default Grid

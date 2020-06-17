import React from "react"

const Circle = ({ color, width, height }) => (
  <div className="circle">
    <style jsx>{`
      .circle {
        width: ${width};
        height: ${height};
        background-color: transparent;
        border: 2px solid ${color};
        border-radius: 50%;
        display: inline-block;
      }
    `}</style>
  </div>
)

export default Circle

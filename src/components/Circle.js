import React from "react"
import PropTypes from "prop-types"

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

Circle.defaultProps = {
  width: "10px",
  height: "10px"
}

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Circle

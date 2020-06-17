import React from "react"
import PropTypes from "prop-types"

const Selector = ({ options, selectedOption, maxWidth, disabled }) => (
  <div className="selector-container">
    {options.map((option, i) => (
      <div
        key={option.label}
        role="presentation"
        className={`selector-button ${selectedOption === i ? "active" : ""}`}
        onClick={() => option.onClick(i)}
      >
        <img src={option.icon} alt="Icon" /> {option.label}
      </div>
    ))}
    <style jsx>
      {`
        .selector-container {
          max-width: ${maxWidth};
        }

        .selector-button {
          cursor: ${disabled ? "not-allowed" : "cursor"};
          pointer-events: ${disabled ? "none" : "auto"};
          opacity: ${disabled ? "0.5" : "1"};
        }
      `}
    </style>
    <style jsx>
      {`
        .selector-container {
          display: flex;
          position: relative;
          top: 8px;
          z-index: 5;
          width: 100%;
          margin-left: 40px;
        }

        .selector-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: AvenirNextRegular;
          font-size: 18px;
          line-height: 1;
          height: 30px;
          color: #1e2837;
          border: solid 2px #1e2837;
          background-color: white;
          border-right: 0;
          cursor: pointer;
        }

        .active {
          background-color: #1e2837;
          cursor: not-allowed;
          color: white;
        }

        .selector-button:first-child {
          border-left: 2px solid #1e2837;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        .selector-button:last-child {
          border-right: 2px solid #1e2837;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        img {
          width: 10px;
          margin-right: 5px;
        }
      `}
    </style>
  </div>
)

Selector.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
}

export default Selector

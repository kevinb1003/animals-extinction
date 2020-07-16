import React from "react"
import PropTypes from "prop-types"

const Selector = ({ options, selectedOption, selectOption, maxWidth }) => (
  <div className="selector-container">
    {options.map((option, i) => (
      <button
        key={option.label}
        className={`selector-button ${selectedOption === i ? "active" : ""}`}
        onClick={() => selectOption(i)}
      >
        {option.icon} {option.label}
      </button>
    ))}
    <style jsx>
      {`
        .selector-container {
          max-width: ${maxWidth};
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
          line-height: 1px;
          height: 30px;
          color: #1e2837;
          border: solid 2px #1e2837;
          background-color: white;
          border-right: 0;
          cursor: pointer;
          outline: 0;
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

        img,
        :global(.circle) {
          margin-right: 5px;
        }

        @media screen and (max-width: 600px) {
          .selector-container {
            top: 0;
            margin-left: 20px;
            width: 85%;
          }
        }
      `}
    </style>
  </div>
)

Selector.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.number.isRequired,
  selectOption: PropTypes.func.isRequired,
  maxWidth: PropTypes.string.isRequired,
}


export default Selector

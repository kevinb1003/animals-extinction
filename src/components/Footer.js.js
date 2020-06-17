import React from "react"

const Footer = () => (
  <footer>
    <span className="source">Source: <a
        href="https://data.worldbank.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        data.worldbank.org
      </a></span>
    <author>
      Developed by{" "}
      <a
        href="https://github.com/kevinb1003"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kevin Bristot
      </a>{" "}
      and Designed by{" "}
      <a
        href="https://jacksonwalker.design/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jackson Walker
      </a>
    </author>
    <style jsx>{`
      footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 40px;
        margin-top: 20px;
      }

      footer .source,
      author {
        font-family: "AvenirNextRegular";
        font-size: 18px;
        font-weight: 500;
        line-height: 1;
      }

      @media screen and (max-width: 600px) {
        footer {
          margin: 20px;
          margin-top: 30px;
        }

        author {
          margin-top: 10px;
        }
      }
    `}</style>
  </footer>
)

export default Footer

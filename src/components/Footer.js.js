import React from "react"

const Footer = () => (
  <footer>
    <span className="source">Source: data.worldbank.org</span>
    <author>
      Developed by <a href="mailto: bristotkevin1003@gmail.com">Kevin Bristot</a> and
      Designed by <a href="mailto: jaxdesign@gmail.com">Jackson Walker</a>
    </author>
    <style jsx>{`
      footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 40px;
        margin-top: 20px;
      }

      footer .source, author {
        font-family: 'AvenirNextRegular';
        font-size: 18px;
        font-weight: 500;
        line-height: 1;
      }
    `}</style>
  </footer>
)

export default Footer

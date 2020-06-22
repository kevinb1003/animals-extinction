import React from 'react'
import gtSuperTextBlack from '../assets/fonts/GTSuperText-Black.otf'
import avenirNextLTPro from '../assets/fonts/AvenirNextLTPro.otf'
import avenirNextRegular from '../assets/fonts/AvenirNextRegular.otf'

const Fonts = () => (
  <style global jsx>{`
    @font-face {
      font-family: 'AvenirNextLTPro';
      src: url(${avenirNextLTPro});
    }

    @font-face {
      font-family: 'GTSuperTextBlack';
      src: url(${gtSuperTextBlack});
    }

    @font-face {
      font-family: 'AvenirNextRegular';
      src: url(${avenirNextRegular});
    }
  `}</style>
)

export default Fonts
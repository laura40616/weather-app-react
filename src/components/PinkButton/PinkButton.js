import React from 'react'

import './PinkButton.css'

const PinkButton = (props) => {
  const { text } = props
  return <button {...props}>{text}</button>
}

export default PinkButton

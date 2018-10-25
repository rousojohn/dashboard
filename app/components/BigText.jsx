import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const BigText = ({header, text}) => {
  return (
    <Jumbotron>
      <h2>{header}</h2>
      <p>{text}</p>
    </Jumbotron>
  )
}

export default BigText

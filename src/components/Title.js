import React from 'react'
import { styled } from 'styled-components'

const Text= styled.h3`
    font-size: 50px;
`

function Title({text}) {
  return (
    <>
        <Text>{text}</Text>
    </>
  )
}

export default Title
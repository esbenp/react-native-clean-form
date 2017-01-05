import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './theme'

const ButtonGroup = styled.View`
  height: ${props => props.theme.Button.height};
`

ButtonGroup.defaultProps = {
  theme: defaultTheme
}

export default ButtonGroup

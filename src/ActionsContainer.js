import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './Theme'

const ButtonGroup = styled.View`
  height: ${props => props.theme.Button.height};
`

ButtonGroup.defaultProps = {
  theme: defaultTheme,
  componentName: 'ButtonGroup'
}

export default ButtonGroup

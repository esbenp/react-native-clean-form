import React from 'react'
import { Switch as BaseSwitch, View } from 'react-native'
import styled from 'styled-components'
import defaultTheme from './theme'

const Switch = styled(BaseSwitch)`
`

Switch.PropTypes = BaseSwitch.PropTypes

Switch.defaultProps = Object.assign({}, BaseSwitch.defaultProps, {
  theme: defaultTheme
})

export default Switch

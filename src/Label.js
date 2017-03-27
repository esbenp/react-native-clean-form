import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './theme'

const LabelWrapper = styled.View`
  flex: ${props => props.inlineLabel ? 0.5 : 1};
  flex-direction: ${props => props.inlineLabel ? 'row' : 'column'};
  flex-direction: column;
  justify-content: center;
  marginTop: ${props => props.inlineLabel ? 0 : 5};
`

const LabelText = styled.Text`
  color: ${props => props.theme.Label.color};
  font-size: ${props => props.theme.Label.fontSize};
`

LabelText.defaultProps = {
  theme: defaultTheme
}

const Label = props => {
  const { children, inlineLabel } = props

  return (
    <LabelWrapper inlineLabel={inlineLabel}>
      <LabelText inlineLabel={inlineLabel}>{ children }</LabelText>
    </LabelWrapper>
  )
}

Label.PropTypes = {
  children: React.PropTypes.string.isRequired
}

export default Label

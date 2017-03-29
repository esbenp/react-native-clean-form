import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './Theme'

const LabelWrapper = styled.View`
  marginTop: ${props => props.inlineLabel ? 0 : 5};
`

const LabelText = styled.Text`
  color: ${props => props.theme.Label.color};
  font-size: ${props => props.theme.Label.fontSize};
  height: ${props => props.inlineLabel ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth*2 : props.theme.Label.stackedHeight};
  line-height: ${props => props.inlineLabel ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth*2 : props.theme.Label.stackedHeight};
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

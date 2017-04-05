import React from 'react'
import { Text, View, Platform } from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './Theme'

const LabelWrapper = styled.View`
  flex: ${props => props.inlineLabel ? 0.5 : 1};
  flex-direction: ${props => props.inlineLabel ? 'row' : 'column'};
  flex-direction: column;
  justify-content: center;
  padding-left: ${Platform.OS === 'android' ? 5 : 0};
  marginTop: ${props => props.inlineLabel ? 0 : 5};
`

const LabelText = styled.Text`
  color: ${props => props.theme.Label.color};
  font-size: ${props => props.theme.Label.fontSize};
`

LabelText.defaultProps = {
  theme: defaultTheme,
  componentName: 'Label',
}

const Label = props => {
  const { children, inlineLabel, theme } = props

  return (
    <LabelWrapper inlineLabel={inlineLabel} theme={theme}>
      <LabelText inlineLabel={inlineLabel} theme={theme} >{ children }</LabelText>
    </LabelWrapper>
  )
}

Label.PropTypes = {
  children: React.PropTypes.string.isRequired
}

export default Label

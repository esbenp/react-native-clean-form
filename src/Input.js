import React from 'react'
import { TextInput, View } from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './theme'

// When doing stacked labels we want the input to be greedy
const InputWrapper = styled.View`
  flex: ${props => props.inlineLabel ? .5 : 1};
  height: ${props => props.inlineLabel ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth*2 : props.theme.FormGroup.height};
`

InputWrapper.defaultProps = {
  theme: defaultTheme
}

// Subtract the border of the form group to have a full height input
const StyledInput = styled.TextInput`
  color: ${props => props.theme.Input.color};
  font-size: ${props => props.theme.BaseInput.fontSize};
  height: ${props => props.inlineLabel ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth*2 : props.theme.FormGroup.height};
  line-height: ${props => props.inlineLabel ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth*2 : props.theme.FormGroup.height};
`

StyledInput.defaultProps = {
  theme: defaultTheme
}

const Input = props => (
  <InputWrapper inlineLabel={props.inlineLabel}>
    <StyledInput
      inlineLabel={props.inlineLabel}
      placeholderTextColor={props.theme.BaseInput.placeholderColor}
      {...props}
    />
  </InputWrapper>
)

Input.PropTypes = {
  inlineLabel: React.PropTypes.bool.isRequired
}

Input.defaultProps = {
  inlineLabel: true,
  theme: defaultTheme
}

export default Input

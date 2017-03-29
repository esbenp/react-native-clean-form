import React from 'react'
import {TextInput, View} from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './Theme'

/**
 * Calculate the height based on the given field properties.
 * The inline label and multiline properties affect the height.
 * 
 * @param {Object} props
 * @returns {int}
 */
const calculateHeight = (props) => {
  let height = props.theme.FormGroup.height

  if (props.multiline) {
    height = props.theme.FormGroup.height * (props.numberOfLines - 1)
  }

  if (props.inlineLabel) {
    height -= props.theme.FormGroup.borderWidth * 2
  }

  return (height)
}

// When doing stacked labels we want the input to be greedy
const InputWrapper = styled.View `
  flex: ${props => props.inlineLabel ? .5: 1};
  height: ${props => calculateHeight(props)};
`

InputWrapper.defaultProps = {
  theme: defaultTheme
}

// Subtract the border of the form group to have a full height input
const StyledInput = styled.TextInput `
  color: ${props => props.theme.Input.color};
  font-size: ${props => props.theme.BaseInput.fontSize};
  height: ${props => calculateHeight(props)};
  line-height: ${props => props.inlineLabel ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth*2 : props.theme.FormGroup.height};
`

StyledInput.defaultProps = {
  theme: defaultTheme
}

class Input extends React.Component {
  render() {
    return (
      <InputWrapper inlineLabel={this.props.inlineLabel}>
        <StyledInput
          inlineLabel={this.props.inlineLabel}
          placeholderTextColor={this.props.theme.BaseInput.placeholderColor}
          {...this.props}/>
      </InputWrapper>
    )
  }
}

Input.PropTypes = {
  ...TextInput.propTypes,
  inlineLabel: React.PropTypes.bool.isRequired
}

Input.defaultProps = {
  inlineLabel: true,
  theme: defaultTheme
}

export default Input

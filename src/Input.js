import React from 'react'
import {TextInput, View} from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './Theme'

/**
 * Calculates the flex value based on the inlineLabel and numberOfLines
 * properties.
 *
 * @param {Object} props
 * @returns {string}
 */
const calculateFlexValue = (props) => {
  let flex = 1

  if (props.multiline && props.numberOfLines > 0) {
    flex = props.numberOfLines + 1
  }

  if (props.inlineLabel) {
    flex = 0.5
  }

  return (flex)
}

/**
 * Decide how the text should be aligned for the input. This decision is based upon
 * the field properties. A multiline input should start top and not centered.
 *
 * @param {Object} props
 * @returns {string}
 */
const determineTextOrientation = (props) => {
  let orientation = 'center'

  if (props.multiline && props.numberOfLines > 1) {
    orientation = 'top'
  }

  return (orientation)
}

// When doing stacked labels we want the input to be greedy
const InputWrapper = styled.View`
  flex: ${props => calculateFlexValue(props)};
  justify-content: center;
`

InputWrapper.defaultProps = {
  theme: defaultTheme
}

// Subtract the border of the form group to have a full height input
const StyledInput = styled.TextInput`
  flex: ${props => props.inlineLabel ? .5 : 1};
  color: ${props => props.theme.Input.color};
  font-size: ${props => props.theme.BaseInput.fontSize};
  line-height: ${props => props.theme.BaseInput.lineHeight};
  text-align-vertical: ${props => determineTextOrientation(props)};
`

StyledInput.defaultProps = {
  theme: defaultTheme
}

class Input extends React.Component {
  render() {
    return (
      <InputWrapper
        inlineLabel={this.props.inlineLabel}
        multiline={this.props.multiline}
        numberOfLines={this.props.numberOfLines}>
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
  componentName: 'Input',
  inlineLabel: true,
  theme: defaultTheme
}

export default Input

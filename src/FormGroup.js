import React from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import _ from 'lodash'
import defaultTheme from './theme'

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
    height = props.theme.FormGroup.height * props.numberOfLines
  }

  if (!props.inlineLabel) {
    height += props.theme.Label.stackedHeight
  }

  return (height)
}

const FormGroupWrapper = styled.View`
  align-items: ${props => props.inlineLabel ? 'center' : 'stretch' };
  border-color: ${props => props.error ? props.theme.FormGroup.errorBorderColor : props.theme.FormGroup.borderColor};
  border-radius: ${props => props.theme.FormGroup.borderRadius};
  border-style: ${props => props.theme.FormGroup.borderStyle};
  border-width: ${props => props.border ? props.theme.FormGroup.borderWidth : 0};
  flex-direction: ${props => props.inlineLabel ? 'row' : 'column' };
  justify-content: flex-start;
  height: ${props => calculateHeight(props)};
  marginBottom: ${props => props.theme.FormGroup.marginBottom};
  padding: ${props => props.theme.FormGroup.padding};
`

FormGroupWrapper.defaultProps = {
  theme: defaultTheme
}

const FormGroup = props => {
  const { border, error, inlineLabel, multiline, numberOfLines, keyboardType, returnKeyType } = props
  const children = React.Children.map(props.children, child => {
    let subsetOfProps = {}
    if (child.type.name === 'Input') {
      const inputPropTypes = Object.keys(child.type.PropTypes)
      subsetOfProps = _.pick(props, inputPropTypes);
    }

    return React.cloneElement(child, Object.assign({}, child.props, {
      inlineLabel, ...subsetOfProps
    }))
  })

  return (
    <FormGroupWrapper border={border} error={error} inlineLabel={inlineLabel} multiline={multiline} numberOfLines={numberOfLines}>
      { children }
    </FormGroupWrapper>
  )
}

FormGroup.PropTypes = {
  border: React.PropTypes.bool,
  error: React.PropTypes.bool,
}

FormGroup.defaultProps = {
  border: true,
  error: false,
  inlineLabel: true,
  numberOfLines: 1,
  multiline: false
}

export default FormGroup

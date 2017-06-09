import React from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import _ from 'lodash'
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
  paddingTop : ${props => props.theme.FormGroup.paddingTop };
  paddingRight : ${props => props.theme.FormGroup.paddingRight };
  paddingBottom : ${props => props.theme.FormGroup.paddingBottom };
  paddingLeft : ${props => props.theme.FormGroup.paddingLeft };
`

FormGroupWrapper.defaultProps = {
  theme: defaultTheme,
  componentName: 'FormGroupWrapper'
}

const FormGroup = props => {
  const { border, error, inlineLabel, theme, multiline, numberOfLines, keyboardType, returnKeyType } = props
  const children = React.Children.map(props.children, child => {
    let subsetOfProps = {}
    if (child.props.componentName === 'Input') {
      const inputPropTypes = Object.keys(child.type.PropTypes)
      subsetOfProps = _.pick(props, inputPropTypes);
    }

    return React.cloneElement(child, Object.assign({}, child.props, {
      inlineLabel, theme, ...subsetOfProps
    }))
  })

  return (
    <FormGroupWrapper border={border} error={error} inlineLabel={inlineLabel}
      multiline={multiline} numberOfLines={numberOfLines} theme={theme}>
      { children }
    </FormGroupWrapper>
  )
}

FormGroup.PropTypes = {
  border: React.PropTypes.bool,
  error: React.PropTypes.bool,
}

FormGroup.defaultProps = {
  componentName: 'FormGroup',
  border: true,
  error: false,
  inlineLabel: true,
  numberOfLines: 1,
  multiline: false
}

export default FormGroup

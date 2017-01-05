import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './theme'

const FormGroupWrapper = styled.View`
  align-items: ${props => props.inlineLabel ? 'center' : 'stretch' };
  border-color: ${props => props.error ? props.theme.FormGroup.errorBorderColor : props.theme.FormGroup.borderColor};
  border-radius: ${props => props.theme.FormGroup.borderRadius};
  border-style: ${props => props.theme.FormGroup.borderStyle};
  border-width: ${props => props.border ? props.theme.FormGroup.borderWidth : 0};
  flex-direction: ${props => props.inlineLabel ? 'row' : 'column' };
  justify-content: flex-start;
  height: ${props => props.inlineLabel ? props.theme.FormGroup.height : props.theme.FormGroup.height + props.theme.Label.stackedHeight};
  marginBottom: ${props => props.theme.FormGroup.marginBottom};
  padding: ${props => props.theme.FormGroup.padding};
`

FormGroupWrapper.defaultProps = {
  theme: defaultTheme
}

const FormGroup = props => {
  const { border, error, inlineLabel } = props
  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, Object.assign({}, child.props, {
      inlineLabel
    }))
  })

  return (
    <FormGroupWrapper border={border} error={error} inlineLabel={inlineLabel}>
      { children }
    </FormGroupWrapper>
  )
}

FormGroup.PropTypes = {
  border: React.PropTypes.bool,
  error: React.PropTypes.bool,
  inlineLabel: React.PropTypes.bool
}

FormGroup.defaultProps = {
  border: true,
  error: false,
  inlineLabel: true
}

export default FormGroup

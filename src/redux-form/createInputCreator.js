import React from 'react'
import { View } from 'react-native'
import { FormGroup, Label } from '../../index'
import styled from 'styled-components/native'
import defaultTheme from '../theme'

const ErrorMessage = styled.Text`
  color: ${props => props.theme.ErrorMessage.color};
  fontSize:10;
  marginBottom:15;
  textAlign:right;
`

ErrorMessage.defaultProps = {
  theme: defaultTheme
}

const render = renderComponent => props => {
  const { border, input : { onChange, ...restInput }, label, inlineLabel, meta: { touched, error } } = props

  return (
    <View>
      <FormGroup border={border} inlineLabel={inlineLabel} error={touched && !!error}>
        <Label>{ label }</Label>
        { renderComponent(props) }
      </FormGroup>
      { touched && error && <ErrorMessage>{ error }</ErrorMessage> }
    </View>
  )
}


const createInputCreator = ReduxFormFieldComponent => (name, renderFunction, PropTypes = {}, defaultProps = {}) => {
  const Component = render(renderFunction)
  Component.displayName = name

  const FieldWrapper = props => {
    const { component, name, ...rest } = props

    return <ReduxFormFieldComponent name={name} component={Component} {...rest} />
  }

  FieldWrapper.displayName = 'FieldWrapper'
  FieldWrapper.PropTypes = Object.assign({
    border: React.PropTypes.bool,
    inlineLabel: React.PropTypes.bool,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }, PropTypes)
  FieldWrapper.defaultProps = Object.assign({
    border: FormGroup.defaultProps.border,
    inlineLabel: FormGroup.defaultProps.inlineLabel
  }, defaultProps)

  return FieldWrapper
}

export default createInputCreator

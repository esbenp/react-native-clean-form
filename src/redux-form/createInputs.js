import React from 'react'
import { Text, View } from 'react-native'
import {
  Field
} from 'redux-form/immutable'
import {
  Input as InputRenderer,
  Select as SelectRenderer,
  Switch as SwitchRenderer
} from '../../index'

const createInputs = inputCreator => {
  const renderInput = ({ input: { onChange, ...restInput }, ...rest}) => (
    <InputRenderer onChangeText={onChange} {...restInput} {...rest} />
  )
  const Input = inputCreator('Input', renderInput, InputRenderer.propTypes, InputRenderer.defaultProps)

  const renderSelect = ({ input: { onChange, value, ...restInput }, ...rest }) => (
    <SelectRenderer
      onValueChange={onChange}
      value={value}
      {...restInput}
      {...rest}
    />
  )
  const Select = inputCreator('Select', renderSelect, SelectRenderer.propTypes, SelectRenderer.defaultProps)

  const renderSwitch = ({ input: { onChange, value, ...restInput }, ...rest}) => {
    // redux-form default value is '', however Switch must take a boolean value
    if (value === '') {
      value = SwitchRenderer.defaultProps.value
    }
    return <SwitchRenderer onValueChange={onChange} value={value} {...restInput} {...rest} />
  }
  const Switch = inputCreator('Switch', renderSwitch, SwitchRenderer.propTypes, SwitchRenderer.defaultProps)

  return {
    Input,
    Select,
    Switch
  }
}

export default createInputs

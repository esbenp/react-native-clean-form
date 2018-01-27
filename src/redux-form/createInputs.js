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
  const renderInput = ({ input: { onChange, ...restInput }, placeholder},...restProps) => (
    <InputRenderer onChangeText={onChange} placeholder={placeholder} {...restInput} {...restProps}/>
  )
  const Input = inputCreator('Input', renderInput, InputRenderer.PropTypes, InputRenderer.defaultProps)

  const renderSelect = ({ input: { onChange, value }, labelKey, valueKey, options, placeholder ,...restProps}) => (
    <SelectRenderer
      labelKey={labelKey}
      options={options}
      onValueChange={onChange}
      placeholder={placeholder}
      value={value}
      valueKey={valueKey}
	  {...restProps}
    />
  )
  const Select = inputCreator('Select', renderSelect, SelectRenderer.PropTypes, SelectRenderer.defaultProps)

  const renderSwitch = ({ input: { onChange, value}, ...restProps }) => {
    // redux-form default value is '', however Switch must take a boolean value
    if (value === '') {
      value = SwitchRenderer.defaultProps.value
    }

    return <SwitchRenderer onValueChange={onChange} value={value} {...restProps}/>
  }
  const Switch = inputCreator('Switch', renderSwitch, SwitchRenderer.PropTypes, SwitchRenderer.defaultProps)

  return {
    Input,
    Select,
    Switch
  }
}

export default createInputs

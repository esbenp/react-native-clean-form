import React from 'react'
import {Text, View} from 'react-native'
import {
  Field
} from 'redux-form/immutable'
import {
  Input as InputRenderer,
  Select as SelectRenderer,
  Switch as SwitchRenderer
} from '../../index'

const createInputs = inputCreator => {
  const renderInput = ({input: {onChange, ...restInput}, ...rest}) => (
    <InputRenderer onChangeText={onChange} {...restInput} {...rest} />
  )
  const Input = inputCreator('Input', renderInput, InputRenderer.propTypes, InputRenderer.defaultProps)

  const renderSelect = ({input: {onChange, ...restInput}, ...rest}) => (
    <SelectRenderer onValueChange={onChange} {...restInput} {...rest} />
  )
  const Select = inputCreator('Select', renderSelect, SelectRenderer.propTypes, SelectRenderer.defaultProps)

  const renderSwitch = ({input: {onChange, value, ...restInput}, ...rest}) => (
    <SwitchRenderer onValueChange={onChange} value={!!value} {...restInput} {...rest} />
  )
  const Switch = inputCreator('Switch', renderSwitch, SwitchRenderer.propTypes, SwitchRenderer.defaultProps)

  return {
    Input,
    Select,
    Switch
  }
}

export default createInputs

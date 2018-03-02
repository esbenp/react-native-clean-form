import React, {Component} from 'react'
import {
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Picker from 'react-native-universal-picker'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import {default as BaseIcon} from 'react-native-vector-icons/Ionicons'
import defaultTheme from './Theme'

// TODO: FIXME
const HaveNoIdeaWhyThisIsNeeded = 3

const SelectLabel = styled.Text`
  color: ${props => props.theme.Input.color};
  font-size: ${props => props.theme.BaseInput.fontSize};
  flex:1;
`

SelectLabel.defaultProps = {
  theme: defaultTheme
}

const LabelIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction:row;
  height: ${props => props.inlineLabel
    ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth * 2
    : props.theme.FormGroup.height - HaveNoIdeaWhyThisIsNeeded
  };
`

LabelIconWrapper.defaultProps = {
  theme: defaultTheme
}

const SelectWrapper = styled.View`
  flex: ${props => props.inlineLabel ? .5 : 1};
  height: ${props => props.inlineLabel
    ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth * 2
    : props.theme.FormGroup.height - HaveNoIdeaWhyThisIsNeeded
  };
`

SelectWrapper.defaultProps = {
  theme: defaultTheme
}

const Icon = styled(BaseIcon) `
  height:10;
  width:10;
`

class Select extends Component {
  state = {
    value: this.props.value
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.state.value) this.onValueChange(nextProps.value)
  }

  onValueChange = (newValue) => {
    if(typeof this.props.onValueChange === 'function') this.props.onValueChange(newValue)
    this.setState({value: newValue})
  }

  render() {
    const {
      inlineLabel,
      labelKey,
      options,
      onValueChange,
      placeholder,
      valueKey,
      theme,
      ...rest
    } = this.props
    const {value} = this.state

    return <SelectWrapper inlineLabel={inlineLabel} theme={theme}>
      <Picker
        onValueChange={this.onValueChange}
        selectedValue={value}
        style={{
          color: value ? theme.Input.color : theme.BaseInput.placeholderColor,
          height: theme.FormGroup.height,
          // Ugly workaround, can't find the reason for the padding
          marginLeft: Platform.OS === 'ios' ? 0 : -7,
        }}
        itemStyle={{
          // color: value ? theme.Input.color : theme.BaseInput.placeholderColor,
          color: theme.Input.color,
          fontSize: theme.BaseInput.fontSize,
          paddingTop: 6,
        }}
        {...rest}>
        {[{label: placeholder}, ...options].map(option => <Picker.Item
          key={value || 'undefined'}
          label={option[labelKey]}
          value={option[valueKey]} />
        )}
      </Picker>
    </SelectWrapper>
  }
}

Select.propTypes = {
  labelKey: PropTypes.string,
  placeholder: PropTypes.string,
  onValueChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  valueKey: PropTypes.string
}

Select.defaultProps = {
  componentName: 'Select',
  placeholder: '',
  labelKey: 'label',
  valueKey: 'value',
  value: ''
}

export default Select

import React, { Component } from 'react'
import {
  Modal,
  Picker,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import styled from 'styled-components/native'
import { default as BaseIcon } from 'react-native-vector-icons/Ionicons';
import defaultTheme from './Theme'

// TODO: FIXME
const HaveNoIdeaWhyThisIsNeeded=3

const SelectLabel = styled.Text`
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
  height: ${props => props.inlineLabel ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth*2 : props.theme.FormGroup.height-HaveNoIdeaWhyThisIsNeeded};
`

LabelIconWrapper.defaultProps = {
  theme: defaultTheme
}

const SelectWrapper = styled.View`
  flex: ${props => props.inlineLabel ? .5 : 1};
  height: ${props => props.inlineLabel ? props.theme.FormGroup.height - props.theme.FormGroup.borderWidth*2 : props.theme.FormGroup.height-HaveNoIdeaWhyThisIsNeeded};
`

SelectWrapper.defaultProps = {
  theme: defaultTheme
}

const Icon = styled(BaseIcon)`
  height:10;
  width:10;
`

const SelectPlaceholder = styled.Text`
  color: ${props => props.theme.BaseInput.placeholderColor};
`

SelectPlaceholder.defaultProps = {
  theme: defaultTheme
}

class Select extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSelector: false,
      value: props.value
    }

    this.toggleSelector = this.toggleSelector.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.onValueChange(nextProps.value)
    }
  }

  toggleSelector() {
    this.setState({
      showSelector: !this.state.showSelector
    })
  }

  onValueChange(newValue) {
    this.setState({
      showSelector: false,
      value: newValue
    }, () => {
      this.props.onValueChange(newValue)
    })
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
    const { showSelector, value } = this.state

    const labelsByValue = options.reduce((carry, option) => {
      carry[option.value] = option.label
      return carry
    }, {})

    let label = <SelectPlaceholder>{ placeholder }</SelectPlaceholder>
    if (value) {
      label = labelsByValue[value]
    }

    return (
      <SelectWrapper inlineLabel={inlineLabel} theme={theme}>
        <Modal
          onRequestClose={this.toggleSelector}
          visible={showSelector}
        >
          <Picker
            selectedValue={value}
            onValueChange={this.onValueChange}
            {...rest}>
            { options.map(option => {
              const label = option[labelKey]
              const value = option[valueKey]

              return <Picker.Item key={value} label={label} value={value} />
            }) }
          </Picker>
        </Modal>
        <TouchableOpacity onPress={this.toggleSelector}>
          <LabelIconWrapper inlineLabel={inlineLabel}>
            <SelectLabel inlineLabel={inlineLabel}>{ label }</SelectLabel>
            <Icon name="ios-arrow-down" />
          </LabelIconWrapper>
        </TouchableOpacity>
      </SelectWrapper>
    )
  }
}

Select.PropTypes = {
  labelKey: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onValueChange: React.PropTypes.func.isRequired,
  options: React.PropTypes.array.isRequired,
  valueKey: React.PropTypes.string,
  value: React.PropTypes.oneOf([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}

Select.defaultProps = {
  componentName: 'Select',
  onValueChange: () => {},
  placeholder: '',
  labelKey: 'label',
  valueKey: 'value',
  value: ''
}

export default Select

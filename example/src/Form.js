import React, { Component } from 'react'
import { reduxForm } from 'redux-form/immutable'
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Label,
} from 'react-native-clean-form'
import {
  Input,
  Select,
  Switch
} from 'react-native-clean-form/redux-form-immutable'
import { View,Text } from 'react-native'

const onSubmit = (values, dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(values.toJS())
      resolve()
    }, 1500)
  })
}

const countryOptions = [
  {label: 'Denmark', value: 'DK'},
  {label: 'Germany', value: 'DE'},
  {label: 'United State', value: 'US'}
]

class FormView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: null,
      toggle: false,
      on: false,
      height: 0
    }

    this.onToggleChange = this.onToggleChange.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
  }

  onValueChange(newValue) {
    this.setState({
      selected: newValue
    })
  }

  onToggleChange(newValue) {
    this.setState({
      toggle: newValue
    })
  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Contact details">
            <Input name="first_name" label="First name" placeholder="John" />
            <Input name="last_name" label="Last name" placeholder="Doe" />
            <Input name="email" label="Email" placeholder="something@domain.com" />
            <Input name="telephone" inlineLabel={false} label="Phone" placeholder="(074) 275-34-45" />
          </Fieldset>
          <Fieldset label="Shipping details" last>
            <Input name="address" label="Address" placeholder="Hejrevej 33" />
            <Input name="zip" label="ZIP Code" placeholder="2400" />
            <Select
              name="country"
              label="Country"
              options={countryOptions}
              placeholder="Denmark"
              onValueChange={newValue => this.setState({ selected: newValue })} value={this.state.selected}
            />
            <Switch border={false} name="save_details" onValueChange={this.onToggleChange} value={this.state.toggle} />
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button icon="md-checkmark" iconPlacement="right" onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button>
        </ActionsContainer>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'Form',
  validate: values => {
    const errors = {}

    values = values.toJS()

    if (!values.first_name) {
      errors.first_name = 'First name is required.'
    }

    if (!values.last_name) {
      errors.last_name = 'Last name is required.'
    }

    if (!values.email) {
      errors.email = 'Email is required.'
    }

    return errors
  }
})(FormView)

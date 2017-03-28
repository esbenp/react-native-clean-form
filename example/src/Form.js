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
  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Contact details">
            <Input name="first_name" label="First name" placeholder="John" />
            <Input name="last_name" label="Last name" placeholder="Doe" />
            <Input name="email" label="Email" placeholder="something@domain.com" keyboardType="email-address" returnKeyType="next" blurOnSubmit={false} />
            <Input name="telephone" label="Phone" placeholder="+45 88 88 88 88" dataDetectorTypes="phoneNumber" keyboardType="phone-pad" />
            <Input name="message" label="Message" placeholder="" multiline={true} numberOfLines={5}  inlineLabel={false} />
          </Fieldset>
          <Fieldset label="Shipping details" last>
            <Input name="address" label="Address" placeholder="Hejrevej 33" />
            <Input name="city" label="City" placeholder="Copenhagen" />
            <Input name="zip" label="ZIP Code" placeholder="2400" />
            <Select
              name="country"
              label="Country"
              options={countryOptions}
              placeholder="Denmark"
            />
            <Switch label="Save my details" border={false} name="save_details" />
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

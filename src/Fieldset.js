import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './Theme'

const FieldsetLabelText = styled.Text`
  color: ${props => props.theme.Fieldset.labelColor };
  fontSize: ${props => props.theme.Fieldset.labelSize };
  fontWeight: ${props => props.theme.Fieldset.labelWeight };
  height: ${props => props.theme.Fieldset.labelHeight };
`

FieldsetLabelText.defaultProps = {
  theme: defaultTheme
}

const FieldsetLabel = props => <View><FieldsetLabelText>{ props.children }</FieldsetLabelText></View>

const FieldsetWrapper = styled.View`
  borderBottomColor: ${props => props.theme.Fieldset.borderBottomColor };
  borderBottomWidth: ${props => props.last ? 0 : props.theme.Fieldset.borderBottomWidth };
  paddingTop : ${props => props.theme.Fieldset.paddingTop };
  paddingRight : ${props => props.theme.Fieldset.paddingRight };
  paddingBottom : ${props => props.theme.Fieldset.paddingBottom };
  paddingLeft : ${props => props.theme.Fieldset.paddingLeft };
`

FieldsetWrapper.defaultProps = {
  theme: defaultTheme
}

const FieldsetFormWrapper = styled.View`

`

const Fieldset = props => {
  const { children, label, last, theme } = props

  return (
    <FieldsetWrapper last={last} theme={theme}>
      { /* text-transform is for some reason not supported in react native https://github.com/facebook/react-native/issues/2088 */ }
      { label && <FieldsetLabel>{ label.toUpperCase() }</FieldsetLabel> }
      <FieldsetFormWrapper>
        { children }
      </FieldsetFormWrapper>
    </FieldsetWrapper>
  )
}

Fieldset.PropTypes = {
  last: React.PropTypes.bool,
  label: React.PropTypes.string
}

Fieldset.defaultProps = {
  componentName: 'Fieldset',
  last: false,
  label: false,
  theme: defaultTheme
}

export default Fieldset

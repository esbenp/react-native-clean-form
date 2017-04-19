import React from 'react'
import {
  ActivityIndicator,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'
import defaultTheme from './Theme'

const ButtonWrapper = styled.View`
  flex:1;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
`

const ButtonStyle = styled.View`
  backgroundColor: ${props => props.theme.Button.backgroundColor};
  height: ${props => props.theme.Button.height};
`

ButtonStyle.defaultProps = {
  theme: defaultTheme
}

const ButtonTextWrapper = styled.View`
  flex:1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
  color: ${props => props.theme.Button.color};
  font-size: ${props => props.theme.Button.fontSize};
  font-weight: ${props => props.theme.Button.fontWeight};
`

ButtonText.defaultProps = {
  theme: defaultTheme,
  componentName: 'Button'
}

const Button = props => {
  const { children : label, icon, iconPlacement, submitting, theme, ...rest } = props

  const Touchable = Platform.OS === 'android'
    ? TouchableNativeFeedback
    : TouchableOpacity

  const formattedLabel = Platform.OS === 'android'
    ? label.toUpperCase()
    : label

  const children = [
    formattedLabel
  ]

  let IconWrapped = null
  if (icon || submitting) {
    const IconComponent = submitting
      ? <ActivityIndicator size="small" key="icon" color={theme.Button.color} />
      : <Icon key="icon" name={icon} size={14} color={theme.Button.color} />

    const prop = iconPlacement === 'left'
      ? 'marginRight'
      : 'marginLeft'

    IconWrapped = React.createElement(View, {
      children: IconComponent,
      style: {
        [prop]: 5
      }
    })
  }

  return (
    <ButtonWrapper>
      <Touchable {...rest}>
        <ButtonStyle theme={theme}>
          <ButtonTextWrapper>
            {iconPlacement === 'left' && IconWrapped}
            <ButtonText theme={theme}>
              { children }
            </ButtonText>
            {iconPlacement === 'right' && IconWrapped}
          </ButtonTextWrapper>
        </ButtonStyle>
      </Touchable>
    </ButtonWrapper>
  )
}

Button.PropTypes = {
  children: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  iconPlacement: React.PropTypes.oneOf(['left', 'right']),
  submitting: React.PropTypes.bool
}

Button.defaultProps = {
  icon: false,
  iconPlacement: 'left',
  submitting: false,
  theme: defaultTheme
}

export default Button

import React from 'react'
import {Text, View, Platform} from 'react-native'
import PropTypes from 'prop-types'
import defaultTheme from './Theme'


const NON_TEXT_PROPS = ['stackedHeight']
const NON_VIEW_PROPS = ['color', 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant', 'fontWeight', 'includeFontPadding', 'letterSpacing', 'lineHeight', 'stackedHeight', 'textAlign', 'textAlignVertical', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textShadowColor', 'textShadowOffset', 'textShadowRadius', 'writingDirection']


class LabelWrapper extends React.PureComponent {
  render() {
    const {children, inlineLabel, theme} = this.props
    const style = {
      flex: inlineLabel ? 0.5 : 1,
      flexDirection: inlineLabel ? 'row' : 'column',
      justifyContent: 'flex-start',
      paddingLeft: Platform.OS === 'android' ? 5 : 0,
      marginTop: inlineLabel ? 0 : 5,
      ...theme.Label,
    }
    NON_VIEW_PROPS.forEach(p => delete style[p])
    return <View children={children} style={style} />
  }
}

class LabelText extends React.PureComponent {
  static defaultProps = {
    theme: defaultTheme,
    componentName: 'Label',
  }

  render() {
    const {children, theme} = this.props
    const style = {
      ...theme.Label,
      ...theme.LabelText,
    }
    NON_TEXT_PROPS.forEach(p => delete style[p])
    return <Text children={children} style={style} />
  }
}

export default class Label extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  }

  render() {
    const {children, inlineLabel, theme} = this.props
    return <LabelWrapper inlineLabel={inlineLabel} theme={theme}>
      <LabelText inlineLabel={inlineLabel} theme={theme}>{children}</LabelText>
    </LabelWrapper>
  }
}

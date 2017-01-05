import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components/native'

// Flex: 1 will force the form to take up remaining height of the view
class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: null
    }

    this.onLayout = this.onLayout.bind(this)
  }

  onLayout(e) {
    this.setState({
      height: e.nativeEvent.layout.height
    })
  }

  render() {
    const { children, ...rest } = this.props

    return (
      <View style={{ flex: 1 }} onLayout={this.onLayout}>
        <ScrollView contentContainerStyle={{ minHeight: this.state.height }}>
            { children }
        </ScrollView>
      </View>
    )
  }
}

export default Form

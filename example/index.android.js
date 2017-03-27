import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Container from './src'

export default class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Container />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  }
});

AppRegistry.registerComponent('example', () => example);
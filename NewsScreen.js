import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To News Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
});

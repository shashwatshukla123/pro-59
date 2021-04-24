import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HeroScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To Hero Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 100 
    }
})
import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {
  render () {
    return (
      <View>

      </View>
    );
  }
}


var AppNavigtor = createSwitchNavigator({
  screen1: HomeScreen,
  screen2: SummaryScreen,
});

const AppcContainer = createAppContainer(AppNavigtor);

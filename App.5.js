import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, ImageBackground } from 'react-native';

import Background from "./imgs/drink4.jpg";

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

export default class App extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {

  };

  render() {
    
    return (
      <View style={styles.container}>
        <AnimatedImageBackground style={styles.back} source={Background}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    flex: 1,
    width: 100
  }
});

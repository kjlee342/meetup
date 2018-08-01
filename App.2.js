import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1500,
    }).start(() => {
      this.state.animation.setValue(0)
    })
  };

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });

    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 180, 360],
      outputRange: ['rgb(255, 99, 71)', 'rgb(135, 206, 235)','rgb(255, 99, 71)']
    });

    const sizeInterpolate = this.state.animation.interpolate({
      inputRange: [0, 180, 360],
      outputRange: ['50%', '25%', '50%']
    });

    const opacityInterpolate = this.state.animation.interpolate({
      inputRange: [0, .1],
      outputRange: [1, 0.8],
      extrapolate: 'clamp'
    });

    const shapeStyle = {
      transform: [
        { rotate: rotateInterpolate },
      ],
    };
    
    const diaStyle = {
      backgroundColor: colorInterpolate,
      width: sizeInterpolate,
      height: sizeInterpolate,
      opacity: opacityInterpolate
    };
    
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.circle, shapeStyle]}>
            <Animated.View style={[styles.diamond, shapeStyle, diaStyle]} />
          </Animated.View>
        </TouchableWithoutFeedback>
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
  diamond:{
    width: 100,
    height: 100,
  },
  circle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: 'skyblue'
  }
});

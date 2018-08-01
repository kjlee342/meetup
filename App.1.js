import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
  state = {
    animation: new Animated.Value(0),
    line: new Animated.Value(0),
  };

  startAnimation = () => {
    this.state.animation.addListener( (value) => {
      console.log(value)
    });

    Animated.parallel([
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 2000
      }),
      Animated.timing(this.state.line, {
        toValue: 300,
        duration: 2000
      }),
      Animated.delay(3000)
    ]).start(() => {
      this.state.animation.setValue(0)
      this.state.line.setValue(0)
    });
  };

  render() {
    const circleScaleInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.5],
    });

    const circleTranslateYInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    })

    const lineOpacityInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.1, 0.75 ,1],
      outputRange: [0, 1, .7, 0]
    });
    
    const lineStyle = {
      width: this.state.line,
      opacity: lineOpacityInterpolate
    };

    const circleStyle = {
      transform: [
        { translateX: circleTranslateYInterpolate },
        { scale: circleScaleInterpolate }
      ]
    };

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Animated.View style={[styles.line, lineStyle]} />
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.circle, circleStyle]} />
          </TouchableWithoutFeedback>
        </View>
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
  line: {
    backgroundColor: '#000',
    height: 2,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    position: 'absolute',
    left: -25
  },
  box: {
    height: 500,
    width: 300,
    alignItems:'flex-start',
    justifyContent: 'center',
  }
});

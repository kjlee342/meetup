import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Animated, 
  TouchableWithoutFeedback, 
  Easing, 
  Dimensions, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import { Actions } from './node_modules/react-native-router-flux';

const { width, height } = Dimensions.get('window');

export default class Animation1 extends Component {
  state = {
    ball: new Animated.ValueXY(),
    line: new Animated.Value(0),
    ballScale: new Animated.Value(0),
  };

  startAnimation = () => {
    this.state.ball.addListener( (value) => {
      console.log(value)
    });

    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.ball.y, {
          toValue: height-100,
          duration: 1000,
          easing: Easing.bounce
        }),
        Animated.timing(this.state.line, {
          toValue: 400,
          duration: 300
        }),
        Animated.timing(this.state.ballScale, {
          toValue: 1,
          duration: 700,
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.ball.x, {
          toValue: width,
          duration: 1000,
        }),
        Animated.timing(this.state.ballScale, {
          toValue: 0,
          duration: 500,
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.ball.y, {
          toValue: -100,
          duration: 1,
        }),
        Animated.timing(this.state.ball.x, {
          toValue: 0,
          duration: 1,
        }),
      ]),
      Animated.timing(this.state.ball.y, {
        toValue: 0,
        duration: 300,
      })
    ]).start(() => {
      this.state.line.setValue(0);
    });
  };

  render() {
    const circleScaleInterpolate = this.state.ballScale.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.5],
    });

    const lineOpacityInterpolate = this.state.line.interpolate({
      inputRange: [0, 400],
      outputRange: [1, 0],
    });
    
    const lineStyle = {
      height: this.state.line,
      opacity: lineOpacityInterpolate
    };

    const circleStyle = {
      transform: [
        { translateX: this.state.ball.x },
        { translateY: this.state.ball.y },
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

        <View style={styles.back}>
          <TouchableOpacity onPress={() => {Actions.pop()}}>
            <Text style={{fontSize: 30}}>&lt;</Text>
          </TouchableOpacity>
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
    backgroundColor: 'gray',
    width: 2,
    top: 50,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    position: 'absolute',
    top: 50
  },
  box: {
    height: '100%',
    width: '100%',
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  back: {
    position: 'absolute',
    left: 15,
    top: 30,
  },
});

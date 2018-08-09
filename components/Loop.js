import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Animated, 
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

let loopToggle = false;

export default class Loop extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  toggleAnimation = () => {
      const toValue = this._loop ? 0 : 1;

      Animated.loop(Animated.timing(this.state.animation, {
          toValue,
          duration: 1000,
      })).start();

      this._loop = !this._loop;
  };

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const shapeStyle = {
      transform: [
        { rotate: rotateInterpolate },
      ],
    };
    
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.circle, shapeStyle]}>
            <TouchableWithoutFeedback onPress={this.toggleAnimation}>
                <Animated.View style={[styles.rectangle, shapeStyle]} />
            </TouchableWithoutFeedback>
        </Animated.View>
        
        <View style={styles.backButton}>
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
  rectangle:{
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
  },
  circle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: 'skyblue'
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 30,
  },
});

import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Animated, 
  TouchableWithoutFeedback, 
  KeyboardAvoidingView,
  ImageBackground, 
  TextInput,
  Text,
} from 'react-native';

import Background from "./imgs/drink1.jpg";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const createAnimationStyle = (animation) => {
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-5, 0],
  });

  return {
    opacity: animation,
    transform : [{ 
      translateY 
    }]
  }
};

export default class App extends Component {
  state = {
    animation: new Animated.Value(0),
    email: new Animated.Value(0),
    password: new Animated.Value(0),
    button: new Animated.Value(0),
  };

  componentDidMount = () => {
    Animated.sequence([
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1800,
      }),
      Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 500,
      }),
      Animated.stagger(200, [
        Animated.timing(this.state.email, {
          toValue: 1,
          duration: 200
        }),
        Animated.timing(this.state.password, {
          toValue: 1,
          duration: 200
        }),
        Animated.timing(this.state.button, {
          toValue: 1,
          duration: 200
        }),
      ])
    ]).start()
  }

  render() {
    const coverHeightInterpolate = this.state.animation.interpolate({
      inputRange: [0, .4, 1],
      outputRange: ["100%", "100%", "0%"],
      extrapolate: 'clamp'
    });

    const coverOpacityInterpolate = this.state.animation.interpolate({
      inputRange: [0, .4, 1],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    })

    const loginWrapbgColorInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .3)'],
    });

    const loginWrapTranslateYInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [-30, 0],
      extrapolate: 'clamp',
    });

    const titleOpacityInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [0, 1,],
    });

    const coverStyles = {
      height : coverHeightInterpolate,
      opacity: coverOpacityInterpolate,
    }
    
    const loginWrapStyles ={
      backgroundColor: loginWrapbgColorInterpolate,
      transform: [
        { translateY: loginWrapTranslateYInterpolate },
      ]
    };

    const titleStyle = {
      opacity: titleOpacityInterpolate
    };

    const emailStyle = createAnimationStyle(this.state.email);
    const passwordStyle = createAnimationStyle(this.state.password);
    const buttonStyle = createAnimationStyle(this.state.button);

    return (
      <View style={styles.container}>
        <ImageBackground
          style={[styles.box]} 
          source={Background}
        >
          <Animated.View style={[styles.loginWrap, loginWrapStyles]}>
            <KeyboardAvoidingView style={styles.loginView} behavior="padding">

              <Animated.Text style={[styles.title, titleStyle]}>React Native</Animated.Text>
              
              <AnimatedTextInput
                style={[styles.textInput, emailStyle]}
                placeholder='Email'
              />
              <AnimatedTextInput
                style={[styles.textInput, passwordStyle]}
                placeholder='Password'
                secureTextEntry
              />

              <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, buttonStyle]}>
                  <Text style={styles.buttonText}>Login</Text>
                </Animated.View>
              </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
          </Animated.View>

        </ImageBackground>
        <Animated.View style={[styles.cover, coverStyles]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
  },
  box: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 70,
  },
  loginWrap: {
    width: '100%',
    height: '30%',
    backgroundColor: 'black',
  },
  loginView: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button:{
    marginTop: 13,
    backgroundColor: "skyblue",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    width: '40%',
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
  },
  textInput: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    padding: 8,
    width: '60%',
  },
});

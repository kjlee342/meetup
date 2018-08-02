import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home';
import Animation1 from './Animation1';
import Animation2 from './Animation2';
import Animation3 from './Animation3';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene 
            key='home'
            component={Home}
            title='Home'
            hideNavBar
          />
          <Scene 
            key='animation1'
            component={Animation1}
            title='Animation1'
            hideNavBar
          />
          <Scene 
            key='animation2'
            component={Animation2}
            title='Animation2'
            hideNavBar
          />
          <Scene 
            key='animation3'
            component={Animation3}
            title='Animation3'
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

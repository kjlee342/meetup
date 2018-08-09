import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.AnimatedValue()}
            >
                <Text style={styles.buttonText}>Animated.Value</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.Easing()}
            >
                <Text style={styles.buttonText}>Easing</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.ValueXY()}
            >
                <Text style={styles.buttonText}>ValueXY</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.Parallel()}
            >
                <Text style={styles.buttonText}>Parallel</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.Loop()}
            >
                <Text style={styles.buttonText}>Loop</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.Interpolate()}
            >
                <Text style={styles.buttonText}>Interpolate</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.Extrapolate()}
            >
                <Text style={styles.buttonText}>Extrapolate</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.Practice()}
            >
                <Text style={styles.buttonText}>Practice</Text>
            </TouchableOpacity>
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
  button:{
    marginTop: 20,
    backgroundColor: "skyblue",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    width: '60%',
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
  },
});

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.animation1()}
            >
                <Text style={styles.buttonText}>One</Text>
            </TouchableOpacity>

             <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.animation2()}
            >
                <Text style={styles.buttonText}>Two</Text>
            </TouchableOpacity>

             <TouchableOpacity 
              style={styles.button} 
              onPress={() => Actions.animation3()}
            >
                <Text style={styles.buttonText}>Three</Text>
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

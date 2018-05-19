import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import { TabNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';

const config = ({
  apiKey: "AIzaSyBNrc0MB_r8VZYb01O7S9YLizuU-_iQGrM",
  authDomain: "task-3f679.firebaseapp.com",
  databaseURL: "https://task-3f679.firebaseio.com",
  projectId: "task-3f679",
  storageBucket: "task-3f679.appspot.com",
  messagingSenderId: "434814310971"
});

firebase.initializeApp(config);

export default class RegisterForm extends React.Component {
  
  constructor(props){
    super(props)
    this.state = ({
      email: '',
      password: '',
    })
  }

  onSignUp(){
    setTimeout(() => {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(){
        Actions.login();
      }).catch(function(error){
        alert(error.message);
      })
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="email"
          keyboardType="email-address"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={(email) => this.state.email = email}
          style={styles.input} />

        <TextInput
          underlineColorAndroid="transparent"
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={(password) => this.state.password = password}
          secureTextEntry
          style={styles.input} />
          <Text>{this.state.error}</Text>

        <TouchableOpacity style={styles.SubmitButton} onPress={this.onSignUp.bind(this)}>
          <Text style={styles.ButtonText}>
            REGISTER
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#51a5ff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  input: {

    margin: 15,
    width: 330,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#479bf5',
    paddingHorizontal: 20,
  },

  SubmitButton: {
    margin: 15,
    backgroundColor: '#2980b9',
    width: 330,
    height: 40,
  },

  ButtonText: {
    margin: 10,
    textAlign: 'center',
    color: 'white',

  }
});
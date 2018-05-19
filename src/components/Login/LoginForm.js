import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

export default class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      email: '',
      password: ''
    })
  }

  SignIn(){
    setTimeout(() => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(){
      var user = firebase.auth().currentUser.uid;
      if(user != null){
        Actions.profile();
      }
    }).catch(function(error){
      alert(error.code);
      alert(error.message);
    })
  }, 5000);
  }
  render() {
    return (
        <View style={styles.container}>
        <TextInput
        underlineColorAndroid ="transparent" 
        placeholder="email"
        keyboardType="email-address"
        onChangeText={(email) => this.state.email = email}
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={styles.input}/>

      <TextInput 
      underlineColorAndroid ="transparent" 
      placeholder="password"
      placeholderTextColor="rgba(255,255,255,0.7)"
      onChangeText={(password) => this.state.password = password}
      secureTextEntry
      style={styles.input}/>

      <TouchableOpacity style={styles.SubmitButton} onPress={this.SignIn.bind(this)}>
        <Text style={styles.ButtonText}>
          LOGIN
        </Text>
      </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  container: {
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
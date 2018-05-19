import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity ,KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
import {StackNavigator} from 'react-navigation';
import Register from '../Register/Register';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  static navigationOptions = {
    title: "Login"
  }

  render() {
    const {navigate} = this.props.navigation

    return (
      <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      >
        <View style={styles.logoCon}>
          <Image style={styles.logo}
            source={require('.././Images/taskLogo.png')}
          />
      </View>

      <LoginForm />
      <View style={styles.textCon}>
      <Text>
      Don't have an account,
      </Text>
      <TouchableOpacity onPress={() => Actions.register()}> 
        <Text style={styles.signUpText}>
          Sign up 
        </Text>
        </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#51a5ff',
  },

  logoCon:{
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpText:{
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },

  textCon:{
    padding:50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  logo:{
    //margin: 80,
    width: 100,
    height:100,
  },
});
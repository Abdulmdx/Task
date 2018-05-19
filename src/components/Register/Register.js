import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import RegisterForm from './RegisterForm';

export default class Register extends React.Component {
  static navigationOptions = {
    title: "Register"
  }
  render() {
    return (
      <View 
      style={styles.container}
      behavior="padding"
      >
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.logoCon}>
          <Image style={styles.logo}
            source={require('.././Images/taskLogo.png')}
          />
      </View>

      <RegisterForm />
      </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#51a5ff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  logoCon:{ 
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width: 100,
    height:100,
  },

  
});

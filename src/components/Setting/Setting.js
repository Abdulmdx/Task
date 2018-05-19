import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Icon, Header } from 'react-native-elements';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class Setting extends React.Component {

  LogOut(){
    setTimeout(() => {
    firebase.auth().signOut().then(function(){
      Actions.login();
    }).catch(function(error){
      alert("Error please try again");
    });
  }, 5000);
  }


  render() {
    return (
      <View style={{backgroundColor: '#51a5ff', flex: 1}}>
      <View>
      <Header 
             leftComponent={{icon: 'menu', color: '#fff'}}
             centerComponent={{text: 'TASK', style: {color: '#fff'}}}/>
      </View>

        <View style={styles.container}>

        <TouchableOpacity style={styles.SubmitButton} onPress={this.LogOut.bind(this)}>
          <Text style={styles.ButtonText}>
            Sign Out
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SubmitButton}>
          <Text style={styles.ButtonText}>
            About us
          </Text>
        </TouchableOpacity>


            </View>
            </View>

    );
  }
}
const styles = StyleSheet.create({
  container:{
      alignItems: 'center',
      justifyContent: 'center',
  },

  SubmitButton: {
    margin: 15,
    backgroundColor: '#939384',
    width: 330,
    height: 55,
  },

  ButtonText: {
    margin: 15,
    textAlign: 'center',
    color: 'white',

  },

  Bar: {
    backgroundColor: 'white',
    width: 370,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    top: 215,
},

logo3:{
        
    width:22,
    height:22,
},
  
});
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class EditProfile extends React.Component {
  constructor(props){
    super(props)
    this.state=({
          Firstname:"",
          Lastname:"",
          age:"",
          email:"",
          Facebook:"",
          Instagram:"",
          Twitter:"",
          Skills:"",
          right:"",
    })
  }

  InsertData(){
    var userId = firebase.auth().currentUser.uid;

   setTimeout(() => {
    firebase.database().ref('user/' + userId).set(
      {
        Firstname: this.state.Firstname,
        Lastname: this.state.Lastname,
        age: this.state.age,
        email: this.state.email,
        Facebook: this.state.Facebook,
        Instagram: this.state.Instagram,
        Twitter: this.state.Twitter,
        Skills: this.state.Skills,
        right: this.state.right,
      } 
    ).then(() => {
      Actions.profile();
    }).catch((error) => {
      alert(error);
    })
   }, 5000); 
  }


  render() {
    return (
        <View>
        <View style={styles.container}>

        <TouchableOpacity>
        <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
        
        <View style={styles.circle}>
        <Image style={styles.logo}
            source={require('.././Images/user.png')}
          />

         </View>
         </View>
         
         
        <View style={styles.con}>
        <ScrollView>
        <View>
         <Text style={styles.textStyle}>Review by client</Text>
        </View>
        <View>
           <Text style={styles.textStyle}>Personal Information</Text>
           <TextInput
             underlineColorAndroid ="transparent" 
             placeholder="Firstname"
             onChangeText={(Firstname) => this.state.Firstname = Firstname}
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}/>
           <TextInput
             underlineColorAndroid ="transparent" 
             placeholder="Lastname"
             onChangeText={(Lastname) => this.state.Lastname = Lastname}
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}/>
           <TextInput
             underlineColorAndroid ="transparent" 
             placeholder="age"
             onChangeText={(age) => this.state.age = age}
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}/>
           <TextInput
             underlineColorAndroid ="transparent" 
             placeholder="Email"
             onChangeText={(email) => this.state.email = email}
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}/>
        </View>

        <View>
           <Text style={styles.textStyle}>Social Media Account</Text>
           <TextInput
             underlineColorAndroid ="transparent" 
             placeholder="Facebook"
             onChangeText={(Facebook) => this.state.Facebook = Facebook}
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}/>
           <TextInput
             underlineColorAndroid ="transparent" 
             placeholder="Instagram"
             onChangeText={(Instagram) => this.state.Instagram = Instagram}
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}/>
           <TextInput
             underlineColorAndroid ="transparent" 
             placeholder="Twitter"
             onChangeText={(Twitter) => this.state.Twitter = Twitter}
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}/>
        </View>

        <View>
           <Text style={styles.textStyle}>Skills</Text>
           <TextInput
             underlineColorAndroid ="transparent" 
             placeholder="Describ skills you have"
             onChangeText={(Skills) => this.state.Skills = Skills}
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}/>

           <TextInput
             underlineColorAndroid ="transparent" 
             placeholder="Why are you the right person for the task"
             onChangeText={(right) => this.state.right = right}
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}/>
        </View>
         
        </ScrollView>
         </View>
          
         <TouchableOpacity style={styles.SubmitButton} onPress={this.InsertData.bind(this)}>
        <Text style={styles.ButtonText}>
          EDIT
        </Text>
      </TouchableOpacity>

        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        width: 370,
        height: 200,
    },

    circle:{
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    
    con:{
        backgroundColor: 'white',
        width: 360, 
        height: 380, 
        borderColor: 'black',
        borderWidth: 1,

    },

    logo: {
        width:100,
        height:100,

    },

    logo2:{
        width:20,
        height:20,
        left: 50,
    },

    textStyle:{
        fontSize:15,
        fontWeight: '500',
    },

    textStyle2:{
        fontSize:15,
        fontWeight: '500',
        margin: 5,
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
    
      addButton:{
          color:'blue',
          alignItems: 'center',
          justifyContent: 'center',
          textDecorationLine: 'underline',
      },

      SubmitButton: {
        margin: 15,
        backgroundColor: '#2980b9',
        width: 330,
        height: 40,
        //bottom: 10,
      },
    
      ButtonText: {
        margin: 15,
        textAlign: 'center',
        color: 'white',
    
      }



});
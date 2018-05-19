import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity ,ScrollView, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import * as firebase from 'firebase';

export default class AddTask extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      date: "",
      time: "",
      details:"",
      address:"",
      price:"",
      userId: firebase.auth().currentUser.uid,
    }
  }


  InsertTask(){

    setTimeout(() => {

      firebase.database().ref('task').push(
        {
          data: this.state.date,
          time: this.state.time,
          details: this.state.details,
          address: this.state.address,
          price: this.state.price,
          userId: this.state.userId
        }
      ).then(()=> {
        alert("Task successfully inserted");
      }).catch((error) => {
        alert("please wait");
      });
    }, 5000);
  }
  componentDidMount(){
    var user = firebase.auth().currentUser.uid;

    firebase.database().ref('message/' + user).once('value', function(snap){
      
      if(snap.val() != null){
      var accept = snap.val().Accept;
        alert(accept);
    }
    })
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#51a5ff'}}>

        <View>

        <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'TASK', style: {color: '#fff'}}}/>

       </View>
      <View style={styles.container}>

        <View style={styles.rec}>

        <ScrollView>
        <TextInput
        underlineColorAndroid ="transparent" 
        placeholder="Task Details"
        placeholderTextColor="rgba(255,255,255,0.7)"
        onChangeText={(details) => this.state.details = details}
        style={styles.input}/>

        <TextInput
        underlineColorAndroid ="transparent" 
        placeholder="Address"
        onChangeText={(address) => this.state.address = address}
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={styles.input}/>
      
       <TextInput
        underlineColorAndroid ="transparent" 
        placeholder="price"
        onChangeText={(price) => this.state.price = price}
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={{margin: 15, width: 110, height: 50, borderColor: '#939384', borderWidth: 1, backgroundColor: '#939384', paddingHorizontal: 40,}}/>
        
        <DatePicker
        style={{width: 300, height: 50, margin: 20}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2017-05-01"
        maxDate="2017-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 8,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 40,
            backgroundColor: '#939384'
          }
        }}
        onDateChange={(date) => this.state.date = date}/>

         <DatePicker
          style={{width: 300, height: 50, margin: 20}}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          placeholder="select time"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 8,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 40,
              backgroundColor: '#939384'
            }
          }}
          onDateChange={(time) => this.state.time = time}
        />
        
         </ScrollView>

        </View>

        <TouchableOpacity style={styles.SubmitButton} onPress={this.InsertTask.bind(this)}>
        <Text style={styles.ButtonText}>
          APPLY
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

    input: {
        margin: 15,
        //right: 10,
        width: 350,
        height: 80,
        borderColor: '#939384',
        borderWidth: 1,
        backgroundColor: '#939384',
        paddingHorizontal: 40,
      },

     rec:{
        backgroundColor: '#51a5ff',
        width: 380,
        height: 490,
        borderColor: '#51a5ff',
        borderWidth: 1,
        //left: 80,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    SubmitButton: {
        bottom:60,
        margin: 15,
        backgroundColor: '#2980b9',
        width: 330,
        height: 40,
      },
    
      ButtonText: {
        margin: 15,
        textAlign: 'center',
        color: 'white',
    
      },

      logo3:{
        
        width:22,
        height:22,
        tintColor:'black',
       // margin: 38,
    },

    Bar: {
        backgroundColor: 'white',
        width: 370,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        bottom: 60,
    },
  
});
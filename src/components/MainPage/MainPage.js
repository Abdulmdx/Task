import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header, Card, Button, List, ListView } from 'react-native-elements';
import * as firebase from 'firebase';
import { database } from 'firebase';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }

  componentDidMount() {
    var tasks = [];

    firebase.database().ref('task').on('child_added', function (dataSnapshoht) {
      //console.log(tasks);
      this.setState({
        tasks: tasks
      })

      tasks.push({
        details: dataSnapshoht.val().details,
        address: dataSnapshoht.val().address,
        price: dataSnapshoht.val().price,
        data: dataSnapshoht.val().data,
        time: dataSnapshoht.val().time,
        userId: dataSnapshoht.val().userId,
      });
    }.bind(this));
  }
  
  SendPermission(arg){
    var user = firebase.auth().currentUser.uid;
    if(arg == user){
      console.log("this is a task that you posted chose another one");
    }
    firebase.database().ref('user/' + user).once('value', function(snap){
      var firstname = snap.val().Firstname;
      var lastname = snap.val().Lastname;
      var age = snap.val().age;
      var email= snap.val().email;
      var facebook = snap.val().Facebook;
      var  instagram= snap.val().Instagram;
      var twitter = snap.val().Twitter;
      var skills = snap.val().Skills;
      var right = snap.val().right;


    setTimeout(() => {
      firebase.database().ref('message/' + arg).set({
        Firstname: firstname,
        Lastname: lastname,
        age: age,
        email: email,
        Facebook: facebook,
        Instagram: instagram,
        Twitter: twitter,
        Skills: skills,
        right: right,
        User: user,
      })
    }, 5000);

  })
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'TASK', style: { color: '#fff' } }} />

        <Text style={styles.textStyle}>Here are all the task, need more improve you skills to impress client. </Text>
        <View style={styles.rec}>
          <ScrollView>
            <Card>
              {
                this.state.tasks.map((l, i) => {
                  return (
                    <View key={i} style={{margin: 15}}>
                      <Text>Task detail: {l.details}</Text>
                      <Text>Task location: {l.address}</Text>
                      <Text>Price: {l.price}£</Text>
                      <Text>Date: {l.data}</Text>
                      <Text>Time: {l.time}</Text>
                      <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        onPress={this.SendPermission.bind(this, l.userId)}
                        title='APPLY' />
                    </View>
                  );
                })
              
              }
            </Card>
          </ScrollView>

        </View>


      </View>

    );
  }
}
const styles = StyleSheet.create({
  rec: {
    backgroundColor: 'white',
    width: 360,
    height: 500,
    borderColor: 'black',
    borderWidth: 1,
    //right: 15,
    //margin: 15
  },

  Bar: {
    //backgroundColor: 'white',
    // borderColor: 'black',
    width: 370,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    //top: 500,
  },

  textStyle: {
    textAlign: 'center',
    margin: 30,
  },

  logo3: {

    width: 22,
    height: 22,
    //margin: 38,
    tintColor: 'black',
  },



});
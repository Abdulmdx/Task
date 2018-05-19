import React, { createElement } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import { database } from 'firebase';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({

            Firstname: "",
            Lastname: "",
            Age: "",
            Email: "",
            Facebook: "",
            Instagram: "",
            Twitter: "",
            Skills: "",
            Right: "",
        })
    }


    componentWillMount() {
        var userId = firebase.auth().currentUser.uid;

        firebase.database().ref('user/' + userId).once('value', function (snapshot) {
            if (snapshot.val() != null) {
            var firstname = snapshot.val().Firstname;
            var lastname = snapshot.val().Lastname;
            var age = snapshot.val().age;
            var email = snapshot.val().email;
            var facebook = snapshot.val().Facebook;
            var instagram = snapshot.val().Instagram;
            var twitter = snapshot.val().Twitter;
            var skills = snapshot.val().Skills;
            var right = snapshot.val().right;

            this.setState({
                Firstname: firstname,
                Lastname: lastname,
                Age: age,
                Email: email,
                Facebook: facebook,
                Instagram: instagram,
                Twitter: twitter,
                Skills: skills,
                Right: right
            });
        }
        }.bind(this))
    }

    SendBack = () => {
        var userId = firebase.auth().currentUser.uid;

       setTimeout(() => {
        firebase.database().ref('message/' + userId).once('value', function(data){
            var other = data.val().User;
            
            var firstname = data.val().Firstname;

            firebase.database().ref('message/' + other).set(
                {
                    Accept: "your are the perfect for task",
                }
            )
        })
       }, 5000); 
    }

    SendCancel = () => {
        var userId = firebase.auth().currentUser.uid;

        firebase.database().ref('message/' + userId).once('value', function(data){
            var other = data.val().User;

            var firstname = data.val().Firstname;

           setTimeout(() => {
            firebase.database().ref('message/' + other).set(
                {
                    Accept: "your are not qualify",
                }
            )
           }, 5000); 
        })
    }
    componentDidMount() {
        var userId = firebase.auth().currentUser.uid;
        var self = this;
        firebase.database().ref('message/' + userId).once('value', function (snap) {
            if(snap.val() != null){
            var firstname = snap.val().Firstname;
            var lastname = snap.val().Lastname;
            var age = snap.val().age;
            var email = snap.val().email;
            var facebook = snap.val().Facebook;
            var instagram = snap.val().Instagram;
            var twitter = snap.val().Twitter;
            var skills = snap.val().Skills;
            var right = snap.val().right;
            var userId = snap.val().User;

            Alert.alert(
                right,
                firstname + " " + lastname + " " +age + " " + email + " " + facebook + " " + instagram + " " + twitter + " " + skills,
                [
                    {text: 'cancel', onPress: self.SendCancel},
                    {text: 'OK', onPress: self.SendBack}
                ]
            )
        }
        })
    }

    MoveEdit() {
        Actions.editProfile();
    }
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'TASK', style: { color: '#fff' } }} />
                <View style={styles.container}>

                    <View style={styles.circle}>
                        <Image style={styles.logo}
                            source={require('.././Images/user.png')}
                        />

                    </View>
                </View>


                <TouchableOpacity style={styles.SubmitButton} onPress={this.MoveEdit.bind(this)}>
                    <Text style={styles.ButtonText}>
                        Edit Profile
          </Text>
                </TouchableOpacity>


                <View style={styles.con}>
                    <ScrollView>
                        <View style={styles.rec}>
                            <Text style={styles.textStyle}>Personal Information</Text>
                            <Text style={styles.textStyle2}>FirstName:  {this.state.Firstname}</Text>
                            <Text style={styles.textStyle2}>Lastname: {this.state.Lastname}</Text>
                            <Text style={styles.textStyle2}>Age: {this.state.Age}</Text>
                            <Text style={styles.textStyle2}>Email: {this.state.Email} </Text>
                        </View>

                        <View style={styles.rec}>
                            <Text style={styles.textStyle}>Social Media Account</Text>
                            <Text style={styles.textStyle2}>Facebook: {this.state.Facebook}</Text>
                            <Text style={styles.textStyle2}>Instagram: {this.state.Instagram} </Text>
                            <Text style={styles.textStyle2}>Twitter: {this.state.Twitter}</Text>
                        </View>

                        <View style={styles.rec}>
                            <Text style={styles.textStyle}>Skills</Text>
                            <Text style={styles.textStyle2}>Describ skills: {this.state.Skills}</Text>
                            <Text style={styles.textStyle2}>Why are you the right person: {this.state.Right}</Text>
                        </View>

                    </ScrollView>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#51a5ff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 370,
        height: 200,
    },

    barCon: {
        backgroundColor: '#51a5ff',
        width: 370,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    Bar: {
        backgroundColor: 'white',
        width: 370,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    circle: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    rec: {
        backgroundColor: 'white',
        width: 360,
        height: 150,
        //borderColor: 'black',
        //borderWidth:1,
        right: 15,
        margin: 10
    },

    con: {
        backgroundColor: 'white',
        width: 360,
        height: 360,
        borderColor: 'black',
        borderWidth: 1,

    },

    logo: {
        width: 100,
        height: 100,

    },

    logo2: {
        width: 30,
        height: 30,
        left: 150,
        bottom: 15,
    },

    logo3: {

        width: 22,
        height: 22,
        // margin: 38,
    },


    info: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
        margin: 30
    },

    textStyle: {
        fontSize: 15,
        fontWeight: '500',
    },

    textStyle2: {
        fontSize: 15,
        fontWeight: '500',
        margin: 5,
    },

    SubmitButton: {
        margin: 0,
        backgroundColor: '#2980b9',
        width: 370,
        height: 40,
    },

    ButtonText: {
        margin: 10,
        textAlign: 'center',
        color: 'white',

    }

});
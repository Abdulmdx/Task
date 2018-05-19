import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import Profile from './src/components/Profile/Profile';
import EditProfile from './src/components/EditProfile/EditProfile';
import AddTask from './src/components/AddTask/AddTask';
import Setting from './src/components/Setting/Setting';
import MainPage from './src/components/MainPage/MainPage';
//import { StackNavigator } from 'react-navigation';
//import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Router, Scene } from 'react-native-router-flux';

const TabIcon = ({selected, title}) => {
  return(
    <Text style={{color: selected? 'red' : 'black'}}> {title}</Text>
  );
}
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'root'}>

          <Scene key="login"  hideNavBar direction="horizontal" component={Login} title="Login"/>
          <Scene key="register" hideNavBar component={Register} title="Register" />

            <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#ffffff'}} tabBarPosition={'bottom'}>
               <Scene key="mainPage"  hideNavBar component={MainPage} title="MainPage" icon={TabIcon} />
               <Scene key="add"  hideNavBar component={AddTask} title="Add Task" icon={TabIcon} />
               <Scene key="profile"  hideNavBar component={Profile} title="Profile" icon={TabIcon} />
               <Scene key="setting"  hideNavBar component={Setting} title="Setting" icon={TabIcon} />
              </Scene>
              <Scene key="editProfile"  hideNavBar direction="vertical" component={EditProfile} title="Edit Profile" icon={TabIcon} />
        </Scene>
      </Router>
    );
  }
}

/*
const App = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
})
*/
/*
const App = TabNavigator({
  Home: {screen: MainPage},
  Add: {screen: AddTask},
  Profile: {screen: Profile},
  Setting: {screen: Setting},
},{
  showIcon: true,
  tabBarPosition: "bottom",
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'white',
    labelStyle:{
      fontSize: 12,
      padding: 0,
    }
  }
});
*/
const styles = StyleSheet.create({


});
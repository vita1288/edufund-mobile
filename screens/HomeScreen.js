import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.headerTxt}>Welcome, { this.props.navigation.state.params.UserEmail }  </Text>
      <View style={styles.subView}>
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('ApplyLoan')}>
        <Text style={styles.btnTxt}>Apply Loan</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('LoanHistory')}>
        <Text style={styles.btnTxt}>View Loan History</Text>
      </TouchableOpacity>
     
      </View>
        </View>
    );
  }
}


class ProfileScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Profile',
  };
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.headerTxt}>Profile Screen  </Text>
      <View style={styles.subView}>
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('ResetPassword', {UserEmail: this.props.navigation.state.params.UserEmail})}>
        <Text style={styles.btnTxt}>Reset Password</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Welcome')}>
        <Text style={styles.btnTxt}>Log out</Text>
      </TouchableOpacity>
      </View>
        </View>
    );
  }
}


class LoanReportScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Loan Report',
  };
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.headerTxt}>Loan Report </Text>
            <View style={styles.subView}>
            </View>
              </View>
    );
  }
}



const MainNavigation = createBottomTabNavigator({
    HomeScreen : {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        headerTitle: <Text>Home</Text>
      })
    },
    LoanReportScreen : {
      screen: LoanReportScreen,
      navigationOptions: {
        title: 'Loan Report',
      },
    },
    ProfileScreen : {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
      },
    },
  },
  {
    headerMode: 'screen',
    headerVisible: true,
    navigationOptions: {
      headerMode: 'screen',
      headerVisible: true,
    },
  }
);

export default createAppContainer(MainNavigation);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E90FF',
    height: 700,
  },
  subView: {
    backgroundColor: 'white',
    height: 430,
    marginTop: 240,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  headerTxt: {
    fontSize: 25,
    marginLeft: 40,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 140,
  },
  subTxt: {
    color: 'black',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  nameInput: {
    height: 40,
    width: 270,
    marginLeft: 40,
    borderBottomWidth: 1,
    marginTop: 30,
  },
  btn: {
    height: 50,
    width: 200,
    backgroundColor: '#1E90FF',
    borderRadius: 80,
    borderWidth: 2,
    marginLeft: 70,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  endView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  endTxt: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 60,
    fontWeight: 'bold',
  },
  endBtn: {
    marginRight: 80,
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
  },
  TextComponentStyle: {
      fontSize: 20,
     color: "#000",
     textAlign: 'center', 
     marginBottom: 15
    }
});

import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler, DeviceEventEmitter, Alert } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Ionicons } from 'react-native-vector-icons';



class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  constructor(props) {
    super(props)
    this.backPressSubscriptions = new Set();
  }

  componentDidMount = () => {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    DeviceEventEmitter.addListener('hardwareBackPress', () => {
      let invokeDefault = true
      const subscriptions = []

      this.backPressSubscriptions.forEach(sub => subscriptions.push(sub))

      for (let i = 0; i < subscriptions.reverse().length; i += 1) {
        if (subscriptions[i]()) {
          invokeDefault = false
          break
        }
      }

      if (invokeDefault) {
        Alert.alert('Hold on!', 'Are you sure you want to exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      }
    })

    this.backPressSubscriptions.add(this.handleHardwareBack)
  }

  componentWillUnmount = () => {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    this.backPressSubscriptions.clear()
  }

  handleHardwareBack = () => { /* do your thing */ }

  render() {
    
    return (
      <View style={styles.container} >
      <Text style={styles.headerTxt}>Welcome, { this.props.navigation.state.params.UserEmail }  </Text>
      <View style={styles.subView}>
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('ApplyLoan', {UserEmail: this.props.navigation.state.params.UserEmail})}>
        <Text style={styles.btnTxt}>Apply Loan</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('LoanHistory',{UserEmail: this.props.navigation.state.params.UserEmail} )}>
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
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('UpdateProfile', {UserEmail: this.props.navigation.state.params.UserEmail})}>
        <Text style={styles.btnTxt}>Update Profile</Text>
        </TouchableOpacity>
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
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('LoanReport', {UserEmail: this.props.navigation.state.params.UserEmail})}>
        <Text style={styles.btnTxt}>Check Report</Text>
        </TouchableOpacity>
            </View>
              </View>
    );
  }
}



const MainNavigation = createBottomTabNavigator({
  Home: {
    screen: HomeScreen, 
    navigationOptions: {
        tabBarLabel: 'Home', 
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-home" color={tintColor} size={25} />
        )
    }
}, 
LoanReportScreen: {
    screen: LoanReportScreen, 
    navigationOptions: {
        tabBarLabel: 'Loan Report', 
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-paper" color={tintColor} size={25} />
        )
    }
}, 
ProfileScreen: {
    screen: ProfileScreen, 
    navigationOptions: {
        tabBarLabel: 'Profile', 
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-person" color={tintColor} size={25} />
        )
      },
    },
  },
  
  {
    headerMode: 'screen',
    headerVisible: true,
    navigationOptions: {
      headerMode: 'screen',
      headerVisible: true,
      tabBarOptions: {
        activeTintColor: 'blue', 
        inactiveTintColor: 'black', 
        showIcon: true
    }
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
    backgroundColor: '#fd7e14',
    borderRadius: 80,
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

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Signup from './screens/signup';
import Login from './screens/login';
import HomeScreen from './screens/HomeScreen';
import Loading from './screens/Loading';
import Welcome from './screens/Welcome';
import ForgotPassword from './screens/ForgotPassword';
import ApplyLoan from './screens/ApplyLoan';
import LoanHistory from './screens/LoanHistory';
import ResetPassword from './screens/ResetPassword';
import LoanSimulation from './screens/LoanSimulation';
import Simulator from './screens/Simulator';
import UpdateProfile from './screens/UpdateProfile';
import { createAppContainer} from 'react-navigation';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      UserEmail: '',
      Password: '',
     
    }
  }
  render() {
    return (
    <AppContainer>
     <RootNavigator />
    </AppContainer>
    );
  }
}

const RootNavigator = createStackNavigator({
  loading: {
    screen: Loading,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  ApplyLoan: {
    screen: ApplyLoan,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  LoanHistory: {
    screen: LoanHistory,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  HomeScreen : {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  LoanSimulation : {
    screen: LoanSimulation,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  Simulator: {
    screen: Simulator,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  UpdateProfile: {
    screen: UpdateProfile,
    navigationOptions: {
      headerShown: false,
      headerTransparent: true,
    },
  },
  InitialRouteName : Loading
});




const AppContainer = createAppContainer(RootNavigator);







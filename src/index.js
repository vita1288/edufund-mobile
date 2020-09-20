import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  LoadingScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  VerificationCodeScreen,
  Dashboard,
  Profile,
} from './screens';

const Router = createStackNavigator(
  {
    LoadingScreen,
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    VerificationCodeScreen,
    Dashboard,
    Profile,
  },
  {
    initialRouteName: 'LoadingScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);

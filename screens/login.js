import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, { Component } from 'react';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      UserEmail: '',
      Password: '',
    }
  }
  UserLoginFunction = () =>
  { 
    const {UserEmail} = this.state;
    const {Password} = this.state;
    var api = "http://192.168.0.18/edufund-api/Api/login.php?email=" + UserEmail + "&password=" + Password;
    console.log(api);
    return fetch(api)
    .then((response) => response.json())
    .then((responseJson) => {
     /*console.log(responseJson.message);*/
      if(responseJson.status === true)
      {
        console.log(UserEmail);
        this.props.navigation.navigate('HomeScreen', { UserEmail : UserEmail });
      }
      else{
        alert(responseJson.message)
      }
   
       }).catch((error) => {
         console.error(error);
       });
    
   }

  render() 
  {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Welcome To Edufund</Text>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>Login Form</Text>
          <TextInput style={styles.nameInput} 
          placeholder="Email" 
          onChangeText={UserEmail => this.setState ({UserEmail})}
          >
          </TextInput>
          <TextInput style={styles.nameInput} placeholder="Password" onChangeText={(Password => { this.setState({ Password }) })}  secureTextEntry />
          <TouchableOpacity style={styles.btn} onPress={this.UserLoginFunction}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('signup')}>
              <Text style={styles.loginTxt}>Sign Up</Text>
              </TouchableOpacity>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.loginTxt}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

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
    fontSize: 40,
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
    marginLeft: 120,
    justifyContent: 'space-between',
  },
  loginTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 24,
  },
});
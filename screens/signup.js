import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, { Component } from 'react';
import { HelperText } from 'react-native-paper';


export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      UserEmail: '',
      Password: '',
      Phonenumber : '',
      showError : false
    }
  }
  SignUpFunction = () => {
    const { UserEmail }  = this.state ;
    const { Password }  = this.state ;
    const { Phonenumber} = this.state;
    if (!UserEmail.trim()) {
      this.setState ({showError: this.state.UserEmail === ""})
      return;
    }
    if (!Password.trim()) {
      this.setState ({showError: this.state.Password === ""})
      return;
    }
    if (!Phonenumber.trim()) {
      this.setState ({showError: this.state.Phonenumber === ""})
      return;
    }



    fetch("http://192.168.0.17/edufund-api/Api/signup.php",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
 
      email : UserEmail,

      password: Password,

      phonenumber : Phonenumber

      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
     /*console.log(responseJson.message);*/
      if(responseJson.success === 1)
      {
        alert(responseJson.message);
        this.props.navigation.navigate('login');
      }
      else if(responseJson.success === 0){
        alert(responseJson.message)
      }
   
       }).catch((error) => {
         console.error(error);
       });
    
   }
  render() 
  {
    return (
      <ScrollView>
 <View style={styles.container}>
        <Text style={styles.headerTxt}>Welcome to Edufund</Text>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>Create Account</Text>
          <TextInput style={styles.nameInput} 
          placeholder="Email" 
          onChangeText={UserEmail => this.setState ({UserEmail, UserEmail}) }
          keyboardType="email-address"
          >
          </TextInput>
          <HelperText type="error" visible={this.state.showError}>
        Email cannot be empty!
      </HelperText>
          <TextInput style={styles.nameInput} placeholder="Password" onChangeText={(Password => { this.setState({ Password }) })}  secureTextEntry
         />
         <HelperText type="error" visible={this.state.showError}>
       Password cannot be empty !
      </HelperText>
          <TextInput style={styles.nameInput} placeholder="Phone Number" onChangeText={(Phonenumber => { this.setState({ Phonenumber }) })} 
          />
            <HelperText type="error" visible={this.state.showError}>
       Phone Number cannot be empty !
      </HelperText>
          <TouchableOpacity style={styles.btn} onPress={this.SignUpFunction}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.endView}>
            <Text style={styles.endTxt}>Already have an account?</Text>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('login')}>
              <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
     
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
    height: 500,
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
    height: 40,
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
    marginTop: 20,
    marginLeft: 40,
    fontWeight: 'bold',
  },
  endBtn: {
    marginRight: 80,
  },
  loginTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 17,
  },
});

import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import {
  emailValidator,
  passwordValidator,
  phonenumberValidator
} from '../core/utils';

const RegisterScreen = ({ navigation }) => {
  const [phonenumber, setPhoneNumber] = useState({ value: '' });
  const [email, setEmail] = useState({ value: ''});
  const [password, setPassword] = useState({ value: ''});
  
  function SignUpFunction()
  {
    fetch("http://192.168.0.18/edufund-api/Api/signup.php",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
 
        email : email.value,
 
        password : password.value,

        phonenumber : phonenumber.value
 
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
     /*console.log(responseJson.message);*/
      if(responseJson.success === 1)
      {
        console.log(responseJson.message);
        navigation.navigate('LoginScreen')
      }
      else{
        alert(responseJson.message)
      }
   
       }).catch((error) => {
         console.error(error);
       });
    
   }

  const _onSignUpPressed = () => {
    
    const phonenumberError = phonenumberValidator(phonenumber.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || phonenumberError) {
      setPhoneNumber({ ...phonenumber, error: phonenumberError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />
      <Logo />
      <Header>Create Account</Header>
        <View>
        <TextInput
        styles = {styles.TextInputStyle}
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
      styles = {styles.TextInputStyle}
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

    <TextInput
        label="Phone Number"
        returnKeyType="next"
        value={phonenumber.value}
        onChangeText={text => setPhoneNumber({ value: text })}
        error={!!phonenumber.error}
        errorText={phonenumber.error}
      />

      
      <Button mode="contained" onPress={SignUpFunction} style={styles.button}>
        Sign Up
      </Button>
        </View>
     

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
     </Background>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'flex-start',
    alignContent : "center",
  },
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);

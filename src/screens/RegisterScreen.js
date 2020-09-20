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
  firstnameValidator,
  lastnameValidator,
  phonenumberValidator
} from '../core/utils';

const RegisterScreen = ({ navigation }) => {
  const [phonenumber, setPhoneNumber] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onSignUpPressed = () => {
    const firstnameError = firstnameValidator(firstname.value);
    const lastnameError = lastnameValidator(lastname.value);
    const phonenumberError = phonenumberValidator(phonenumber.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || firstnameError || lastnameError || phonenumberError) {
      setFirstName({ ...firstname, error: firstnameError });
      setLastName({ ...lastname, error: lastnameError });
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
      <ScrollView>
      <Header>Create Account</Header>
        <View>
       
        <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

    <TextInput
        label="Phone Number"
        returnKeyType="next"
        value={phonenumber.value}
        onChangeText={text => setPhoneNumber({ value: text, error: '' })}
        error={!!phonenumber.error}
        errorText={phonenumber.error}
      />

      
      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>
        </View>
     

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
     </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 20,
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

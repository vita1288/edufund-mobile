import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { codeValidator } from '../core/utils';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import Button from '../components/Button';

const VerificationCodeScreen = ({ navigation }) => {
  const [code, setcode] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const codeError = codeValidator(code.value);

    if (codeError) {
      setcode({ ...code, error: codeError });
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('ForgotPasswordScreen')} />

      <Logo />

      <Header>Verification Form</Header>

      <TextInput
        label="Verification Code"
        returnKeyType="done"
        value={code.value}
        onChangeText={text => setcode({ value: text, error: '' })}
        textContentType="code"
        keyboardType="code"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Code
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('ForgotPasswordScreen')}
      >
        <Text style={styles.label}>← Back to Forgot Password</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(VerificationCodeScreen);

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
  } from 'react-native';
  import React, { Component } from 'react';
  
  export default class Welcome extends Component {
      render() 
      {
        return (
          <View style={styles.container}>
        <Image
        source={require('../assets/logoedufund.png')}
        style={{ width: '80%', resizeMode: 'contain', margin: 30 }}
      />
      <Text style={styles.subTxt}>Time to Pay For College</Text>
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('login')}>
            <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('signup')}>
            <Text style={styles.btnTxt}>Sign Up</Text>
            </TouchableOpacity>
              </View>
        );
      }
    }
  
    const styles = StyleSheet.create({
        container: {
          backgroundColor: 'white',
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
          marginTop: 30,
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
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 24,
        },
      });

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView
  } from 'react-native';
  import React, { Component } from 'react';
  
  
export default class LoanHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserEmail : '',
    }
  }

  Process = async () => {
    let UserEmail = this.props.navigation.state.params.UserEmail;
    
    
    this.props.navigation.navigate('LoanHistorySummary', { UserEmail : UserEmail})
  };

      render() 
      {
        return (
          <View style={styles.container}>
            <Text style={styles.headerTxt}>Loan History </Text>
            <View style={styles.subView}>
            <Text style={styles.subTxt}>Email : {this.props.navigation.state.params.UserEmail}</Text>
            <TouchableOpacity style={styles.btn} onPress={this.Process}>
              <Text style={styles.btnTxt}>Check History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={styles.btnTxt}>Go Back to Home</Text>
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
        fontSize: 20,
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

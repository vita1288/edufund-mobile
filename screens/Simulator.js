import React, { Component } from 'react';
 
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
 
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';
import ListView from "deprecated-react-native-listview";

class Simulator extends Component {
 
  constructor() { 
 
    super();
 
    this.state = {
 
      isLoading: true,
      Periodtime : '',
      interestpermonth: '',
      loanamountrequest: '',
      dataSource: []
    };
  }
  componentDidMount() {
    this.fetchdata();
  }

  fetchdata = async () => {
    let Periodtime =  this.props.navigation.state.params.Periodtime;
    console.log(Periodtime);
    let interestpermonth = this.props.navigation.state.params.interestpermonth;
    let loanamountrequest = this.props.navigation.state.params.loanamountrequest;
    const response = await fetch('http://192.168.0.18/edufund-api/Api/loansimulation.php?periodtime=' +  Periodtime+ '&interestpermonth=' + interestpermonth + '&loanamountrequest=' + loanamountrequest);
    const responseJson = await response.json();
    this.setState({data : responseJson});
  };
  render() 
  {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Loan Simulation</Text>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>Simulator</Text>

  <FlatList
   data={this.state.data}
   keyExtractor={(x, i) => i}
   renderItem={({item}) =>
   <Text>{item.No}, ,{item.interest}, {item.balance}, {item.principal}, {item.installment}</Text>
   
   }/>
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('LoanSimulation')}>
        <Text style={styles.btnTxt}>Go Back to Loan</Text>
      </TouchableOpacity>
        </View>  
      </View>
    );
  }
}



  const styles = StyleSheet.create({
    MainContainer :{
 
        alignItems: 'center',
        flex:1,
        paddingTop: 30,
        backgroundColor: '#fff'
     
      },
     
      MainContainer_ShowSimulator :{
        
        flex:1,
        paddingTop: (Platform.OS == 'ios') ? 20 : 0,
        marginLeft: 5,
        marginRight: 5
        
        },
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
      marginLeft: 50,
      justifyContent: 'space-between',
    },
    loginTxt: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 24,
    },
  });


   
  export default Simulator;
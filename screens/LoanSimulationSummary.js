import React, { Component } from 'react';
 
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
 


export default class LoanSimulationSummary extends Component {
 
  constructor(props) { 
 
    super(props);
 
    this.state = {
 
      isLoading: true,
      periodtime : '',
      interestpermonth: '',
      loanamountrequest: '',
      dppercent : '',
      data: []
    };
  }
   componentDidMount() {
    this.GetSimulation();
  }

  

GetSimulation = async () => {
    let periodtime =  this.props.navigation.state.params.periodtime;
    let interestpermonth = this.props.navigation.state.params.interestpermonth;
    let loanamountrequest = this.props.navigation.state.params.loanamountrequest;
    let dppercent = this.props.navigation.state.params.dppercent;
    const res = await fetch('http://192.168.0.18/edufund-api/Api/loansimulationfinal.php?periodtime=' + periodtime + '&interestpermonth=' + interestpermonth + '&loanamountrequest=' + loanamountrequest  + '&dppercent=' + dppercent);
    const resJson = await res.json();
    console.log(resJson);
    this.setState({
        data : resJson,
        periodtime : resJson.periodtime,
        interestpermonth : resJson.interestpermonth,
        loanamountrequest : resJson.loanamountrequest,
        totalloanamountrequest : resJson.totalloanamountrequest,
        totalinterest : resJson.totalinterest,
        totalinstallment : resJson.totalinstallment,
        dp : resJson.dp
        
    });
  };


  render() {
   
    return (
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Loan Simulation</Text>
        <View style={styles.subView}>
      
          <Text style={styles.subTxt}>Loan Simulation Result</Text>
   
   <View style = {{backgroundColor:'#1E90FF',margin:15, justifyContent: 'center'}}>
   <ScrollView>
    <Text style = {{fontSize:17,margin:5, justifyContent: 'center' ,color:'white'}}> Period time:    { this.props.navigation.state.params.periodtime}</Text>
    <Text style = {{fontSize:17,margin:5, justifyContent: 'center' ,color:'white'}}> Interest Per Month :  { this.props.navigation.state.params.interestpermonth}%</Text>
    <Text style = {{fontSize:17,margin:5, justifyContent: 'center' ,color:'white'}}> Loan Amount Request: Rp { this.props.navigation.state.params.loanamountrequest}</Text>
    <Text style = {{fontSize:17,margin:5, justifyContent: 'center' ,color:'white'}}> Total Loan Amount Request: Rp {this.state.totalloanamountrequest}</Text>
    <Text style = {{fontSize:17,margin:5, justifyContent: 'center' ,color:'white'}}> Total Interest: Rp {this.state.totalinterest}</Text>
    <Text style = {{fontSize:17,margin:5, justifyContent: 'center' ,color:'white'}}> Total Installment: Rp {this.state.totalinstallment}</Text>
    <Text style = {{fontSize:17,margin:5, justifyContent: 'center' ,color:'white'}}> DP: Rp {this.state.dp}</Text>
    
    </ScrollView>   
      </View>  
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('LoanApplicationForm')}>
        <Text style={styles.btnTxt}>Go Back to Apply Loan</Text>
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
      fontSize: 15,
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

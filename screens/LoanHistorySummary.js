import React, { Component } from 'react';
 
import { SectionList, StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
 
import { FlatList } from 'react-native-gesture-handler';



class LoanHistorySummary extends Component {
 
  constructor() { 
 
    super();
 
    this.state = {
 
      isLoading: true,
      UserEmail : '',
      periodtime : '',
      Balance : '',
      PaidAmount : '',
      totalamount : '',
      dataSource : '',
      data: []
    };
  }


  GetLoanBalance = async () =>
  {
    let UserEmail =  this.props.navigation.state.params.UserEmail;
    const response = await fetch('http://192.168.0.20/edufund-api/Api/getloanbalance.php?email=' +  UserEmail);
    const responseJson = await response.json();
    this.setState({
      dataSource : responseJson,
      periodtime : responseJson.periodtime,
      totalamount : responseJson.totalamount,
      Balance : responseJson.Balance,
      PaidAmount : responseJson.PaidAmount
    });
  }
  
  componentDidMount() {
    this.GetLoanBalance();
    this.fetchdata();
  }

  fetchdata = async () => {
    let UserEmail =  this.props.navigation.state.params.UserEmail;
    const response = await fetch('http://192.168.0.20/edufund-api/Api/loanhistory.php?email=' +  UserEmail);
    const responseJson = await response.json();
    this.setState({
      data : responseJson
    });
  };


  _renderItem = ({item}) => (
    <View style = {{backgroundColor:'#1E90FF',margin:15, justifyContent: 'center', borderTopRightRadius: 15,
        borderTopLeftRadius: 15, borderBottomEndRadius: 15, borderBottomLeftRadius: 15 }}>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Monthly:  {item.Monthly}</Text>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Amount:  {item.Amount}</Text>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Due Date:   {item.DueDate}</Text>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Status:  {item.Status}</Text>
    </View>
  );

  render() {
      
    return (
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Loan History</Text>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>List History</Text>
          <Text style={styles.subTxt}>Period time : {this.state.periodtime}</Text>
          <Text style={styles.subTxt}>Total Amount: {this.state.totalamount}</Text>
          <Text style={styles.subTxt}>Balance: {this.state.Balance}</Text>
          <Text style={styles.subTxt}>Paid Amount: {this.state.PaidAmount}</Text>


  <FlatList
   data={this.state.data}
   renderItem = {this._renderItem}
   keyExtractor = {(item, index) => index}
   />
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('LoanHistory')}>
        <Text style={styles.btnTxt}>Go Back to Loan History</Text>
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
      height: 399,
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
      fontSize: 13,
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
      marginLeft: 50,
      justifyContent: 'space-between',
    },
    loginTxt: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 24,
    },
  });


   
  export default LoanHistorySummary;
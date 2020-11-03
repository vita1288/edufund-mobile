import React, { Component } from 'react';
 
import { SectionList, StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
 
import { FlatList } from 'react-native-gesture-handler';



class LoanReportSummary extends Component {
 
  constructor() { 
 
    super();
 
    this.state = {
 
      isLoading: true,
      UserEmail : '',
      startdate: '',
      enddate: '',
      data: []
    };
  }
  componentDidMount() {
    this.fetchdata();
  }

  fetchdata = async () => {
    let UserEmail =  this.props.navigation.state.params.UserEmail;
    let startdate = this.props.navigation.state.params.startdate;
    let enddate = this.props.navigation.state.params.enddate;
    const response = await fetch('http://192.168.0.20/edufund-api/Api/loanreport.php?email=' +  UserEmail+ '&startdate=' + startdate + '&enddate=' + enddate);
    const responseJson = await response.json();
    this.setState({data : responseJson});
  };


  _renderItem = ({item}) => (
    <View style = {{backgroundColor:'#1E90FF',margin:15, justifyContent: 'center', borderTopRightRadius: 40,
        borderTopLeftRadius: 40, borderBottomEndRadius: 40, borderBottomLeftRadius: 40 }}>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Email:    {item.email}</Text>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Loan ID:  {item.loan_id}</Text>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Agreement Date:   {item.AgreementDate}</Text>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Period Time:  {item.periodtime}</Text>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Amount Without Interest: {item.amount_without_interest}</Text>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Total Amount: {item.totalamount}</Text>
    <Text style = {{fontSize:15,margin:15, justifyContent: 'center' ,color:'white'}}> Loan Status: {item.LoanStatus}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Loan Report</Text>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>List Report</Text>


  <FlatList
   data={this.state.data}
   renderItem = {this._renderItem}
   keyExtractor = {(item, index) => index}
   />
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('LoanReport')}>
        <Text style={styles.btnTxt}>Go Back to Loan Report</Text>
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


   
  export default LoanReportSummary;
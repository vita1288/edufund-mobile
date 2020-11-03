
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
    Picker,
    ActivityIndicator,
  } from 'react-native';
  import React, { Component } from 'react';
  import Slider from 'react-native-slider';
  import { HelperText } from 'react-native-paper';
 
  export default class LoanApplicationForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        UserEmail : '',
        product_id : '',
        loan_status_id : '',
        AgreementDate : '',
        DisbursementDate : '',
        periodtime: '', 
        interest : '',
        amount_without_interest : '',
        interestpermonth: '1.5',
        loanamountrequest: 1000000,
        totalloanamountrequest : '',
        dppercent: '0.1',
        LoanQuality : '',
        LoanStatus : '',
        Reason : '',
        data: []
      }
    }
   
    componentDidMount() {
      //this.fetchdata();
    }

    
    
  
    SubmitLoan = () => 
     {
        let UserEmail = this.props.navigation.state.params.UserEmail;
        const {interestpermonth} = this.state;
        const {loanamountrequest} = this.state;
        const { periodtime }  = this.state ;
        const {totalloanamountrequest} = this.state.totalloanamountrequest;
        const { Reason} = this.state;
        fetch("http://192.168.0.20/edufund-api/Api/insertloan.php?",{
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({
              email : UserEmail,
              product_id : "1",
              loan_status_id : "1",
              AgreementDate : "2020-10-31",
              DisbursementDate : "2020-10-31",
              periodtime : periodtime,
              interest : interestpermonth,
              amount_without_interest : loanamountrequest,
              totalloanamountrequest : totalloanamountrequest,
              DueAmount : loanamountrequest,
              LoanQuality : "Good",
              LoanStatus : "In Process",
              Reason : Reason
       
            })
          })
          .then((response) => response.json())
          .then((responseJson) => {
           console.log(responseJson.message);
           if(responseJson.success === 1)
            {
              alert(responseJson.message)
              this.props.navigation.navigate('HomeScreen');
            }
            else if(responseJson.success === 0) {
              alert(responseJson.message)
            }
         
             }).catch((error) => {
               console.error(error);
             });
         }
  

    SimulationFunction = async () => {
    const {periodtime} = this.state;
    const {interestpermonth} = this.state;
    const {loanamountrequest} = this.state;
    const {dppercent} = this.state;

    if (!periodtime.trim()) {
      this.setState ({showError: this.state.periodtime === ""})
      return;
    }

    this.props.navigation.navigate('LoanSimulationSummary', {  periodtime : periodtime, interestpermonth: interestpermonth, loanamountrequest: loanamountrequest, dppercent: dppercent })
    };

    
    change(loanamountrequest) {
      this.setState(() => {
        return {
          loanamountrequest: parseFloat(loanamountrequest).toFixed(2)
        };
      });
    }

    
        render() 
        {
          
          const {loanamountrequest} = this.state;
          return (
            <View style={styles.container}>

            
            <Text style={styles.headerTxt}>Loan Application Form </Text>
            <View style={styles.subView}>
              <ScrollView>
              <Text style={styles.subTxt}>Email: { this.props.navigation.state.params.UserEmail} </Text>
              <Text  style = {styles.subTxt}>Period Time</Text>
          <Picker
           style = {styles.subTxt}
          selectedValue={this.state.periodtime}
          onValueChange={(itemValue, itemIndex) => this.setState({ periodtime: itemValue })}>
          <Picker.Item label="Select Period Time" value="select period time" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value= "2" />
          <Picker.Item label="3" value= "3" />
          <Picker.Item label="4" value= "4" />
          <Picker.Item label="5" value= "5" />
          <Picker.Item label="6" value= "6" />
          <Picker.Item label="7" value= "7" />
          <Picker.Item label="8" value= "8" />
          <Picker.Item label="9" value= "9" />
          <Picker.Item label="10" value= "10" />
          <Picker.Item label="11" value= "11" />
          <Picker.Item label="12" value= "12" />
          <Picker.Item label="13" value= "13" />
          <Picker.Item label="14" value= "14" />
          <Picker.Item label="15" value= "15" />
          <Picker.Item label="16" value= "16" />
          <Picker.Item label="17" value= "17" />
          <Picker.Item label="18" value= "18" />
          <Picker.Item label="19" value= "19" />
          <Picker.Item label="20" value= "20" />
          <Picker.Item label="21" value= "21" />
          <Picker.Item label="22" value= "22" />
          <Picker.Item label="23" value= "23" />
          <Picker.Item label="24" value= "24" />
          <Picker.Item label="25" value= "25" />
          <Picker.Item label="26" value= "26" />
          <Picker.Item label="27" value= "27" />
          <Picker.Item label="28" value= "28" />
          <Picker.Item label="28" value= "28" />
          <Picker.Item label="29" value= "29" />
          <Picker.Item label="30" value= "30" />
          <Picker.Item label="31" value= "31" />
          <Picker.Item label="32" value= "32" />
          <Picker.Item label="33" value= "33" />
          <Picker.Item label="34" value= "34" />
          <Picker.Item label="35" value= "35" />
          <Picker.Item label="36" value= "36" />
          <Picker.Item label="37" value= "37" />
          <Picker.Item label="38" value= "38" />
          <Picker.Item label="39" value= "39" />
          <Picker.Item label="40" value= "40" />
          <Picker.Item label="41" value= "41" />
          <Picker.Item label="42" value= "42" />
          <Picker.Item label="43" value= "43" />
          <Picker.Item label="44" value= "44" />
          <Picker.Item label="45" value= "45" />
          <Picker.Item label="46" value= "46" />
          <Picker.Item label="47" value= "47" />
          <Picker.Item label="48" value= "48" />
          </Picker>
              <View>
                  <Text style = {styles.subTxt}>Loan Amount Request</Text>
                  <Text style={styles.subTxt}> {String(loanamountrequest)}</Text>
      <Slider 
        step={1000000}
        maximumValue={48000000}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        onValueChange={this.change.bind(this)}
      />
              </View>
              <Text style = {styles.subTxt}> Interest : {this.state.interestpermonth}%</Text>
              <Text style = {styles.subTxt}> DP : {this.state.dppercent}%</Text>
              <TextInput style={styles.nameInput} 
          placeholder="Reason for applying loan" 
          onChangeText={Reason => this.setState ({Reason}) }
          />
              <TouchableOpacity style={styles.btn} onPress={this.SimulationFunction}>
              <Text style={styles.btnTxt}>Simulation</Text>
            </TouchableOpacity>

              <TouchableOpacity style={styles.btn} onPress={this.SubmitLoan}>
              <Text style={styles.btnTxt}>Submit Loan</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('ApplyLoan')}>
              <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
           

              </ScrollView>
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
          height: 400,
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
        text: {
          fontSize: 15,
          textAlign: 'center'
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
          },
      });
  
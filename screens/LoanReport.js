
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
  import DatePicker from 'react-native-datepicker';
  
export default class LoanReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
          UserEmail : '',
          startdate : '',
          enddate : '',
          showError: '',
        }
      }

      componentDidMount() {
        //this.fetchdata();
      }
  
      Process = async () => {
        let UserEmail = this.props.navigation.state.params.UserEmail;
        const {startdate} = this.state;
        const {enddate} = this.state;
        //Check for Period Time text input
        if (!UserEmail.trim()) {
          this.setState ({showError: this.state.UserEmail === ""})
          return;
        }
        if (!startdate.trim()) {
          this.setState ({showError: this.state.startdate === ""})
          return;
        }
        if (!enddate.trim()) {
          this.setState ({showError: this.state.enddate === ""})
          return;
        }
        
  
        this.props.navigation.navigate('LoanReportSummary', { UserEmail : UserEmail, startdate: startdate, enddate: enddate })
      };
  
      
      render() 
      {
        return ( 
          <View style={styles.container}>
            <Text style={styles.headerTxt}>Loan Report </Text>
            <View style={styles.subView}>
            <Text style={styles.subTxt}>Email: { this.props.navigation.state.params.UserEmail} </Text>
            <Text style={styles.subTxt}>Start Date</Text>
            <DatePicker
          style={{width: 300}}
          date={this.state.startdate} 
          mode="date" 
          placeholder="select start date"
          format="YYYY-MM-DD"
          minDate="1950-01-01"
          maxDate="2021-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(startdate) => {this.setState({startdate: startdate})}}
          value = {this.state.startdate}
        />
        <Text style={styles.subTxt}>End Date</Text>
         <DatePicker
          style={{width: 300}}
          date={this.state.enddate} 
          mode="date" 
          placeholder="select end date"
          format="YYYY-MM-DD"
          minDate="1950-01-01"
          maxDate="2021-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(enddate) => {this.setState({enddate: enddate})}}
          value = {this.state.enddate}
        />
        <TouchableOpacity style={styles.btn} onPress={this.Process}>
              <Text style={styles.btnTxt}>Process</Text>
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
        fontSize: 15,
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

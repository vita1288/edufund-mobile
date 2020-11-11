import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    FlatList,
    ScrollView,
  } from 'react-native';
  import React, { Component } from 'react';
  import { HelperText } from 'react-native-paper';
  
  
  export default class LoanSimulation extends Component {
    constructor() { 
 
      super();
   
      this.state = {
   
        isLoading: true,
        Periodtime : '',
        interestpermonth: '',
        loanamountrequest: '',
        showError : false,
      };
    }
    componentDidMount() {
      //this.fetchdata();
    }

    SimulationFunction = async () => {
      const {Periodtime} = this.state;
      const {interestpermonth} = this.state;
      const {loanamountrequest} = this.state;
      //Check for Period Time text input
      if (!Periodtime.trim()) {
        this.setState ({showError: this.state.Periodtime === ""})
        return;
      }
      if (!interestpermonth.trim()) {
        this.setState ({showError: this.state.interestpermonth === ""})
        return;
      }
      if (!loanamountrequest.trim()) {
        this.setState ({showError: this.state.loanamountrequest === ""})
        return;
      }

      this.props.navigation.navigate('Simulator', { Periodtime : Periodtime, interestpermonth: interestpermonth, loanamountrequest: loanamountrequest })
    };

    render() 
    {
      return (
        <View style={styles.container}>
          <Text style={styles.headerTxt}>Loan Simulation Fund</Text>
          <View style={styles.subView}>

            <ScrollView>
            <Text style={styles.subTxt}>Simulation</Text>
            <TextInput style={styles.nameInput} 
              placeholder="Period Time" 
              onChangeText={Periodtime => this.setState ({Periodtime})}
              keyboardType="numeric"
              >
              </TextInput>
              <HelperText type="error" visible={this.state.showError}>
        Period Time cannot be empty!
      </HelperText>
              <TextInput style={styles.nameInput} placeholder="Interest" onChangeText={(interestpermonth => { this.setState({ interestpermonth }) })}
               keyboardType="numeric"
              />
              <HelperText type="error" visible={this.state.showError}>
        Interest cannot be empty!
      </HelperText>
              <TextInput style={styles.nameInput} placeholder="Loan Amount Request" onChangeText={(loanamountrequest => { this.setState({ loanamountrequest }) })}
               keyboardType="numeric"
              />
               <HelperText type="error" visible={this.state.showError}>
        Loan Amount Request cannot be empty!
      </HelperText>
              <TouchableOpacity style={styles.btn} onPress={this.SimulationFunction}>
                <Text style={styles.btnTxt}>Check Simulation</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('HomeScreen')}>
        <Text style={styles.btnTxt}>Go Back to Home</Text>
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
      fontSize: 15,
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
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    FlatList,
  } from 'react-native';
  import React, { Component } from 'react';
  
  
  export default class LoanSimulation extends Component {
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
      //this.fetchdata();
    }

    SimulationFunction = async () => {
      const {Periodtime} = this.state;
      const {interestpermonth} = this.state;
      const {loanamountrequest} = this.state;
      //Check for Period Time text input
      if (!Periodtime.trim() && !interestpermonth.trim() && !loanamountrequest.trim()) {
        alert('Period Time cannot be empty');
        alert('Interest Per Month cannot be empty');
        alert('Loan Amount Request cannot be empty');
        return;
      }
      //Checked Successfully
      this.props.navigation.navigate('Simulator', { Periodtime : Periodtime, interestpermonth: interestpermonth, loanamountrequest: loanamountrequest })
    };

    render() 
    {
      return (
        <View style={styles.container}>
          <Text style={styles.headerTxt}>Loan Simulation Fund</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxt}>Simulation</Text>
              <TextInput style={styles.nameInput} 
              placeholder="Period Time" 
              onChangeText={Periodtime => this.setState ({Periodtime})}
              >
              </TextInput>
              <TextInput style={styles.nameInput} placeholder="Interest" onChangeText={(interestpermonth => { this.setState({ interestpermonth }) })}/>
              <TextInput style={styles.nameInput} placeholder="Loan Amount Request" onChangeText={(loanamountrequest => { this.setState({ loanamountrequest }) })}/>
              <TouchableOpacity style={styles.btn} onPress={this.SimulationFunction}>
                <Text style={styles.btnTxt}>Check Simulation</Text>
              </TouchableOpacity>

              <FlatList
                data={this.state.data}
                keyExtractor={(x, i) => i}
                renderItem={({item}) =>
                <Text>{item.No}, ,{item.interest}, {item.balance}, {item.principal}, {item.installment}</Text>
                  }
              />

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
      marginLeft: 120,
      justifyContent: 'space-between',
    },
    loginTxt: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 24,
    },
  });
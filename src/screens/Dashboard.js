import React, { useState } from 'react';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { theme } from '../core/theme';
import {View, TouchableHighlight, StyleSheet,  Picker} from 'react-native';
import TextInput from '../components/TextInput';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  Avatar,
  Title,
  Text,
  Label
} from 'react-native-paper';
import DatePicker from 'react-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ScrollView } from 'react-native-gesture-handler';
import { DropDownPicker} from 'react-native-dropdown-picker';



/*

function HistoryScreen ({navigation})  {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Header>Loan History</Header>
      <Button mode="contained" onPress={() => navigation.navigate('History')}>
      Check History
    </Button>
    </View>
  );
}


 
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const HistoryStack = createStackNavigator();

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={HistoryScreen} />
    </HistoryStack.Navigator>
  );
}


const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}


const Tab = createMaterialBottomTabNavigator();

export default function Dashboard() {
  return (
      <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="History" component={HistoryStackScreen} />
        <Tab.Screen name="Profile"  component={ProfileStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}*/

function dropdowndata () 
    {
        const [province_name, setProvincename] = useState({ value: '' });
        fetch('http://192.168.0.18/edufund-api/Api/province.php', {  
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              province_name : province_name.value
            })
          })
          .then((response) => response.json())
          .then((responseJson) => {
            var count = Object.keys(responseJson.province_id).length;
            // We need to treat this.state as if it were immutable.
            // So first create the data array (tempDataArray) 
            var tempDataArray = [];
            for(var i=0;i<count;i++){
              // Note: react-native-material-dropdown takes an Array of Objects
              tempDataArray.push({
                value: responseJson.province_name
              });
            }
            // Now we modify our dropdownData array from state
            setProvincename({
              dropdowndata: tempDataArray
            });
          })
          .catch((error) => {
            console.error(error);
          })
      }

 
  
  
  function ResetPasswordScreen({route, navigation}) {
   const { email } = route.params;
   const [password, setPassword] = useState({ value: '', error: '' });
  

  function ResetPasswordFunction() {
        {
          fetch("http://192.168.0.18/edufund-api/Api/reset_password.php",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email : email.value,
              password : password.value
       
            })
          })
          .then((response) => response.json())
          .then((responseJson) => {
           console.log(responseJson.message);
           if(responseJson.success === 1)
            {
              alert(responseJson.message)
              navigation.navigate('Settings')
            }
            else{
              alert(responseJson.message)
            }
         
             }).catch((error) => {
               console.error(error);
             });
         }

         
  }
  return (
    
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Header>Reset Password</Header>
      
      <Text style = {styles.TextComponentStyle}> Email:  {route.params.email} </Text>

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={password => setPassword({ value: password})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={true}
      />
      <Button mode="contained" onPress={ResetPasswordFunction} >
        Reset Password
        </Button>
    </View>
  );
}

 

  function ChangeProfileScreen ({navigation}) {
    const [placeofbirth, setPlaceofbirth] = useState({ value: '' });
      const [name, setName] = useState({ value: ''});
      const [Idcardnumber, setIdcardnumber] = useState({ value: ''});
       const [dateofbirth, setDateofbirth] = useState({ value: '' });
       const [gender, setGender] = useState({ value: '' });
       const [religion, setReligion] = useState({ value: '' });
    
      var radio_props = [
        {label: 'Female', value: 0 },
        {label: 'Male', value: 1 }
      ];
        
    return (
      <ScrollView>
      <View style={styles.container}>
        <Header>Change Loan Profile</Header>
        <Avatar.Image 
                  source={{
                    uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                  }}
                  size={100}
                />
      <TextInput
         style={{height: 40, fontStyle:'normal', fontSize:14}}
          label="ID Card Number"
          returnKeyType="done"
          value={Idcardnumber.value}
          onChangeText={Idcardnumber => setIdcardnumber({ value: Idcardnumber, error: '' })}
          error={!!Idcardnumber.error}
          errorText={Idcardnumber.error}
  
        />
     <TextInput
         style={{height: 40, fontStyle:'normal', fontSize:14}}
          label="Name"
          returnKeyType="done"
          placeholder= "Name"
          value={name.value}
          onChangeText={name => setName({ value: name, error: '' })}
          error={!!name.error}
          errorText={name.error}
          
        />
        <TextInput
         style={{height: 40, fontStyle:'normal', fontSize:14}}
          label="place of birth"
          returnKeyType="done"
          placeholder= "Place of birth"
          value={placeofbirth.value}
          onChangeText={placeofbirth => setPlaceofbirth({ value: placeofbirth, error: '' })}
          error={!!placeofbirth.error}
          errorText={placeofbirth.error}
          
        />
  
  <TextInput
         style={{height: 40, fontStyle:'normal', fontSize:14}}
          label="date of birth"
          returnKeyType="done"
          placeholder= "DD/MM/YYYY"
          value={dateofbirth.value}
          onChangeText={dateofbirth => setDateofbirth({ value: dateofbirth, error: '' })}
          error={!!dateofbirth.error}
          errorText={dateofbirth.error}
          
        />
  <Text style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'  }}>Gender</Text>
  <RadioForm
            radio_props={radio_props}
            selectedValue = {gender}
            initial={0}
            buttonSize={8}
            disabled={false}
            formHorizontal={true}
            onPress={(gender) => {setGender({gender})}}
          />
  <Text style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'  }}>Religion</Text>
  <Picker
          selectedValue={religion}
          style={{ height: 40, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setReligion(itemValue)}
        >
          <Picker.Item label="Kristen" value="kristen" />
          <Picker.Item label="Katolik" value="katolik" />
          <Picker.Item label="Islam" value="islam" />
          <Picker.Item label="Hindu" value="hindu" />
          <Picker.Item label="Budha" value="budha" />
        </Picker>

<Text style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'  }}>Province</Text>


    <Button mode="contained" onPress={() => navigation.navigate('Profile')} >
        Save
        </Button>
        </View>
        </ScrollView>
    );
  }
   

function Home({ route, navigation }) {
  const { itemId } = route.params;
  console.log(itemId);  
  //let [email] = useState({ value: '', error: '' });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header>Welcome: {JSON.stringify(itemId)}</Header>
        
        <Paragraph>
          Apply To Secure Your Loans
        </Paragraph>
        <Button mode="contained" onPress={() => navigation.navigate('Loan')}>
      Apply Loan 
    </Button>
            <TouchableHighlight onPress={() => navigation.navigate('History')}>
              <View>
                    <Text style={{color: '#1E90FF'}}>View Loan History</Text>
              </View>
            </TouchableHighlight>
    </View>
  );
}

function ProfileScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Header>Profile Screen</Header>
              <Avatar.Image 
                source={{
                  uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                }}
                size={100}
              />
    <Text>Name : </Text>
    <Text>Email :</Text>
    <Text>Password: </Text>
    <Button mode="contained" onPress={() => navigation.navigate('Change Profile')}>
                Change Profile
                </Button>
    </View>
     );
}

function LoanScreen ({ navigation }) {
  const [amount, setAmount] = useState({ value: '' });
    const [duration, setduration] = useState({ value: ''});
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Header>Loan Application Form</Header>
      <TextInput
       style={{height: 40, fontStyle:'normal', fontSize:14}}
        label="Loan Amount"
        returnKeyType="done"
        value={amount.value}
        onChangeText={amount => setAmount({ value: amount, error: '' })}
        error={!!amount.error}
        errorText={amount.error}>

        </TextInput>

    <Text> Duration</Text>
    <Picker
        selectedValue={duration}
        style={{ height: 40, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setduration(itemValue)}
      >
        <Picker.Item label="3 bulan" value="3 bulan" />
        <Picker.Item label="6 bulan" value="6 bulan" />
        <Picker.Item label="12 bulan" value="12 bulan" />
      </Picker>

      <Button mode="contained" onPress={() => navigation.navigate('Simulation')}>
                Simulation Loan
                </Button>

 </View>
     );
}

function SimulationScreen ({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Header>Loan Simulation</Header>
    </View>
     );
}

function HistoryScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Header>Loan History</Header>
    </View>
     );
}

function ReportScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Header>Report Borrower</Header>
    </View>
     );
}



function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Header>Settings Screen</Header>
      <Button mode="contained" onPress={() =>
          navigation.push('Reset Password', {
            email: Math.floor(Math.random()*100),
          })
        } >
        Reset Password
      </Button>
    </View>
  );
}



const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Loan" component={LoanScreen} />
      <HomeStack.Screen name="History" component={HistoryScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="Change Profile" component={ChangeProfileScreen} />
      <HomeStack.Screen name="Simulation" component={SimulationScreen} />
    </HomeStack.Navigator>
  );
}


const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Reset Password" component={ResetPasswordScreen} />
    </SettingsStack.Navigator>
  );
}

const LoanStack = createStackNavigator();

function LoanStackScreen() {
  return (
    <LoanStack.Navigator>
      <LoanStack.Screen name="Loan History" component={HistoryScreen} />
    </LoanStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Change Profile" component={ChangeProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const ReportStack = createStackNavigator();
function ReportStackScreen() {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen name="Loan Report" component={ReportScreen} />
    </ReportStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        <Tab.Screen name="Loan Report" component={ReportStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
container : {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
input : {
  borderWidth: 1,
  borderColor: '#777',
  padding: 8,
  margin:10,
  width:200,
},
TextComponentStyle: {
  fontSize: 20,
 color: "#000",
 textAlign: 'center', 
 marginBottom: 15
},
button: {
  marginTop: 24,
},
row: {
  flexDirection: 'row',
  marginTop: 20,
},
link: {
  fontWeight: 'bold',
  color: theme.colors.primary,
},
});





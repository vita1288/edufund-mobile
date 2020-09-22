import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import {View, TouchableHighlight, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  Avatar,
  Title,
  Text,
} from 'react-native-paper';

function Home () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header>Welcome, Borrower.</Header>
        <Paragraph>
          Apply To Secure Your Loans
        </Paragraph>
        <Button mode="contained" onPress={() => navigation.navigate('Apply')}>
      Apply Loan 
    </Button>
            <View style={{ marginVertical: 20 }}></View>
            <TouchableHighlight onPress={() => this.viewLoans()}>
              <View>
                    <Text style={{color: '#1E90FF'}}>View Loan History</Text>
              </View>
            </TouchableHighlight>
    </View>
    
  );
}


function HistoryScreen ()  {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Header>Loan History</Header>
      <Button mode="contained" onPress={() => navigation.navigate('History')}>
      Check History
    </Button>
    </View>
  );
}


const ProfileScreen = ({navigation}) => {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={100}
          />
          <View style={{marginVertical: 20}}>
            <Title>Name :</Title> 
            <Title>Email :</Title>
            <Title>Password :</Title>
            <Title>Phone Number : </Title>
</View>
<Button mode="contained" onPress={() => navigation.navigate('Profile')}>
            Change Profile
            </Button>
<Button mode="contained" onPress={() => navigation.goBack("LoginScreen")}>
            Log Out
            </Button>
</View>
 );
}

const Tab = createMaterialBottomTabNavigator();

export default function Dashboard() {
  return (
      <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Profile"  component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}




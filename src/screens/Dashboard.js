import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import {View,Text, TouchableOpacity, styles} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header>Welcome, Borrower</Header>
    </View>
    
  );
}

function LoanScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Header>Loan Screen</Header>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Header>History Screen</Header>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Header>My Profile</Header>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function Dashboard() {
  return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" Ionicons='' component={HomeScreen} />
        <Tab.Screen name="Loan" Ionicons ='' component={LoanScreen} />
        <Tab.Screen name="History" Ionicons =''component={HistoryScreen} />
        <Tab.Screen name="Profile" Ionicons ='' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
    
    
  );
}



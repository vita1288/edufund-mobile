import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

import { FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native';


const Profile = ({ navigation }) => (
    <Background>
      <Logo />
      <Header>Profile Screen</Header>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.label}>← Back to Dashboard</Text>
      </TouchableOpacity>
    </Background>
  );

export default memo(Profile);

import React, { memo, useState, useEffect} from 'react';
//Import all required component
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const LoadingScreen = ({ navigation, props }) => 
{
  //State for ActivityIndicator animation
  let [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(true);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then(value =>
        (navigation.navigate('HomeScreen')
        )
      );
    }, 4000 );
  }, []);





  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logoedufund.png')}
        style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default memo (LoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
import React, {Component} from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
export default class Loading extends Component {
    componentDidMount()
    {
    setTimeout(() => {
        this.props.navigation.navigate('Welcome')
    }, 4000);
    }
    render() {
        return (
        <View style= {styles.container}>
        <Image
        source={require('../assets/logoedufund.png')}
        style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
      />
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'black'
    }
})
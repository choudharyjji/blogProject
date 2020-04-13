import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const { height, width } = Dimensions.get('window'); //ES6

export default class App extends Component {
  
    render(){
      return (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: height,
            width: width,
            backgroundColor: 'blue'
          }}
        >
            <Image 
              style={{
                width: 100,
                height: 100,
                marginBottom: 10
              }}
              source={require('./assets/images/mobaz-logo.jpg')} 
            />
            <Text style={{ color: '#fff' }}>First Blog Project</Text>
        </View>
      )
    }
}
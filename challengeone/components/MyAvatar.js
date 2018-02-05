import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements'; // 0.19.0

export default class MyAvatar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         I am putting up this profile on behalf of my daughter. She has done her Masters from Nagpur
        </Text>
        <Image style={styles.logo} source={require("../assets/avatar.image.png")}/>
        <Button style={styles.like} title="Like" rounded="true" borderRadius="5" backgroundColor= "#3CB371"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  },
  like:{
    width: 128,
    marginTop: 10,
  },
});

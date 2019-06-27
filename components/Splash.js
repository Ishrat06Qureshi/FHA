import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground , Image  } from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
      <ImageBackground  source = { require("../assets/bg_signup.jpg")} style = {styles.container}>
      <View style = { styles.icon_container}>
        <Image source = {require("../assets/Logo..png")} ></Image>
        </View>
      </ImageBackground>
     
    );
  }
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    width:'100%',
    heigth:'100%'
  },
  icon_container:{ 
    flex:3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

})
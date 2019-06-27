import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');

export default class Login extends React.Component {
  state = {
    showPass: true,
    press: false,
    email:"",
    password:"",
  };
  showPassword = () => {
    const { press } = this.state;
    press
      ? this.setState({ showPass: true, press: false })
      : this.setState({ showPass: false, press: true });
  };

  handleSubimit = () => {
    alert(this.state.password)
  }
  render() {
    const { showPass, press } = this.state;
    return (
      <ImageBackground
        source={require('../assets/bg_signup.jpg')}
        style={styles.background}>
        <View style = {styles.logoContainer}>
          <Image source={require('../assets/FHA_icon.png')}  
           style = {styles.logo}/>
        </View>

          <View>
                <AntDesign
                  name="user"
                  size={32}
                  color="white"
                  style={styles.inputIcons}
                />
                <TextInput
                  placeholder={'Username'}
                  placeholderTextColor={'white'}
                  underlineColorAndroid="transparent"
                  style={styles.input}
                  onChangeText = {(email) => this.setState(({ email }))}
                />
          </View>
          <View>
            <Ionicons
              name="ios-lock"
              size={32}
              color={'white'}
              style={styles.inputIcons}
            />
            <TextInput
              placeholder={'password'}
              placeholderTextColor={'white'}
              underlineColorAndroid="transparent"
              secureTextEntry={showPass}
              style={styles.input}
               onChangeText = {password => this.setState(({ password  }))}
            />

            <TouchableOpacity onPress={this.showPassword} 
            style={styles.btn_eye}>
              <Feather
                name={!press ? 'eye' : 'eye-off'}
                size={32}
                color="white"
               
              />
            </TouchableOpacity>
              <View style  = { styles.buttons }>
                <TouchableOpacity style={styles.btnLogin} onPress = { this.handleSubimit}>
                    <Text style={styles.text}> Login </Text> 
              </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin}>
                  <Text style={styles.text}> SignUp </Text>
                </TouchableOpacity>
              </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    heigth: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
    marginBottom: 15,
  },
  btnLogin: {
    width: 95,
    height: 45,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 25,
  },
  text: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
  },
  inputIcons: {
    position: 'absolute',
    top: 8,
    left: 32,
  },
  btn_eye: {
    top: 0,
    position: 'absolute',
    right: 52,
    
  },
 
  logoContainer:{
   alignItems:"center"
  },
  logo:{
     width:250,
     height:120
  },
  buttons:{
    flexDirection:'row',
    marginLeft:20
  }
});

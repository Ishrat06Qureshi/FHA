import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Signup extends React.Component {

  state = {
    name:"",
    email:"",
    password:"",
    address:"",
    contact:"",

  }

  handleOnChange = ( event ) => {
     this.setState(({
       [event.target.name]:event.target.value
     }))
  }
  handleSubmit = () => {
    // alert(`${this.state.name , this.state.email , 
    // this.state.password , this.state.contact  , this.state.address}`)
    alert( this.state )
  }
  render() {
    return (
      <ImageBackground
        source={require('../assets/bg_signup.jpg')}
        style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/FHA_icon.png')}
            style={styles.logo}
          />
        </View>
        <View>
          <TextInput
            placeholder={'Your name'}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            style={styles.input}
            name = "name"
            onChangeText = {( name ) => this.setState(({ name }))}
          
          />

    
          <TextInput
            placeholder={'Your contact'}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            style={styles.input}
            name = "contact"
            onChangeText = {( contact ) => this.setState(({ contact }))}
          />
          <TextInput
            placeholder={'Your address'}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            style={styles.input}
            name = "address"
             onChangeText = {( address ) => this.setState(({ address }))}
          />

           <TextInput
            placeholder={'Your email'}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            style={styles.input}
            name = "email"
            onChangeText = {( email ) => this.setState(({ email }))}
          />

           <TextInput
            placeholder={'Your password'}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            style={styles.input}
            name="password"
            onChangeText = {( password ) => this.setState(({ password }))}
          />
        </View>
     <TouchableOpacity style = {styles.button} onPress= {this.handleSubmit} >
      <Text style = {styles.buttonText}> sign up</Text>
     </TouchableOpacity>
      
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    heigth: '100%',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 120,
  },
  input: {
    height: 45,
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
    marginBottom: 25,
    borderBottomColor:"white",
    borderBottomWidth:3
  },

  button:{
     alignItems:"center",
     backgroundColor:"white",
     width:70,
     height:50,
     justifyContent:"center",
     left:130
  },
  buttonText:{
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    
  }
});

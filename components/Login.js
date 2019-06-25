import React , { Component } from "react";
import { Text, View, StyleSheet, ImageBackground , Image  , TextInput , Button } from 'react-native';


export default class Login extends Component {
  state = {
    email:"",
    password:""
  }
  
  // handleOnChange = ( event ) => {
  //    this.setState(({
  //      [event.target.name] : event.target.value
  //    }))
  // }
  
  onPressLearnMore = () => {
    console.log("on press ")
  }
  render() {
    const { email , password } = this.state
    return(
     <View style = { styles.container}>
      <View style = { styles.form}>
         <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={email}
          name="email"
        />

        <TextInput
          placeholder="password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={password}
          name="password"
        />
      <View style = { styles.buttons }>
            <Button
              onPress={this.onPressLearnMore}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button" />

            <Button
              onPress={this.onPressLearnMore}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
      </View>
        </View>
     </View>
     
    
)
  }
}

// const styles = StyleSheet.create({
//    container:{
//     flex:1,
//     width:'100%',
//     heigth:'100%'
//   },
  // icon:{
  //     marginTop:'50px'
  // }
// })

const styles = StyleSheet.create({
  container:{
  
    flex:1,
    width:'100%',
    heigth:'100%'
  
  },
  form :{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
   textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  buttons : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
    height:'500px',
    width:"500px"
  
  }

});
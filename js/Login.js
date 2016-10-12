import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback, TextInput} from 'react-native';

import theme from './themes/theme';
export class Login extends React.Component{
  constructor = () => {
    this.setState({email:'',password:''});
  }
  Login = () => {
    let body = `email_address=${this.state.email}&password=${this.state.password}`
    console.log("REACTNATIVE", body);
    fetch('https://www.crazy-factory.com/process_login.php',
      {headers:{"content-type":"application/x-www-form-urlencoded"},
      method:"POST",
      body:body})
        .then(response =>{
            console.log("REACTNATIVE", response.headers.get('set-cookie'));
        })
        .catch((err) => {console.log("REACTNATIVE ERR", err)});
  }
  render = () => {
    return (
      <View style={theme.body}>
        <Text style={theme.LoginText}>LOGIN</Text>
        <TextInput
          placeholder={"Email"}
          placeholderTextColor={"#c3c3c3"}
          onChangeText={(text) => {this.setState({email:text})}}
          style={{width:300}} />
        <TextInput
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColor={"#c3c3c3"}
          onChangeText={(text) => {this.setState({password:text})}}
          style={{width:300}} />
        <TouchableNativeFeedback onPress={this.Login}>
          <View style={theme.Login}><Text style={theme.LoginText}>LOGIN</Text></View>
        </TouchableNativeFeedback>
      </View>
      );
  }
}

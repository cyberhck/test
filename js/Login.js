import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback, TextInput, NativeModules} from 'react-native';
import theme from './themes/theme';
export class Login extends React.Component{
  constructor = () => {
    this.setState({email:'gautam.nishchal@gmail.com',password:'nishchal11'});
  }
  Login = () => {
    // let body = `email_address=${this.state.email}&password=${this.state.password}`
    let login = NativeModules.Login;
    login.authenticate(this.state.email, this.state.password)
      .then((res) => {
        if(res == 'df_session_id'){
          console.log("REACTNATIVE "+'Logged in');
        }else{
          throw new Error('Login incorrect');
        }
      })
      .catch((err) => {
        console.log("REACTNATIVE "+err)
      });
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

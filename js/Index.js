import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import theme from './themes/theme';
export class Index extends React.Component{
  navigateToShop = () => {
    this.props.navigator.push({name:'Shop'});
  }
  navigateToNewsletter = () => {
    this.props.navigator.push({name:'Newsletter'});
  }
  navigateToLogin = () => {
    this.props.navigator.push({name:'Login'});
  }
  render = () => {
    return (
      <View style={theme.body}>
        <TouchableNativeFeedback onPress={this.navigateToShop}>
          <View style={theme.button}><Text style={theme.buttonText}>Shop</Text></View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.navigateToNewsletter}>
          <View style={theme.button}><Text style={theme.buttonText}>Newsletter</Text></View>
        </TouchableNativeFeedback>
      </View>
      );
  }
}

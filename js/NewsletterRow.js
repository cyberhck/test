import React, {Component} from 'react';
import {Text, View, ListView, TouchableNativeFeedback, TouchableHighlight, NativeModules } from 'react-native';
import theme from './themes/theme';
export class NewsletterRow extends React.Component{
  render(){
    return (<TouchableNativeFeedback>
              <TouchableHighlight>
                <View style={theme.newsletterRow}><Text style={theme.text}>{this.props.title}</Text></View>
              </TouchableHighlight>
            </TouchableNativeFeedback>)
  }
}

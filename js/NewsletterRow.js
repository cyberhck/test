import React, {Component} from 'react';
import {Text, View, ListView, TouchableNativeFeedback, TouchableHighlight, NativeModules } from 'react-native';
import {ListItem, Card, CardItem } from 'native-base';
export class NewsletterRow extends React.Component{
  render(){
    return (<View>
                <Text style={{fontWeight:"bold"}}>{this.props.title}</Text>
                <Text>{this.props.content}</Text>
            </View>)
  }
}

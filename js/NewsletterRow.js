import React, {Component} from 'react';
import {Text, View, ListView, TouchableNativeFeedback, TouchableHighlight, NativeModules } from 'react-native';
import {ListItem, Card, CardItem } from 'native-base';
export class NewsletterRow extends React.Component{
  render(){
    return (<View elevation={5} style={{marginTop:7,paddingTop:15, paddingBottom:15, flexDirection:'column', paddingLeft:20, backgroundColor:'#FFF', borderRadius:5,}}>
                <Text style={{fontWeight:"bold", fontSize:18}}>{this.props.title}</Text>
                <Text style={{paddingTop:10, fontSize:16}}>{this.props.content}</Text>
            </View>)
  }
}

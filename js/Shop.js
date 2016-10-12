import React, {Component} from 'react';
import {WebView, View} from 'react-native';
import theme from './themes/theme';
export class Shop extends React.Component{
  render = () => {
    return (
        <WebView source={{uri : "example.com" }} />
      );
  }
}

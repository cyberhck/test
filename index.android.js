/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  BackAndroid,
  Text
} from 'react-native';
import theme from './js/themes/theme'
import {Index} from './js/Index';
import {Shop} from './js/Shop';
import {Login} from './js/Login';
import {Newsletter} from './js/Newsletter';
class Home extends Component {
  intents;
  constructor(props){
    super(props);
    let data = this.props.data;
    if(typeof data !== 'undefined'){
      this.intents = JSON.parse(data);
    }
  }

  configureScene = (route, routeStack) => {
    return Navigator.SceneConfigs.HorizontalSwipeJump;
  }

  renderScene = (route, navigator) => {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if(navigator.getCurrentRoutes().length > 1){
        navigator.pop();
        return true;
      }
      return false;
    });
    switch (route.name) {
      case 'Index':
          return (<Index navigator={navigator} />)
        break;
      case 'Shop':
        return (<Shop navigator={navigator} />);
        break;
      case 'Newsletter':
        return (<Newsletter navigator={navigator} />);
      case 'Login':
        return (<Login navigator={navigator} />);
      default:

    }
  }

  render() {
    default_route = 'Index';
    if(typeof this.intents !== 'undefined' && this.intents.type == 'newsletter'){
      default_route = 'Newsletter';
    }
    return (
      <Navigator
        configureScene={ this.configureScene }
        initialRoute={{name:default_route}}
        renderScene={this.renderScene} />
    );
  }
}
AppRegistry.registerComponent('Home', () => Home);

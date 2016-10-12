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
class Home extends Component {
  constructor(props){
    super(props);
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
        console.log("REACTNATIVE Shop activity")
        return (<Shop navigator={navigator} />);
        break;
      case 'Newsletter':
        return (<Index navigator={navigator} />);
      case 'Login':
        return (<Login navigator={navigator} />);
      default:

    }
  }
  render() {
    return (
      <Navigator
        configureScene={ this.configureScene }
        initialRoute={{name:'Index'}}
        renderScene={this.renderScene} />
    );
  }
}
AppRegistry.registerComponent('Home', () => Home);

import React, {Component} from 'react';
import {Text, View, ListView, TouchableNativeFeedback, NativeModules } from 'react-native';
import theme from './themes/theme';
import {NewsletterRow} from './NewsletterRow';
export class Newsletter extends React.Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      newsletter: ds.cloneWithRows([]),
    };
  }
  componentWillMount = () => {
    this.loadNewsletters();
  }
  loadNewsletters = () => {
    let database = NativeModules.Database;
    database.select("SELECT * FROM newsletters")
      .then((res) => {
        this.setState({
          newsletter:this.state.newsletter.cloneWithRows(JSON.parse(res))
        });
      })
      .catch((error) => {
        console.log("REACTNATIVE"+error);
      })
  }
  render = () => {
    return (
        <ListView
          style={theme.container}
          enableEmptySections={true}
          dataSource={this.state.newsletter}
          renderRow={(rowData) => <NewsletterRow {...rowData}></NewsletterRow>}
        />
      );
  }
}

import React, {Component} from 'react';
import {Text, View, ListView, TouchableNativeFeedback, NativeModules, StyleSheet } from 'react-native';
import theme from './themes/theme';
import {Container, Header, Footer, Title, Button, Icon, Content} from 'native-base';
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
        <Container style={{backgroundColor:'#CCC'}}>
          <Header>
            <Title>Newsletters</Title>
          </Header>
          <Content style={{paddingLeft:8, paddingRight:8, paddingTop:8 }}>
            <ListView
              enableEmptySections={true}
              dataSource={this.state.newsletter}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={{backgroundColor: '#CCC',height: 5,}} />}
              renderRow={(rowData) => <NewsletterRow {...rowData}></NewsletterRow>}
              />
          </Content>
          <Footer>
            <Title>Crazy Factory GMBH</Title>
          </Footer>
        </Container>
      );
  }
}

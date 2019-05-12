import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, ListItem, Body } from 'native-base';

export default class CommentEntry extends React.Component {
  
  handlePressed = () => {
    const { onPressed, comment } = this.props;
    const { _id } = comment;
    if (typeof onPressed === 'function')
      onPressed(_id);
  } 

  render(){
    const{comment} = this.props;
    const {username,code,ment,name}=comment;
  
  return (
    <ListItem onPress={this.handlePressed}>
      
              <View style={{flexDirection: 'row'}}>
                <View >
                  <Text style={{fontSize: 14}}>รหัสครุภัณฑ์ : {code}</Text>
                  <Text style={{fontSize: 12}}>ชื่อ: {name}</Text>
                  <Text style={{fontSize: 12}}>ผู้รายงาน: {username}</Text>
                  <Text style={{fontSize: 12}}>การรายงาน: {ment}</Text>
                </View>
              </View>
        </ListItem>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  comment: {
    fontSize: 20,
  },
  metadata: {
    fontSize: 12,
    color: 'grey',
  },
  bold: {
    fontWeight: 'bold',
  },
});

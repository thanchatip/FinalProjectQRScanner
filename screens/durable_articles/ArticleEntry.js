import React from 'react';

import { Card, ListItem, Body } from 'native-base';
import { 
    Text,
    TouchableHighlight,
    View, 
    StyleSheet,
} from 'react-native';


export default class ArticleEntry extends React.Component {
   
    handlePressed = () => {
        const { onPressed, dArt } = this.props;
        const { _id } = dArt;
        if (typeof onPressed === 'function')
          onPressed(_id);
      }  
  
  render() {
    const { dArt } = this.props;
    const {
      code,
      name,
    } = dArt;

    return (
        <ListItem
        onPress={this.handlePressed}
        style={styles.touchable} >

              <View style={{flexDirection: 'row'}}>
                <View style={{paddingLeft: 10}}>
                <Text style={{fontSize: 16}}>{name}</Text>
                <Text style={{fontSize: 12}}>{code}</Text>
                 
                </View>
              </View>
        </ListItem>
    );
  }
}

const styles = StyleSheet.create({
    touchable: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgrey',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      padding: 16,
      backgroundColor: 'white',
    },
    
    textContainer: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 16,
    },
  });
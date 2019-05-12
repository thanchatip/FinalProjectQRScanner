import React from 'react';

import { Card, ListItem, Body } from 'native-base';
import { 
    Text,
    TouchableHighlight,
    View, 
    StyleSheet,
} from 'react-native';


export default class ShopEntry extends React.Component {
   
    handlePressed = () => {
        const { onPressed, shop } = this.props;
        const { _id } = shop;
        if (typeof onPressed === 'function')
          onPressed(_id);
      }  
  
  render() {
    const { shop } = this.props;
    const {
      sName,
    } = shop;

    return (
        <ListItem
        onPress={this.handlePressed}
        style={styles.touchable} >

              <View style={{flexDirection: 'row'}}>
                <View >
                  <Text style={{fontSize: 18}}>{sName}</Text>
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
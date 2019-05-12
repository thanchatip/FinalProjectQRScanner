import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Button ,Icon} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };
  
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Button large block iconLeft 
          style={{backgroundColor:'#5F56B0'}} onPress={()=>{this.props.navigation.navigate('QR')}} >
          <FontAwesome name={"qrcode"} size={50} color={"white"}></FontAwesome>
            <Text style={{color :'white',fontSize: 18 }}>  สแกน QR code</Text>
          </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonLayout: {
    flexDirection: 'row',
    //textAlignVertical: 'bottom',
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    
  },
});

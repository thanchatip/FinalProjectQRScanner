import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import firebase from 'react-native-firebase';
const firestore = firebase.firestore();

export default class QRScreen extends React.Component {
  static navigationOptions = {
    title: 'QR',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };

  unsubscribeFromFirestore() {
    if (this.subscription)
      this.subscription();
    if(this.subscription2)
      this.subscription2();
  }

  componentWillUnmount() {
     this.unsubscribeFromFirestore();
  }

  onSuccess(e) {        
        const { navigation } = this.props;
        navigation.navigate('Detail',{codeId:e.data});
        
    }


  render() {
    
    return (
      <QRCodeScanner
      showMarker={true}
      reactivate={true}
      onRead={this.onSuccess.bind(this)}
      topContent={
        <Text style={styles.centerText}>
           <Text style={styles.textBold}>Please Scan your QR Code</Text> 
        </Text>
      }
     
      />
    );
  }
}
 

const styles = StyleSheet.create({
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
      },
      buttonTouchable: {
        padding: 16,
      },
});

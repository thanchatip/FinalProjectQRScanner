import React from 'react';
import {StyleSheet,Text,View,} from 'react-native';
import {Item, Input, Container, Icon} from 'native-base';
import ShopDisp from './ShopDisp'
import firebase from 'react-native-firebase'
const firestore = firebase.firestore();

export default class ShopScreen extends React.Component {
  static navigationOptions = {
    title: 'Shop Detail',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };

  state = {
    shop:{sMail:'',sName:'',sTel:'',sAddress:'',}
};

subscribeToFirestore() {
  const { navigation } = this.props;
  const shopId = navigation.getParam('shopId');
  const collection = firestore.collection('shops').doc(shopId);
  this.albumSubscription = collection.onSnapshot((doc) => {
    this.setState({ shop: doc.data() });
  });
}

unsubscribeFromFirestore() {
  if(this.subscription)
    this.subscription();
    
}

componentDidMount(){
  this.subscribeToFirestore();
}

componentWillUnmount() {
   this.unsubscribeFromFirestore();
}

  render() {
    const {shop}=this.state;
    return (
      <Container>
        <ShopDisp
            shop={shop}
            
            />
      </Container>
    );
  }
}
 



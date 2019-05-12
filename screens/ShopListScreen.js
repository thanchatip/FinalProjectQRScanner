import React from 'react';
import {StyleSheet,Text,View,} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Item, Input, Container, Icon} from 'native-base';
import firebase from 'react-native-firebase'

import ShopList from './shop/ShopList';

const firestore = firebase.firestore();

export default class ShopListScreen extends React.Component {
  static navigationOptions = {
    title: 'Shop',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };

  state = {
    shopList:[],
 };

 subscribeToFirestore() {
  const collection = firestore.collection('shops').orderBy("sName","asc");
  this.subscription = collection.onSnapshot((snapshot) => {
      this.updateState(snapshot.docs);
  });
}

textSetState(text){
  const collection = firestore.collection('shops').where('sName', '==', text);
  this.subscription = collection.onSnapshot((snapshot) => {
      this.updateState(snapshot.docs);
  });
}


updateState(docs) {
  const shopList = docs.map((doc) => ({
    _id: doc.id,
    ...doc.data(),
  }));

  this.setState({ shopList });
}

unsubscribeFromFirestore() {
  this.subscription();
}

componentDidMount() {
  this.subscribeToFirestore();
}

componentWillUnmount() {
  this.unsubscribeFromFirestore();
}

handleShopSelected = (id) => {
  const { navigation } = this.props;
  navigation.navigate('ShopDetail',{shopId:id}); //ได้ collection_key
}


  render() {
    const {shopList} = this.state;
    return (
      <Container>
        <View style={{padding: 10}}>
                    <Item regular={{padding: 2}}>
                        <Input placeholder='ค้นหาร้านค้าครุภัณฑ์' onChangeText={(text) => this.textSetState(text)} />
                        <FontAwesome name={"search"} size={20}></FontAwesome>
                    </Item>
        </View>
        
        <ShopList 
        shopList={ shopList }
        onShopSelected={this.handleShopSelected} /> 
       </Container>
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

 
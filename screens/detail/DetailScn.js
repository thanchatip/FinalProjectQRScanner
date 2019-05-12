import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Container, List, Text,ListItem,Button,Content,CardItem, Card } from 'native-base';
import DetailDisp from './DetailDisp'
import firebase from 'react-native-firebase';


const firestore = firebase.firestore();

export default class DetailSearch extends React.Component {
  static navigationOptions = {
    title: 'Detail',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };

state = {
  
    article:{
      assistAdr:'',
    assistDept:'',
    assistMail:'',
    assistTel:'',
    assistName:'',
    code:'',
    dState:'',
    dateGet:'',
    nRepair:'',
    name:'',
    place:'',
    price:'',
    repairHis:'',
    status:'',}
  
};

subscribeToFirestore() {
  const { navigation } = this.props;
  const codeId = navigation.getParam('codeId');
  const collection = firestore.collection('articles').doc(codeId);
  this.albumSubscription = collection.onSnapshot((doc) =>{
    this.setState({ article: doc.data() });
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

handleAddComment = () => {
  const { navigation } = this.props;
  const codeId = navigation.getParam('codeId');
  navigation.navigate('Comment', {codeId:codeId
  });
}

  render() {
    const {article} = this.state;
    return (
      
        <Container>
          <DetailDisp
            article={article}
            onAddComment = {this.handleAddComment}
            />
           
      </Container>
    );
    
  }
  }

  


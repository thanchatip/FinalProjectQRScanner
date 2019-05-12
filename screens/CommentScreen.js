import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import {Container, List,ListItem, CheckBox,Body, Content, Form, Item, Input, Label, Button,Card,CardItem} from 'native-base';
import firebase from 'react-native-firebase';
const firestore = firebase.firestore(); 

import CommentForm from './comment/CommentForm'

export default class CommentScreen extends React.Component {
  static navigationOptions = {
    title: 'Comment',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };

  state = {
    article: {
        
      code:'',
      name:'',
  },
    comment: {
      code:'',
      username:'',
      ment:'',
      
     /* txtBroken:'',
      
      txtPlace:'',*/
    },
    
    disableForm:false,
  };

  subscribeToFirestore() {
    const { navigation } = this.props;
    const codeId = navigation.getParam('codeId');
    const collection = firestore.collection('articles').doc(codeId);
    this.articleSubscription = collection.onSnapshot((doc) =>{
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
    this.setState({ disableForm: true });

    const { comment } = this.state;
    //รับcollection_key
    const { navigation } = this.props;
    const codeId = navigation.getParam('codeId');
    const articleRef = firestore.collection('articles').doc(codeId);
    /*this.articleSubscription = articleRef.onSnapshot((doc) =>{
      this.setState({ article: doc.data() });
    });*/
      const collection = firestore.collection('comments');
    //const collection = articleRef.collection('comments');


    firestore.runTransaction((t) => {
      return t.get(articleRef)
        .then((articleDoc) => { 
          const { code,name}=articleDoc.data();

          const newCommentRef = collection.doc();
          return Promise.all([
            t.set(newCommentRef, {...comment,code,name,timestamp: firebase.firestore.FieldValue.serverTimestamp()}),
            t.update(articleRef),
          ]);
        });
    }).then(() => navigation.pop());
  }

  handleCommentChanged = (comment) => {
    this.setState({ comment });
  }

 render() {
    
    const {article:{
    code,
    name,
    },comment} = this.state;
    return (
      <Container >
        <Content style={{marginTop:10}}>
        <Card>
          <CardItem header bordered>
        <Text>รหัสครุภัณฑ์: {code}  </Text></CardItem>
        <CardItem header bordered>
        <Text>รายการ: {name}  </Text></CardItem>
        </Card>
        <Text>รายงานสภาพครุภัณฑ์  </Text>
        <CommentForm
        comment={comment}
        onCommentChanged={this.handleCommentChanged}
        onAddComment={this.handleAddComment}
        
      />
        </Content>
      </Container>
    );
  }
}


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import {Container, List,ListItem, CheckBox,Body, Content, Form, Item, Input, Label, Button,CardItem, Card } from 'native-base';
import firebase from 'react-native-firebase';
const firestore = firebase.firestore(); 

import CommentForm from './CommentForm'

export default class Commentscreen extends React.Component {
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
  const collection = firestore.collection('articles').where("code","==",codeId);
  this.subscription = collection.onSnapshot((snapshot) => {
    var article = snapshot.docs[0].data()
    this.setState({name:article.name, 
      code:article.code,
      
      })
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
    const { navigation } = this.props;
    //ไม่ได้รับcollection_key มา
    const codeId = navigation.getParam('codeId');
    const articleRef = firestore.collection('articles').where("code","==",codeId); //ได้field code มา
    this.subscription = articleRef.onSnapshot((snapshot) => {
      var article = snapshot.docs[0].data()
      this.setState({name:article.name,
        code:article.code,
        })
    });
    //comment coll
      const collection = firestore.collection('comments');
    //const collection = articleRef.collection('comments');

    //เดี๋ยวกลับมาทำ
    firestore.runTransaction((t) => {
      return t.get(article)
        .then((articleDoc) => { 
          const  {code,name} = articleDoc.data() ;

          const newCommentRef = collection.doc();
          return Promise.all([
            t.set(newCommentRef, {...comment,code,name,timestamp: firebase.firestore.FieldValue.serverTimestamp()}),
            
          ]);
        });
    }).then(() => navigation.pop());
  }

  handleCommentChanged = (comment) => {
    this.setState({ comment });
  }

 render() {
    
    const {
    code,
    name,
    comment} = this.state;
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


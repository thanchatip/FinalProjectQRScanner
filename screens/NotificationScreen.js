import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button,Icon, Container, Card, Content,List,CardItem ,Left,Right, Body} from 'native-base';
import CommentList from './comment/CommentList';
import firebase from 'react-native-firebase'
const firestore = firebase.firestore();

export default class NotificationScreen extends React.Component {
  static navigationOptions = {
    title: 'Notification',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };
state = {
  commentList:[],
};
subscribeToFirestore() {
  const collection = firestore.collection('comments');
   this.subscription = collection.onSnapshot((snapshot) => {
      this.updateState(snapshot.docs);
  });
}

updateState(docs) {
  const commentList = docs.map((doc) => ({
    _id: doc.id,
    ...doc.data(),
  }));

  this.setState({ commentList });
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


  render() {
    
   const {commentList}=this.state;
    return (
      <Container>
        <Content>   
              <Card  >
              <CardItem header bordered>
              <Text style = {{fontSize:18,color:'#5F56B0'}}>ข้อมูลการแจ้งเตือน</Text>
            </CardItem>
               
                <CardItem>
                  <CommentList
                    commentList={commentList}
                    />
                </CardItem>
             
              </Card>

              
              
             
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonLayout: {
    flexDirection: 'row',
    textAlignVertical: 'bottom'
  }
});
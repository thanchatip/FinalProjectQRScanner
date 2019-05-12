import React from 'react';
import firebase from 'react-native-firebase';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button,Container, Card, Content,CardItem,ListItem ,Left,Right, Body} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const firestore = firebase.firestore();

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };


  state = {
    name: "",
    status: ""
  }

  subscribeToFirestore() {
    const user = firebase.auth().currentUser;
    const collection = firestore.collection('user').where("email", "==", user.email);
    this.subscription = collection.onSnapshot((snapshot) => {
      var account = snapshot.docs[0].data()
      this.setState({name:account.name, status:account.status})
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

  signOut(){
    console.log('signout')
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('signout')
    })
  }

  render() {
    
    const user = firebase.auth().currentUser;
    const { name, status} = this.state;
    return (
      <Container >
        <Content style={{marginTop:10}}>
          <Card>
            <CardItem >
              <View style={{flexDirection: 'row'}}>
                <FontAwesome name='user' size={50} />
                <View style={{paddingLeft: 20, flexDirection: 'column'}}>
                  <Text style={{fontSize: 16}}>Mail : {user.email}</Text>
                  <Text style={{fontSize: 16}}>Name : {name}</Text>
                  <Text style={{fontSize: 16}}>Status : {status}</Text>
                </View>
              </View>
            </CardItem>
          </Card>
            <Button block danger style = {{marginTop : 20,alignItems:'center',justifyContent:'center'}} onPress={()=>this.signOut()}>
              <Text style={{ color:'white'}} >LOGOUT</Text>
            </Button>
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
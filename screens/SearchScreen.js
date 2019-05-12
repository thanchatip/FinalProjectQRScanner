import React from 'react';
import {StyleSheet,Text,View,} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Item, Input, Container, Icon} from 'native-base';
import ArticleList from './durable_articles/ArticleList';
import firebase from 'react-native-firebase'
const firestore = firebase.firestore();

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };

  state = {
    articleList:[],
 };

 subscribeToFirestore() {
  const collection = firestore.collection('articles').orderBy("code","asc");
  this.subscription = collection.onSnapshot((snapshot) => {
      this.updateState(snapshot.docs);
  });
}



textSetState(text){
  const collection = firestore.collection('articles').where('name', '==', text);
  this.subscription = collection.onSnapshot((snapshot) => {
      this.updateState(snapshot.docs);
  });
}


updateState(docs) {
  const articleList = docs.map((doc) => ({
    _id: doc.id,
    ...doc.data(),
  }));

  this.setState({ articleList });
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

handleArticleSelected = (id) => {
  const { navigation } = this.props;
  navigation.navigate('Detailscreen',{codeId:id}); //ได้ collection_key
}


  render() {
    const {articleList} = this.state;
    return (
      <Container>
        <View style={{padding: 10}}>
                    <Item regular={{padding: 2}}>
                        <Input placeholder='ค้นหาครุภัณฑ์' onChangeText={(text) => this.textSetState(text)} />
                        <FontAwesome name={"search"} size={20}></FontAwesome>
                    </Item>
        </View>
        
        <ArticleList 
        articleList={ articleList }
        onArticleSelected={this.handleArticleSelected} /> 
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

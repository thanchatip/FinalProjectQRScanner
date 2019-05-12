import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Container, List, Text,ListItem,Button,Content,CardItem, Card } from 'native-base';

import firebase from 'react-native-firebase';


const firestore = firebase.firestore();

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };

state = {
  
    assistAdr:"",
    assistDept:"",
    assistMail:"",
    assistTel:"",
    assistName:"",
    code:"",
    dState:"",
    dateGet:"",
    nRepair:"",
    name:"",
    place:"",
    price:"",
    repairHis:"",
    status:""
  
};

subscribeToFirestore() {
  const { navigation } = this.props;
  const codeId = navigation.getParam('codeId');
  const collection = firestore.collection('articles').where("code","==",codeId);
  this.subscription = collection.onSnapshot((snapshot) => {
    var article = snapshot.docs[0].data()
    this.setState({name:article.name, status:article.status,
      assistAdr:article.assistAdr,
      assistDept:article.assistDept,
      assistMail:article.assistMail,
      assistTel:article.assistTel,
      assistName:article.assistName,
      code:article.code,
      dState:article.dState,
      dateGet:article.dateGet,
      nRepair:article.nRepair,
      place:article.place,
      price:article.price,
      repairHis:article.repairHis,
      })
  });
}

unsubscribeFromFirestore() {
  if(this.subscription)
    this.subscription();
    
}

componentDidUpdate(){
  this.subscribeToFirestore();
}

componentWillUnmount() {
   this.unsubscribeFromFirestore();
}


  render() {
    const { 
      assistAdr,
      assistDept,
      assistMail,
      assistTel,
      assistName,
      code,
      dState,
      dateGet,
      nRepair,
      name,
      place,
      price,
      repairHis,
      status } = this.state;
    return (
      <Container>
        <Content>
          
        
              <Card >
              <CardItem header bordered>
              <Text>ข้อมูลครุภัณฑ์</Text>
            </CardItem>
                <CardItem><Text >รหัส : {code}</Text></CardItem>
                <CardItem><Text >ชื่อ : {name}</Text></CardItem>
                <CardItem><Text >ที่ตั้ง : {place}</Text></CardItem>
                <CardItem><Text >ราคา: {price} บาท</Text></CardItem>
                  <CardItem><Text >วันที่ได้มา : {dateGet} </Text></CardItem>
                  <CardItem><Text >สถานะ : {status}   สภาพ :{dState}</Text></CardItem>
              </Card>
              <Card>
              <CardItem header bordered>
              <Text>ประวัติการซ่อม</Text>
            </CardItem>
                  <CardItem><Text >ประวัติการซ่อม : {repairHis}</Text></CardItem>
                  <CardItem><Text >จำนวนครั้งการซ่อม : {nRepair}</Text></CardItem>
              </Card>

              <Card>
              <CardItem header bordered>
              <Text>ข้อมูลผู้ดูแล</Text>
            </CardItem>
                  <CardItem><Text >ชื่อ : {assistName}</Text></CardItem>
                  <CardItem><Text >โทร : {assistTel}</Text></CardItem>
                  <CardItem><Text >ติดต่อ : {assistMail}</Text></CardItem>
                  <CardItem><Text >สังกัด : {assistDept}</Text></CardItem>
                  <CardItem><Text >ที่อยู่สังกัด : {assistAdr}</Text></CardItem>
              </Card>
              <Button  block  style = {{backgroundColor: '#5F56B0' ,marginTop :20,marginBottom :20,alignItems:'center',justifyContent:'center'}} 
          onPress={()=>{this.props.navigation.navigate('Commentscreen',{codeId:code})}}>
            <Text >รายงานสภาพครุภัณฑ์</Text>
        </Button>
        </Content>
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

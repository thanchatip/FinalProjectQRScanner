import React from 'react';

import { Container, List, Text,ListItem,Button,Content,CardItem, Card } from 'native-base';



export default class DetailDisp extends React.Component {


  render() {
      const{article,onAddComment} =this.props;
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
      status } = article;
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
                onPress={onAddComment}>
            <Text >รายงานสภาพครุภัณฑ์</Text>
        </Button>
             
        </Content>
      </Container>
    );
    
  }
  }

  


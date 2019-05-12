import React from 'react';

import { Container, List, Text,ListItem,Button,Content,CardItem, Card } from 'native-base';



export default class ShopDisp extends React.Component {


  render() {
      const{shop} =this.props;
    const { 
        sMail,sName,sTel,sAddress,} = shop;
    return (
      <Container>
        <Content>
          
        
              <Card style= {{marginTop :10}} >
              <CardItem header bordered>
              <Text>ข้อมูลร้านค้า</Text>
            </CardItem>
               
                <CardItem><Text >ชื่อร้าน : {sName}</Text></CardItem>
                <CardItem><Text >ที่ตั้ง : {sAddress}</Text></CardItem></Card>
            <Card style= {{marginTop :10}}>
             <CardItem header bordered>
              <Text>ข้อมูลการติดต่อ</Text>
            </CardItem>
                <CardItem><Text >โทรศัพท์ : {sTel} </Text></CardItem>
                  <CardItem><Text >อีเมล : {sMail}  </Text></CardItem>
              </Card>
             
              
              
             
        </Content>
      </Container>
    );
    
  }
  }

  


import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button,Icon, Container, CardItem, Content,List,ListItem ,Left,Right, Body} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';



export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Setting',
    headerStyle: { backgroundColor: '#5F56B0' },
    headerTitleStyle: { color: 'white' },
  };

  render() {
    
    return (
      <Container>
        <Content>
          <List>
            
            <ListItem icon onPress={()=>{this.props.navigation.navigate('Profile')}}>
            <Left>
            <Button style={{ backgroundColor: "#5F56B0" }}>
            <FontAwesome name={"user"} size={20} color={"white"}></FontAwesome>
              </Button>
            </Left>
            <Body>
                <Text > Profile </Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon onPress={()=>{this.props.navigation.navigate('Notification')}}>
            <Left>
            <Button style={{ backgroundColor: "#5F56B0" }}>
            <FontAwesome name={"bell"} size={20} color={"white"}></FontAwesome>
              </Button>
            </Left>
            <Body>
                <Text>Notification</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon onPress={()=>{this.props.navigation.navigate('Shop')}}>
            <Left>
            <Button style={{ backgroundColor: "#5F56B0" }}>
            <FontAwesome name={"home"} size={20} color={"white"}></FontAwesome>
              </Button>
            </Left>
            <Body>
                <Text> Shop </Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            </List>
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
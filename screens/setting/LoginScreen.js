import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
} from 'react-native';

import { Container, Header, Content, Card, CardItem, Text, Body,Button } from 'native-base';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
        email: '', 
        password: ''
    };
  }

  render() {
    return (
      <Container >
    <Card  style = {{marginTop :80}}>

      <CardItem header bordered>
      
         <Text>Please Login to your account .</Text>
        
      </CardItem>
      
      <CardItem bordered>
        <View style={styles.container}>
          <TextInput
            
            style={{height: 40}}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            />
            </View>
      </CardItem>
      <CardItem bordered>
      <View style={styles.container}>
            <TextInput
            style={{height: 40}}
            placeholder="Password"
            secureTextEntry 
            onChangeText={(password) => this.setState({password})}
            />
        </View>
      </CardItem>
      

      <Button  block  style = {{marginTop :50,alignItems:'center',justifyContent:'center'}} 
      onPress={()=>this.props.Login(this.state.email, this.state.password)}>
            <Text >Log in </Text>
        </Button>
        
        
      </Card>
  </Container>
        
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
});
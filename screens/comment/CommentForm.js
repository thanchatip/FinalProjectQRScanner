import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {CheckBox,Container,Content,Body,List, ListItem,Text} from 'native-base';

class CommentForm extends React.Component {
  state= {
    txtBroken:'',
    txtPlace:'',
    chkBroken:false,
    chkPlace:false,
  
};

  handleNameChanged = (text) => {
    const { comment, onCommentChanged } = this.props;
    if (typeof onCommentChanged === 'function') {
      onCommentChanged({
        ...comment,
        username: text,
      });
    }
  }

 

  handleCommentChanged = (text) => {
    const { comment, onCommentChanged } = this.props;
    if (typeof onCommentChanged === 'function') {
      onCommentChanged({
        ...comment,
        ment: text,
      });
    }
  }
  checkBrokenHandler() {
    this.setState({ chkBroken: !this.state.chkBroken })
  }

  checkPlaceHandler() {
    this.setState({ chkPlace: !this.state.chkPlace })
  }

  checkBroken=()=>{
    if (this.state.chkBroken == true){
      this.setState({
          txtBroken:'ชำรุด'
      })
    }else if(this.state.chkBroken == false){
      this.setState({
        txtBroken:''
      })
    }
  }

  checkPlace=()=>{
    if (this.state.chkPlace == true){
      this.setState({
          txtPlace:'ที่ตั้งไม่ตรงกับข้อมูล'
      })
    }else if(this.state.chkPlace == false){
      this.setState({
        txtPlace:''
      })
    }
  }
  

  render() {
    const {
      comment: { username, ment,txtBroken,txtPlace },
      onAddComment,
      disabled,
    } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="ชื่อผู้แจ้ง"
          value={username}
          onChangeText={this.handleNameChanged}
          editable={!disabled}
        />
        
        <TextInput
          placeholder="อื่นๆ"
          style={styles.comment}
          multiline={true}
          value={ment}
          onChangeText={this.handleCommentChanged}
          editable={!disabled}
        />

        <Button color ='#5F56B0'
          title="Add a comment"
          onPress={onAddComment}
          disabled={disabled}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
 
  comment: {
    height: 160,
    textAlignVertical: 'top',
  },
  
});

export default CommentForm;

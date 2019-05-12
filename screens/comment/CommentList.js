import React from 'react';
import { FlatList } from 'react-native';

import CommentEntry from './CommentEntry';

export default class CommentList extends React.Component{

  handleShopSelected = (id) => {
    const { onShopSelected } = this.props;

    if (typeof onShopSelected === 'function')
      onShopSelected(id);
  };

 renderItem =({ item })=> (
   <CommentEntry
    comment ={item} />
 );

KeyExtractor=(item)=>item._id;


render(){ 
    const { commentList } =this.props;
    
  return (
    <FlatList
      data={commentList}
      renderItem={this.renderItem}
      keyExtractor={this.keyExtractor}
    />
  );
  }
}
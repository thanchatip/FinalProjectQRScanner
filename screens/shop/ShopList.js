import React from 'react';
import {
  FlatList,
} from 'react-native';

import ShopEntry from './ShopEntry';

export default class ShopList extends React.Component {

 handleShopSelected = (id) => {
    const { onShopSelected } = this.props;

    if (typeof onShopSelected === 'function')
      onShopSelected(id);
  };

  renderItem = ({item}) => (
    <ShopEntry
      shop={item}
      onPressed={this.handleShopSelected}
    />
  );
  

  keyExtractor = (item) => item._id;

  render() {
    const { shopList } = this.props;

    return (
      <FlatList
        data={ shopList }
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

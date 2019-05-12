import React from 'react';
import {
  FlatList,
} from 'react-native';

import ArticleEntry from './ArticleEntry';

export default class ArticleList extends React.Component {

 handleArticleSelected = (id) => {
    const { onArticleSelected } = this.props;

    if (typeof onArticleSelected === 'function')
      onArticleSelected(id);
  };

  renderItem = ({item}) => (
    <ArticleEntry
      dArt={item}
      onPressed={this.handleArticleSelected}
    />
  );

  keyExtractor = (item) => item._id;

  render() {
    const { articleList } = this.props;

    return (
      <FlatList
        data={ articleList }
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

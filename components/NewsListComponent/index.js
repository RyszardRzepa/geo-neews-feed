import React, { PureComponent } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types'

import ListItem from '../ListItemComponent';
import styles from './styles';

class NewsListComponent extends PureComponent {
  _keyExtractor = (item) => item.id;

  _renderItem({ item }) {
    const { title, subtitle, image_url } = item;
    return (
      <ListItem
        title={title}
        subtitle={subtitle}
        image_url={image_url}
      />
    )
  }

  render() {
    if (this.props.data.loading) {
      return <ActivityIndicator/>
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data.labrador.articles}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

NewsListComponent.propTypes = {
  tag: PropTypes.string,
  data: PropTypes.object
};

const newsQuery = gql`
query fetchNews($tag: String!) {
    labrador {
       articles(tags: $tag) {
          id
          title
          subtitle
          image_url
    }
  }
}
`;

export default graphql(newsQuery)(NewsListComponent);

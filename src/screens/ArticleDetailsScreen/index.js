import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class ArticleDetailsScreen extends PureComponent {
  static navigationOptions = {
    title: 'Article Details'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.navigation.state.params.title}
        </Text>
        <Text style={styles.subtitle}>
          {this.props.navigation.state.params.subtitle}
        </Text>
      </View>
    )
  }
}

export default ArticleDetailsScreen;
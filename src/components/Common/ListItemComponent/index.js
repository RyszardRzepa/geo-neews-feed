import React, { PureComponent } from 'react';
import { ListItem } from 'react-native-elements'

class ListItemComponent extends PureComponent {
  _onPress = (navigation, title, subtitle) => {
    navigation.navigate('ArticleDetails', {  title, subtitle } )
  };

  render() {
    const { title, subtitle, imgUrl, navigation } = this.props;
    return (
      <ListItem
        title={title}
        subtitle={subtitle}
        avatar={{ uri: imgUrl }}
        onPress={() => this._onPress(navigation, title, subtitle )}
      />
    );
  }
}

export default ListItemComponent;
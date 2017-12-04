import React, { PureComponent } from 'react';
import { List, ListItem } from 'react-native-elements'

class ListItemComponent extends PureComponent {
  _onPress = () => {
    // this.props.onPressItem(this.props.id);
  };

  render() {
    const { title, subtitle, imgUrl } = this.props;
    return (
      <ListItem
        title={title}
        subtitle={subtitle}
        avatar={{ uri: imgUrl }}
      />
    );
  }
}

export default ListItemComponent;
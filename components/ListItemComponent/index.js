import React, { PureComponent } from 'react';
import { List, ListItem } from 'react-native-elements'

class ListItemComponent extends PureComponent {
  _onPress = () => {
    // this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <ListItem
        title={this.props.title}
        subtitle={this.props.subtitle}
      />
    );
  }
}

export default ListItem;
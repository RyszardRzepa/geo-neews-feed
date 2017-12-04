import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Location, Permissions } from 'expo';
import axios from 'axios';

import NewsListComponent from '../../components/NewsListComponent/index';
import HeaderTitle from '../../components/Common/HeaderTitleComponent';
import styles from './styles';

class App extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return { headerTitle: <HeaderTitle title={params.tag}/> }
  };

  state = {
    errorMessage: '',
    tag: '',
  };

  componentWillMount() {
    return this._getLocationAsync()
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextState.tag !== this.state.tag) {
      this.props.navigation.setParams({ tag: this.state.tag });
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    return Location.watchPositionAsync({
      enableHighAccuracy: false,
      distanceInterval: 500,
    }, (location) => {
      return this._callGoogleMapsApi(location)
    })
  };

  async _callGoogleMapsApi({ coords: { latitude, longitude } }) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=
        ${latitude},
        ${longitude}
        &key=AIzaSyAO_JxJ2FUOB8hD414P1vA8_ziYCV6Xzgo`;

    // get district(tag) name from google maps response
    let res = await axios.get(url);
    await this.setState({
      tag: res.data.results[0].address_components[2].long_name,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.tag ?
          <ActivityIndicator/> :
          <NewsListComponent tag={this.state.tag.toLowerCase()}/>
        }
      </View>
    );
  }
}


export default App;
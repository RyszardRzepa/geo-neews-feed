import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Location, Permissions } from 'expo';
import axios from 'axios';

import NewsListComponent from '../../components/NewsListComponent';
import styles from './styles';

class App extends Component {
  state = {
    errorMessage: '',
    tag: '',
    isLoading: true
  };

  componentWillMount() {
    return this._getLocationAsync()
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    return this._callGoogleMapsApi(location)
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
    if (!this.state.tag) {
      return <ActivityIndicator/>
    }

    return (
      <View style={styles.container}>
        <NewsListComponent tag={this.state.tag.toLowerCase()}/>
      </View>
    );
  }
}


export default App;
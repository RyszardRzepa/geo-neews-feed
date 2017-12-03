import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Location, Permissions} from 'expo';
import axios from 'axios';

import NewsListComponent from '../../components/NewsListComponent';
import styles from './styles';

class App extends Component {
    state = {
        errorMessage: '',
        tag: '',
        isLoading: false
    };

    componentWillMount() {
        return this._getLocationAsync()
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        return this._callGoogleMapsApi(location)
    };

    async _callGoogleMapsApi({coords: {latitude, longitude}}) {
        this.setState({isLoading: true});

        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=
        ${latitude},
        ${longitude}
        &key=AIzaSyAO_JxJ2FUOB8hD414P1vA8_ziYCV6Xzgo`;

        // get district(tag) name from google maps response
        let res = await axios.get(url);
        this.setState({
            tag: res.data.results[0].address_components[2].long_name,
            isLoading: false
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.isLoading ?
                    <ActivityIndicator/> :
                    <NewsListComponent tag={this.state.tag}/>
                }
            </View>
        );
    }
}


export default App;
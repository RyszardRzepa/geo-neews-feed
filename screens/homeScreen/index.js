import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Location, Permissions} from 'expo';
import axios from 'axios';

import styles from './styles';

export default class App extends Component {
    state = {
        errorMessage: ''
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
        this.callGoogleMapsApi(location)
    };

    callGoogleMapsApi({coords: {latitude, longitude}}) {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=
        ${latitude},
        ${longitude}
        &key=AIzaSyAO_JxJ2FUOB8hD414P1vA8_ziYCV6Xzgo`;

        axios.get(url).then(res => console.log(res.data.results[0].address_components[2].long_name))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>location</Text>
            </View>
        );
    }
}
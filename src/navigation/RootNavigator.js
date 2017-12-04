import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const RootNavigator = StackNavigator({
    Home: {
      screen: HomeScreen,
    },
  },
  {
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f84648',
      },
      lazy: true,
      tabBarVisible: false,
    },
    headerMode: 'screen',
  }
);

export default RootNavigator;
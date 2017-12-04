import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';

const RootNavigator = StackNavigator({
    Home: {
      screen: HomeScreen,
    },
    ArticleDetails: {
      screen: ArticleDetailsScreen
    }
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
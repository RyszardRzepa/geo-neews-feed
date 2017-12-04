import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import HomeScreen from './screens/HomeScreen';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://wolverine-fetcher.prod.medialaben.no/query' }),
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HomeScreen/>
      </ApolloProvider>
    );
  }
}

export default App
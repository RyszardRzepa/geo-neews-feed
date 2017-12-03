import React, { Component } from 'react';
import { View } from 'react-native';
import gql from "graphql-tag";
import {graphql} from 'react-apollo';

class NewsListComponent extends Component {
    render () {
        return (
            <View>
                {console.log(this.props)}
            </View>
        )
    }
}

const newsQuery = gql`
{
  labrador {
    articles(tags: "sentrum") {
      id
      published
    }
  }
}
`;

export default graphql(newsQuery, {
    options(ownProps) {
        return {
            variables: {
                tag: ownProps.tag,
            },
        };
    },
})(NewsListComponent);

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import gql from "graphql-tag";
import {graphql} from 'react-apollo';
import PropTypes from 'prop-types'

class NewsListComponent extends Component {
    render() {
        return (
            <View>
                {this.props.data.loading && <Text>loading...</Text>}
                {console.log(this.props.data)}
            </View>
        )
    }
}

NewsListComponent.propTypes = {
    tag: PropTypes.string
};

const newsQuery = gql`
{
  labrador {
    articles(tags: "sentrum") {
      id
      title
    }
  }
}
`;

export default graphql(newsQuery, {
    options({tag}) {
        return {
            variables: {
                tag,
            },
        };
    },
})(NewsListComponent);

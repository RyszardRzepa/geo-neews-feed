import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const HeaderTitleComponent = (props) => {
  return (
    <Text style={styles.title}>
      {props.title}
    </Text>
  )
};

HeaderTitleComponent.propTypes = {
  title: PropTypes.string
};

export default HeaderTitleComponent;


import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = {
  container : {
    width,
    flex: 1
  }
};

export default styles;
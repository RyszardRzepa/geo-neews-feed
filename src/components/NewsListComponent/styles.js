import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = {
  container : {
    width,
    justifyContent: 'center',
    flex: 1
  }
};

export default styles;
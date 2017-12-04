import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    width,
    marginBottom: 20
  }
};

export default styles;
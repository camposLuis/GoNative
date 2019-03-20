import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pointContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 5,
    borderColor: colors.white,
    overflow: 'hidden',
  },
  pointImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  callout: {
    backgroundColor: colors.white,
    padding: metrics.baseMargin,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.light,
  },
});

export default styles;

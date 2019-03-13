import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 10,
    height: 25,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.secundary,
    flex: 1,
    height: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 2,
    borderRadius: metrics.borderRadius,
  },
  buttonPress: {
    backgroundColor: colors.primary,
    flex: 1,
    height: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 2,
    borderRadius: metrics.borderRadius,
  },
  text: {
    color: colors.white,
  },
});

export default styles;

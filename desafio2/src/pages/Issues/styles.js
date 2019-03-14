import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  boxError: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.danger,
    padding: metrics.basePadding,
    height: 40,
  },
  containerMaster: {
    backgroundColor: colors.lighter,
    flex: 1,
    alignItems: 'stretch',
  },
  error: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    marginTop: 10,
  },
  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: 'center',
  },
});

export default styles;

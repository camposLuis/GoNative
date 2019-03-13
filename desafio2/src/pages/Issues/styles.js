import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  containerMaster: {
    backgroundColor: colors.lighter,
    flex: 1,
    alignItems: 'stretch',
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

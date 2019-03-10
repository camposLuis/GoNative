import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics } from '~/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  boxInput: {
    flex: 1,
    width: metrics.screenWidth - 80,
  },
  boxButton: {
    width: 40,
    marginLeft: metrics.baseMargin,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.lighter,
    borderRadius: metrics.borderRadius,
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.dark,
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.lighter,
    justifyContent: 'space-between',
    padding: metrics.basePadding,
    flexDirection: 'row',
  },
  containerMaster: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'stretch',
  },
  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: 'center',
  },
  error: {
    color: colors.danger,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding,
  },
  text: {
    color: colors.light,
    fontSize: 14,
    lineHeight: 21,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;

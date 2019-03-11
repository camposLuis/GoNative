import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  boxInput: {
    flex: 1,
    width: metrics.screenWidth - 80,
    height: 60,
    borderBottomWidth: 0.5,
    borderColor: colors.regular,
  },
  boxButton: {
    width: 40,
    borderBottomWidth: 0.5,
    borderColor: colors.regular,
    height: 60,
  },
  button: {
    alignItems: 'flex-end',
    backgroundColor: colors.lighter,
    borderRadius: metrics.borderRadius,
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.dark,
    fontSize: 28,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.lighter,
    justifyContent: 'space-between',
    padding: metrics.basePadding,
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
  containerMaster: {
    backgroundColor: colors.lighter,
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

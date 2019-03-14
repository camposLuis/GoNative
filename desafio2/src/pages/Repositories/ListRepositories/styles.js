import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    padding: metrics.basePadding,
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: metrics.borderRadius,
  },
  boxAvatar: {
    backgroundColor: colors.lighter,
  },
  avatar: {
    height: 50,
    width: 50,
  },
  boxInfo: {
    flex: 1,
    height: 50,
    marginLeft: metrics.baseMargin,
    justifyContent: 'space-between',
  },
  fullname: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  login: {
    fontSize: 14,
    color: colors.regular,
    fontStyle: 'italic',
  },
  boxButton: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 30,
    marginLeft: metrics.baseMargin,
    height: 50,
  },
  icon: {
    color: colors.darker,
  },
});

export default styles;

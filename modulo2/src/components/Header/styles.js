import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 30 + getStatusBarHeight(),
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
    paddingTop: 2,
  },
  title: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

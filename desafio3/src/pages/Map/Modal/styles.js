import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../styles';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: metrics.basePadding,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignSelf: 'stretch',
    alignItems: 'stretch',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darker,
    textAlign: 'center',
  },

  modalInput: {
    marginTop: metrics.baseMargin * 2,
    paddingHorizontal: 10,
    height: 42,
    borderRadius: 5,
    borderColor: colors.light,
    borderWidth: 1,
    fontSize: 16,
  },

  actionsContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 2,
  },

  button: {
    flex: 1,
    paddingHorizontal: 10,
    height: 42,
    borderRadius: 5,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.white,
  },

  buttonSubmit: {
    backgroundColor: colors.success,
    marginLeft: 15,
  },
});

export default styles;

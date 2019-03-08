import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const colorHeaderText = '#111';

const styles = StyleSheet.create({
  headerText: {
    color: colorHeaderText,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const Header = ({ curso }) => <Text style={styles.headerText}>{curso}</Text>;

Header.propTypes = {
  curso: PropTypes.string.isRequired,
};

export default Header;

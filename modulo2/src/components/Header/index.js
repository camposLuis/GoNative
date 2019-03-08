import React from 'react';
import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#7A91CA" />
    <View style={styles.left} />
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={() => {}} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

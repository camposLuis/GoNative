import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const colorUsuarioText = '#555';
const colorBorderUsuarioBox = '#81e';

const styles = StyleSheet.create({
  usuarioBox: {
    borderBottomWidth: 1,
    borderColor: colorBorderUsuarioBox,
    marginTop: 10,
    paddingBottom: 20,
  },
  usuarioText: {
    color: colorUsuarioText,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

const User = ({ usuario }) => (
  <View style={styles.usuarioBox}>
    <Text style={styles.usuarioText}>{usuario}</Text>
  </View>
);

User.propTypes = {
  usuario: PropTypes.string.isRequired,
};

export default User;

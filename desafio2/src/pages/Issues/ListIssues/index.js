import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text, Image, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ListIssues = ({ infoissues }) => (
  <View style={styles.container}>
    <View style={styles.boxAvatar}>
      <Image style={styles.avatar} source={{ uri: infoissues.user.avatar_url }} />
    </View>
    <View style={styles.boxInfo}>
      <Text style={styles.fullname} numberOfLines={1} ellipsizeMode="tail">
        {infoissues.title}
      </Text>
      <Text style={styles.login}>{infoissues.user.login}</Text>
    </View>
    <View style={styles.boxButton}>
      <TouchableOpacity onPress={() => Linking.openURL(infoissues.html_url)}>
        <Icon name="angle-right" size={18} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

ListIssues.propTypes = {
  infoissues: PropTypes.shape({
    full_name: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ListIssues;

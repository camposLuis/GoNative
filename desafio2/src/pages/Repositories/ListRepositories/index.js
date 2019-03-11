import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ListRepositories = ({ inforepository }) => (
  <View style={styles.container}>
    <View style={styles.boxAvatar}>
      <Image style={styles.avatar} source={{ uri: inforepository.owner.avatar_url }} />
    </View>
    <View style={styles.boxInfo}>
      <Text style={styles.fullname}>{inforepository.full_name}</Text>
      <Text style={styles.login}>{inforepository.owner.login}</Text>
    </View>
    <View style={styles.boxButton}>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="angle-right" size={18} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

ListRepositories.propTypes = {
  inforepository: PropTypes.shape({
    full_name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ListRepositories;

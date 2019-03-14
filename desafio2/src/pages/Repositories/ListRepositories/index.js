import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const ListRepositories = ({ inforepository, navigation: { navigate } }) => (
  <View style={styles.container}>
    <View style={styles.boxAvatar}>
      <Image style={styles.avatar} source={{ uri: inforepository.owner.avatar_url }} />
    </View>
    <View style={styles.boxInfo}>
      <Text style={styles.fullname}>{inforepository.full_name}</Text>
      <Text style={styles.login}>{inforepository.owner.login}</Text>
    </View>
    <TouchableOpacity
      style={styles.boxButton}
      onPress={() => navigate('Issues', {
        login: inforepository.owner.login,
        full_name: inforepository.full_name,
      })
      }
    >
      <Icon name="angle-right" size={24} style={styles.icon} />
    </TouchableOpacity>
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(ListRepositories);

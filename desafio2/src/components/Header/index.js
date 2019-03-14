import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  returnScreen = async () => {
    const { navigation } = this.props;
    navigation.navigate('Repositories');
  };

  removeStorage = async () => {
    AsyncStorage.clear();
  };

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#7A91CA" />
        {title !== 'Repositórios' ? (
          <TouchableOpacity onPress={this.returnScreen}>
            <Icon name="angle-left" size={24} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {}}>
            <Icon name="bars" size={24} style={styles.icon} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        {title === 'Repositórios' ? (
          <TouchableOpacity onPress={this.removeStorage}>
            <Icon name="trash" size={24} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default withNavigation(Header);

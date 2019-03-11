import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, Text, TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

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

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#7A91CA" />
        <TouchableOpacity onPress={this.returnScreen}>
          <Icon name="angle-left" size={18} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View />
      </View>
    );
  }
}

export default withNavigation(Header);

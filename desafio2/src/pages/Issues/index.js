import '~/config/ReactotronConfig';
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {}

  render() {
    const { navigation } = this.props;
    const login = navigation.getParam('login');
    return (
      <View style={styles.containerMaster}>
        <StatusBar barStyle="light-content" backgroundColor="#7A91CA" />
        <Header title={login} />
      </View>
    );
  }
}

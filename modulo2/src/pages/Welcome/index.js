import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';
import api from '../../services/api';

import styles from './styles';

export default class Welcome extends Component {
  state = {
    username: '',
  };

  checkUserExist = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  singIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    try {
      await this.checkUserExist(username);
      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (err) {
      console.tron.log('Usuário inexistente');
    }
  };

  render() {
    const { username } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#7A91CA" />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuário do GitHub.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.singIn}>
            <Text style={styles.buttonText}>Proceguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

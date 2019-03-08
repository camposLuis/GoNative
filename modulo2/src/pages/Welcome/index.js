import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
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
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Proceguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;

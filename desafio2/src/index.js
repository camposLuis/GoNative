import '~/config/ReactotronConfig';
import '~/config/DevtoolsConfig';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const bgContainerColor = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: bgContainerColor,
    flex: 1,
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text>Desafio 2</Text>
  </View>
);

export default App;

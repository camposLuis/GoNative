import './config/ReactotronConfig';
import './config/DevtoolsConfig';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const bgColorContainer = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: bgColorContainer,
    flex: 1,
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text>Template App</Text>
  </View>
);

export default App;

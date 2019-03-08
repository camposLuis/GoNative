import './config/reactotron';
import './config/devtools';
import React from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

const bgColor = '#81e';
const bgHeaderColor = '#FFF';
const colorHeaderText = '#111';
const colorPostText = '#222';
const colorUsuarioText = '#555';
const colorBorderUsuarioBox = '#81e';

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    flex: 1,
  },
  header: {
    backgroundColor: bgHeaderColor,
    borderRadius: 5,
    marginHorizontal: 25,
    marginTop: 25,
    padding: 20,
  },
  headerText: {
    color: colorHeaderText,
    fontSize: 20,
    fontWeight: 'bold',
  },
  postBox: {
    marginTop: 15,
    paddingTop: 0,
  },
  postText: {
    color: colorPostText,
    fontSize: 14,
  },
  usuarioBox: {
    borderBottomWidth: 1,
    borderColor: colorBorderUsuarioBox,
    marginTop: 10,
    paddingBottom: 20,
  },
  usuarioText: {
    color: colorUsuarioText,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

const App = () => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aprendendo React Native</Text>
        <View style={styles.usuarioBox}>
          <Text style={styles.usuarioText}>Luís Campos</Text>
        </View>
        <View style={styles.postBox}>
          <Text style={styles.postText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aprendendo React Native</Text>
        <View style={styles.usuarioBox}>
          <Text style={styles.usuarioText}>Luís Campos</Text>
        </View>
        <View style={styles.postBox}>
          <Text style={styles.postText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aprendendo React Native</Text>
        <View style={styles.usuarioBox}>
          <Text style={styles.usuarioText}>Luís Campos</Text>
        </View>
        <View style={styles.postBox}>
          <Text style={styles.postText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aprendendo React Native</Text>
        <View style={styles.usuarioBox}>
          <Text style={styles.usuarioText}>Luís Campos</Text>
        </View>
        <View style={styles.postBox}>
          <Text style={styles.postText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </View>
      </View>
    </ScrollView>
  </View>
);

export default App;

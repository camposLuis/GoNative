import './config/reactotron';
import './config/devtools';
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '~/components/Header.android';
import User from '~/components/User.android';
import Post from '~/components/Post.android';

const bgColor = '#81e';
const bgHeaderColor = '#FFF';

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
});

export default class App extends Component {
  state = {
    post: [
      {
        id: Math.random(),
        curso: 'Aprendendo React Native',
        usuario: 'Luís Campos',
        postText:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: Math.random(),
        curso: 'Aprendendo ReactJS',
        usuario: 'Gabriel Petrovick',
        postText:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: Math.random(),
        curso: 'Aprendendo NodeJS',
        usuario: 'Guilherme Queiroz',
        postText:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: Math.random(),
        curso: 'Aprendendo Angular',
        usuario: 'Anderson Luís',
        postText:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: Math.random(),
        curso: 'Aprendendo ECS6',
        usuario: 'Mirim Camila',
        postText:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: Math.random(),
        curso: 'Aprendendo FlexBox',
        usuario: 'Mislene Dalila',
        postText:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: Math.random(),
        curso: 'Aprendendo Redux',
        usuario: 'Fernando Corrêa',
        postText:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: Math.random(),
        curso: 'Aprendendo GraphQL',
        usuario: 'José dos Reis',
        postText:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
    ],
  };

  render() {
    const { post } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          {post.map(posts => (
            <View style={styles.header} key={posts.id}>
              <Header curso={posts.curso} />
              <User usuario={posts.usuario} />
              <Post postText={posts.postText} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

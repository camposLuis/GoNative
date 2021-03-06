import './config/reactotron';
import './config/devtools';
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Button,
} from 'react-native';
import Todo from '~/components/Todo';

console.tron.log('Hello World');

export default class App extends Component {
  state = {
    counter: 0,
    text: '',
    usuario: { id: 0, nome: 'Luís' },
    todos: [{ id: 0, text: 'Fazer café' }, { id: 0, text: 'Estudar o GoNative' }],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: 'Hello World' });
    }, 4000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 10;
  }

  handleCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Novo todo' }],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? (
          <Text>{`DidMount: ${this.state.text}`}</Text>
        ) : (
          <Text>{this.state.text}</Text>
        )}
        <Text style={styles.text}>{this.state.usuario.nome}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
        <Text>{`Contador: ${this.state.counter}`}</Text>
        <Button title="Add" onPress={this.handleCounter} />
      </View>
    );
  }
}

/* render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
          <Text style={styles.boxText}>Oi</Text>
        </View>
      </View>
    );
  }
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    /* flexDirection: 'row',
    flexWrap: 'wrap', */
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Platform.select({
      ios: {
        fontSize: 24,
      },
      android: {
        fontWeight: 'bold',
      },
    }),
  },

  /* box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [{ rotateZ: '20deg' }],
  },

  boxText: {
    color: '#FFF',
  }, */
});

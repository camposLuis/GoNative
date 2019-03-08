import './config/reactotron';
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Button,
} from 'react-native';
// import Todo from "./components/Todo";
console.tron.log('Hello World');

export default class App extends Component {
  /* state = {
    counter: 0,
    text: "",
    usuario: { id: 0, nome: "Luís" },
    todos: [
      { id: 0, text: "Fazer café" },
      { id: 0, text: "Estudar o GoNative" }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: "Hello World" });
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
      todos: [...this.state.todos, { id: Math.random(), text: "Novo todo" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{`DidMount: ${this.state.text}`}</Text>
        <Text>{this.state.usuario.nome}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
        <Text>{`Contador: ${this.state.counter}`}</Text>
        <Button title="Add" onPress={this.handleCounter} />
      </View>
    );
  }
} */

  render() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
  },

  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [{ rotateZ: '20deg' }],
  },

  boxText: {
    color: '#FFF',
  },
});

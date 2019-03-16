import React from 'react';

import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './store/actions/todos';

// import styles from './styles';

const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }}>
    {todos.map(todo => (
      <Text
        onPress={() => markAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button onPress={addTodo} title="Adicionar todo" />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

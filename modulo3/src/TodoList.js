import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// import styles from './styles';

const TodoList = ({ todos }) => (
  <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }}>
    {todos.map(todo => (
      <Text key={todo}>{todo}</Text>
    ))}
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);

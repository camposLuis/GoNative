import { createStore } from 'redux';

const INITIAL_STATE = ['Fazer café', 'Estudar React Native', 'Estudar Redux'];

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.text];
  }

  return state;
}

const store = createStore(reducer);

export default store;

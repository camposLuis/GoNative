import { createStore } from 'redux';

function reducer() {
  return ['Fazer café', 'Estudar React Native', 'Estudar Redux'];
}

const store = createStore(reducer);

export default store;

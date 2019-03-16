import { createStore, compose } from 'redux';

import todos from './reducers/todos';

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};
const store = createStore(todos, compose(createAppropriateStore()));

export default store;

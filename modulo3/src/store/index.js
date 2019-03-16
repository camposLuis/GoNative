import { createStore, compose } from 'redux';

import reducer from './reducers';

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};
const store = createStore(reducer, compose(createAppropriateStore()));

export default store;

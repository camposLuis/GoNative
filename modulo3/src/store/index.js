import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createAppropriateStore = __DEV__ ? console.tron.createEnhancer : () => {};
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    createAppropriateStore(),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;

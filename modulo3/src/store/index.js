import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

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

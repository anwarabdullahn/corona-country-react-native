import reducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

export default createStore(
  reducer,
  initialState,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

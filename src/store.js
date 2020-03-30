import reducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

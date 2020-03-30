import {all} from 'redux-saga/effects';

import CountriesSagas from './country';

export default function* rootSaga() {
  yield all([...CountriesSagas]);
}

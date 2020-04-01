import {all} from 'redux-saga/effects';

import CountriesSagas from './country/saga';

export default function* rootSaga() {
  yield all([...CountriesSagas]);
}

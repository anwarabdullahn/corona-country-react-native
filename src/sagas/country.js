import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {
  TYPE,
  getAllCountriesSuccess,
  getSearchCountriesSuccess,
} from '../actions/country';
import * as api from '../api/country';

function* watchGetAllCountriesRequest() {
  yield takeLatest(TYPE.GET_ALL_COUNTRY_REQUEST, getAllCountries);
}

function* watchSearchCountryRequest() {
  yield takeLatest(TYPE.SEARCH_COUNTRY_REQUEST, searchCountry);
}

function* getAllCountries() {
  try {
    const result = yield call(api.getAllCountries);
    yield put(getAllCountriesSuccess(result));
  } catch (error) {
    console.log(error, 'error');
  }
}

function* searchCountry(action) {
  yield put(getSearchCountriesSuccess(action.payload.countryName));
}

const topicsSaga = [
  fork(watchGetAllCountriesRequest),
  fork(watchSearchCountryRequest),
];

export default topicsSaga;

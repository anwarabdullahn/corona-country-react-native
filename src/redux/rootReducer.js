import {combineReducers} from 'redux';
import CountryReducer from './country/reducer';

export default combineReducers({
  country: CountryReducer,
});

import {TYPE} from './action';

const initialState = {
  countries: [],
  filteredCountry: {},
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case TYPE.GET_ALL_COUNTRY_SUCCESS:
      return {
        ...state,
        countries: actions.payload.countries,
      };
    case TYPE.SEARCH_COUNTRY_SUCCESS:
      const filteredCountry = state.countries.filter(item =>
        item.country.match(actions.payload.countryName),
      );
      return {
        ...state,
        filteredCountry,
      };
    default:
      return state;
  }
};

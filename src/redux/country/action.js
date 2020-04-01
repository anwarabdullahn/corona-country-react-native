export const TYPE = {
  GET_ALL_COUNTRY_REQUEST: 'GET_ALL_COUNTRY_REQUEST',
  GET_ALL_COUNTRY_SUCCESS: 'GET_ALL_COUNTRY_SUCCESS',
  SEARCH_COUNTRY_REQUEST: 'SEARCH_COUNTRY_REQUEST',
  SEARCH_COUNTRY_SUCCESS: 'SEARCH_COUNTRY_SUCCESS',
};

export const getAllCountries = () => ({
  type: TYPE.GET_ALL_COUNTRY_REQUEST,
});

export const getAllCountriesSuccess = countries => ({
  type: TYPE.GET_ALL_COUNTRY_SUCCESS,
  payload: {
    countries,
  },
});

export const searchCountry = countryName => ({
  type: TYPE.SEARCH_COUNTRY_REQUEST,
  payload: {
    countryName,
  },
});

export const getSearchCountriesSuccess = countryName => ({
  type: TYPE.SEARCH_COUNTRY_SUCCESS,
  payload: {
    countryName,
  },
});

import api from '../api';

export const getAllCountries = () => {
  return api.get('countries').then(result => {
    return result.data;
  });
};

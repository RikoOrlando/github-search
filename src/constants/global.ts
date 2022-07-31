const { REACT_APP_BASE_URL_API } = process.env;
export const baseUrl = REACT_APP_BASE_URL_API;
export const REQUEST_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const listType = [
  {
    label: 'Users',
    value: 'users',
  },
  {
    label: 'Repositories',
    value: 'repos',
  },
];

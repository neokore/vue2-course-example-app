const BASE_API_URL = process.env.BASE_API_URL ?? 'http://localhost:3000';

const fetchJSON = async (url, options) => {
  const fetchOptions = {
    ...options,
    headers: {
      ...options.headers,
      Accept: 'application/json'
    }
  };
  const response = await fetch(url, fetchOptions);
  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);
  return await response.json();
};

const apiClient = {
  get: async (path, params = '', options = {}) => {
    const fetchOptions = {
      ...options,
      method: 'GET'
    };
    const fetchParams = params.length ? `?${params}` : '';
    return await fetchJSON(
      `${BASE_API_URL}${path}${fetchParams}`,
      fetchOptions
    );
  },

  post: async (path, body, options = {}) => {
    const fetchOptions = {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };
    return await fetchJSON(`${BASE_API_URL}${path}`, fetchOptions);
  },

  put: async (path, body, options = {}) => {
    const fetchOptions = {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };
    return await fetchJSON(`${BASE_API_URL}${path}`, fetchOptions);
  },

  delete: async (path, options = {}) => {
    const fetchOptions = {
      ...options,
      method: 'DELETE'
    };
    return await fetchJSON(`${BASE_API_URL}${path}`, fetchOptions);
  }
};

export default apiClient;

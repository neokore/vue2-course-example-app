const BASE_API_URL = process.env.BASE_API_URL ?? 'http://localhost:3000';

export const get = async (path, params = '', options = {}) => {
  const fetchOptions = {
    ...options,
    method: 'GET'
  };
  const response = await fetch(
    `${BASE_API_URL}${path}?${params}`,
    fetchOptions
  );
  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);
  return await response.json();
};

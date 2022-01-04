

export const api = axios.create({
  // NOTE keep this as basic as you can - then append onto the end of this in the respective service - ie: 'cars', 'houses, etc.
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 8000
})
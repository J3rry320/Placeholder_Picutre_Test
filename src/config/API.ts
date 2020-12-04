const rootURL = "http://jsonplaceholder.typicode.com";

// TODO Better way is to call the request with params
export const API_GET_PHOTOS = (start: number, limit?: number) =>
  `${rootURL}/photos?_start=${start}&_limit=${limit || 5}`;

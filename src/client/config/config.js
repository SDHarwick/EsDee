export const apiPath = 'api/';

export const HOST = process.env.HOST || '0.0.0.0';
export const PORT = process.env.PORT;
export const APP_HOST = `${HOST}:${PORT}/`;

export const BASE_URL = `https://${APP_HOST}`;
// export const API_URL = `https://${APP_HOST}${apiPath}`;
export const API_URL = `https://wsb-api.herokuapp.com/${apiPath}`;
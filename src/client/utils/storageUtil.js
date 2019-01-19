export const setToken = token => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const clearToken = () => localStorage.removeItem('token');
export const setUser = id => localStorage.setItem('id', id);
export const getUser = () => localStorage.getItem('id');
export const clearUser = () => localStorage.removeItem('id');
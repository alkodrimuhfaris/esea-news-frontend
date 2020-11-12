import services from '../../helpers/services';
import qs from 'qs';

export default {
  login: (data) => ({
    type: 'LOGIN_USER',
    payload: services().post('/auth/login/customer', qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT_USER',
  }),
  relogin: () => ({
    type: 'RELOGIN_USER',
  }),
  register: (data) => ({
    type: 'SIGN_UP',
    payload: services().post('auth/user/signup', qs.stringify(data)),
  }),
  setToken: (payload) => ({
    type: 'SET_TOKEN',
    payload,
  }),
};

const initialState = {
  isLogin: false,
  token: '',
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Logging in ...',
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLogin: true,
        isError: false,
        token: action.payload.data.token,
        alertMsg: 'Login succesful',
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isError: true,
        alertMsg: 'Login failed',
      };
    }
    default: {
      return state;
    }
  }
};

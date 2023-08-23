import { LOGIN_FAILTURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
const intialState = {
  isLoading: false,
  isAuth: false,
  isError: false,
  token: "",
  status: "",
};
export function reducer(state = intialState, { type, payload }) {
  // console.log(payload)
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.data.token,
        status: payload.status,
      };
    }
    case LOGIN_FAILTURE: {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

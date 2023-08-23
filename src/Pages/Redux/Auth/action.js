import { LOGIN_FAILTURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios";

export const LoginData = (userdata) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", userdata)
    .then((res) => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILTURE });
    });
};

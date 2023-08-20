import axios from "axios";
import {
  ADD_PRODUCT_FAILTURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
} from "./actionTypes";

export const addProduct = (data) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  axios
    .post(`http://localhost:8080/posts`, data)
    .then(() => {
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: ADD_PRODUCT_FAILTURE });
    });
};

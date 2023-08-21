import axios from "axios";
import {
  PRODUCT_FAILTURE,
  PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

export const addProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post(`http://localhost:8080/posts`, data)
    .then(() => {
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: PRODUCT_FAILTURE });
    });
};

export const Get_Product = (params)=>(dispatch) => {

  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("http://localhost:8080/posts",params)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      // console.log(res.data);
    })
    .catch((error) => {
      dispatch({ type: PRODUCT_FAILTURE });
    });
};

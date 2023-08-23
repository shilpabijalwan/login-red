import React from "react";
import {
  ADD_PRODUCT_FAILTURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  PRODUCT_FAILTURE,
  PRODUCT_REQUEST,
} from "./actionTypes";
const iniState = {
  isLoading: false,
  isError: false,
  products: [],
};
export function reducer(state = iniState, { type, payload }) {
  switch (type) {
    case PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case PRODUCT_FAILTURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case PATCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

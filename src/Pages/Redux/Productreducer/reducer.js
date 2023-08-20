import React from "react";
import {
  ADD_PRODUCT_FAILTURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
} from "./actionTypes";
const iniState = {
  isLoading: false,
  isError: false,
  products: [],
};
export function reducer(state = iniState, { type, payload }) {
  switch (type) {
    case ADD_PRODUCT_REQUEST: {
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
    case ADD_PRODUCT_FAILTURE: {
      return {
        ...state,
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

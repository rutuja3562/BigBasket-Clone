import { ADD_TO_CART, FETCH_DATA, GET_SINGLE_PRODUCT } from "./action"

const initState = {
  product: [],
  currentProduct:{},
  cart: [],
};
export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        product: action.payload,
      };
    }
    case GET_SINGLE_PRODUCT: {
      return {
        ...state,
        currentProduct: action.payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    default:
      return state;
  }
};
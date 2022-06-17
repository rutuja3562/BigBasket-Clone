import {
  ADD_TO_CART,
  DELETE_CART,
  FETCH_CART,
  FETCH_DATA,
  GET_SINGLE_PRODUCT,
} from "./action";

const initState = {
  product: [],
  currentProduct: {},
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
    case FETCH_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case DELETE_CART:
      return { cart: state.cart.filter((e) => e.id !== action?.payload?.id) };
    default:
      return state;
  }
};

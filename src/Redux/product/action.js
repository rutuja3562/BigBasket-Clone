import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";
export const REMOVE_TO_CART = "REMOVE_TO_CART";

export const fetchDataAction = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const fetchData = (payload) => (dispatch) => {
  return axios
    .get("http://localhost:8080/products"
     ,{
      params: {
        ...payload,
      },
    }
    )
    .then((res) => {
      // console.log("..res..",res.data)
      dispatch(fetchDataAction(res.data));
    })
    .catch((e) => console.log("UU",e));
};

export const getSingleProductAction = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT,
    payload
  };
};

export const getSingleProduct = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:8080/products/${id}`)
    .then((res) => {
      // console.log("res...",res.data);
      dispatch(getSingleProductAction(res.data));
    })
    .catch((e) => console.log("ERR", e));
};


export const addtocartction = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

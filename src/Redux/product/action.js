import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
// export const FETCH_CART = "FETCH_CART";
// export const DELETE_CART = "DELETE_CART";
export const FETCH_TO_CART = "FETCH_TO_CART";
// export const REMOVE_ITEME = "REMOVE_ITEME";
export const fetchDataAction = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const fetchData = (payload) => (dispatch) => {
  return axios
    .get("http://localhost:8080/products", {
      params: {
        ...payload,
      },
    })
    .then((res) => {
      // console.log("..res..",res.data)
      dispatch(fetchDataAction(res.data));
    })
    .catch((e) => console.log("UU", e));
};

export const getSingleProductAction = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT,
    payload,
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

export const addtocartaction = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const addtoCart = (product) => (dispatch) => {
  axios.post("http://localhost:7005/vegetablecart", product).then((res) => {
    // console.log("add", res.data);
    dispatch(addtocartaction(res.data));
  });
};

export const fetchcartaction = (data) => ({
  type: FETCH_TO_CART,
  payload: data,
});

export const fetchtoCart = (payload) => (dispatch) => {
  axios.get("http://localhost:7005/vegetablecart").then((res) => {
    // console.log("get", res.data);
    dispatch(fetchcartaction(res.data));
  });
};

export const removeItemAction = (data) => {
  return {
    type: REMOVE_TO_CART,
    payload: data,
  };
};

export const removeItem = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:7005/vegetablecart/${id}`)
    .then((res) => {
      // console.log(res.data);
      dispatch(removeItemAction(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
// export const fetchCartitems = (payload) => {
//   return {
//     type: FETCH_CART,
//     payload
//   };
// };

// export const delCartitems = (product) => {
//   return {
//     type: DELETE_CART,
//     payload: product,
//   };
// };

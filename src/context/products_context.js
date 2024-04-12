import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import Productreducer from "../reducers/products_reducer";

import {
  product as urll,
  products_url as url,
  single_product_url as urlll,
  ACCEPT_HEADER,
  category_verify,
} from "../utils/constants";
import Notification from "../utils/Notification";
import { useUserContext } from "../context/user_context";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_CATEGORY_LIST_BEGIN,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_ERROR,
  MALL_SIGNUP_BEGIN,
  MALL_SIGNUP_SUCCESS,
  MALL_SIGNUP_FAIL,
  GET_SINGLE_PRODUCT_SUCCESS1,
  GET_SINGLE_PRODUCT_ERROR1,
  GET_SINGLE_PRODUCT_BEGIN1,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  produts_error: false,
  products: [],
  featured_products: [],
  trending_products: [],
  defulte_size: "",
  single_product_loading: false,
  single_product_error: false,
  single_product: [],
  single_product1: "",
  inver_index: "",
  mall_signup_loading: false,
  mall_signup_data: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const { userid } = useUserContext();
  //using reducer
  const [state, dispatch] = useReducer(Productreducer, initialState);

  //sidebar functions
  const openSideBar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const getUserId = () => {
    let userid = localStorage.getItem("userid");
    if (userid) {
      return JSON.parse(localStorage.getItem("userid"));
    } else {
      return 0;
    }
  };

  //fetch all product api
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const products = response.data.data;
      // console.log("products  detch api", products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  //fetch cate product api
  const fetchSingleProduct = async (url) => {
    console.log("singleproduct ", url);
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      // const singleProduct = response.data.data;
      const singleProduct = response.data.records.data;
      console.log("singleproduct-->response ", singleProduct);

      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  //fetch categories list
  const fetchCategorieslist = async (urll) => {
    dispatch({ type: GET_CATEGORY_LIST_BEGIN });
    try {
      const response = await axios.post(urll, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const homeData = response.data;
      console.log("homeData12345", homeData);
      dispatch({ type: GET_CATEGORY_LIST_SUCCESS, payload: homeData });
    } catch (error) {
      dispatch({ type: GET_CATEGORY_LIST_ERROR });
    }
    // const response = await axios.get(url);
  };

  //fetch single product api
  const fetchSingleProduct1 = async (url) => {
    console.log("singleproduct");
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN1 });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const singleProduct = response.data.records;
      console.log("singleproduct-->ressss ", singleProduct);

      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS1,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR1 });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  const setMallRegister = async (params, url) => {
    dispatch({ type: MALL_SIGNUP_BEGIN });
    try {
      const response = await axios.post(category_verify, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      localStorage.setItem("productdata", JSON.stringify(response.data.data));
      if (logindata.status == 1) {
        
        // console.log("====", JSON.stringify(logindata, null, 2));
        Notification("success", "Valid Password.");
        dispatch({ type: MALL_SIGNUP_SUCCESS, payload: response.data.data });
      } else {
        Notification("error", "Error!", "Please enter valid  password!");
        // alert(logindata.message);
      }
      return response.data;
    } catch (error) {
      dispatch({ type: MALL_SIGNUP_FAIL });
      console.log("mall-register error", error);
      // localStorage.setItem("is_login", JSON.stringify(false));
    }
  };

  // use effect to fire function when site loads
  useEffect(() => {
    fetchProducts(`${url}${userid}`);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSideBar,
        closeSideBar,
        fetchSingleProduct,
        fetchCategorieslist,
        setMallRegister,
        fetchSingleProduct1,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

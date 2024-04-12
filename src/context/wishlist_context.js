import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/wishlist_reducer";
import axios from "axios";
import { add_wishlist_url as url } from "../utils/constants";
import { remove_wishlist as urll } from "../utils/constants";
import { wishlist_details as urlll } from "../utils/constants";
import Notification from "../utils/Notification";

import {
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST,
  LOAD_PRODUCTS_WISHLIST,
  ADD_TO_WISHLIST_BEGIN,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_ERROR,
  GET_WISHLIST_BEGIN,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_ERROR,
} from "../actions";
import { useProductsContext } from "./products_context";
import { useUserContext } from "./user_context";

const initialState = {
  wishlist_product: [],
  all_products: [],
  isSuccess: false,
  loading: false,
};

const WishlistContext = React.createContext();

export const WishlistProvider = ({ children }) => {
  const { isLogin, logintoken } = useUserContext();
  const { products, fetchSingleProduct } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //products load
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS_WISHLIST, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: GET_WISHLIST });
  }, [products]);

  // useEffect(() => {
  //   fetchWishlistProducts();
  //    }, []);

  //add to cart
  // const addToWishlist = async (singleProduct, params, isAdd, id) => {
  //   try {
  //     // const response = await axios.(`${url}${params.product_id}`, {
  //     const response = await axios.post(url,params, {
  //       headers: {
  //         Accept: "application/x.uniform.v1+json",
  //         Authorization: "Bearer ".concat(logintoken),
  //       },
  //     });
  //     const logindata = response.data;
  //     if (logindata.success == 1) {
  //       if (isAdd == 1) {
  //         dispatch({ type: ADD_TO_WISHLIST, payload: singleProduct });
  //       } else {
  //         dispatch({ type: REMOVE_WISHLIST, payload: id });
  //       }
  //     }
  //   } catch (error) {
  //     console.log("addto wishlist error", error);
  //   }
  // };

  //fetch all product api
  const fetchWishlistProducts = async () => {
    dispatch({ type: GET_WISHLIST_BEGIN });
    try {
      const response = await axios.get(urlll, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(logintoken),
        },
      });
      const products = response.data.data;
      console.log("wishlist product is", products);
      dispatch({ type: GET_WISHLIST_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_WISHLIST_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  const addToWishlist = async (singleProduct, params, isAdd, id) => {
    dispatch({ type: ADD_TO_WISHLIST_BEGIN });
    try {
      // const response = await axios.(`${url}${params.product_id}`, {
      const response = await axios.post(url, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(logintoken),
        },
      });
      const logindata = response.data;
      if (logindata.success == 1) {
        dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: logindata });
        window.location.reload(false);

        Notification(
          "success",
          "Success!",
          "Product Add to Wishlist Successfully."
        );
      }
    } catch (error) {
      console.log("addto wishlist error", error);
      // dispatch({ type: ADDRESS_ERROR });
    }
  };

  //remove from cart
  const removeItemWishlist = async (params) => {
    try {
      const response = await axios.get(`${urll}${params.product_id}`, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(logintoken),
        },
      });
      const logindata = response.data;
      if (logindata.success == 1) {
        // Notification("success", "Success!", "Product Deleted to Wishlist Successfully.");
        // if (isAdd == 1) {
        // dispatch({ type: REMOVE_WISHLIST, payload: id });
        // } else {
        // dispatch({ type: REMOVE_WISHLIST, payload: id });
        // }
        window.location.reload(false);
        Notification(
          "success",
          "Success!",
          "Product Deleted to Wishlist Successfully."
        );
        fetchWishlistProducts();
      }
    } catch (error) {
      console.log("add to wishlist error", error);
    }
  };

  useEffect(() => {
    // addToWishlist(`${url}${userid}`);
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        ...state,
        addToWishlist,
        removeItemWishlist,
        fetchWishlistProducts,
      }}>
      {children}
    </WishlistContext.Provider>
  );
};
// make sure use
export const useWishlistContext = () => {
  return useContext(WishlistContext);
};

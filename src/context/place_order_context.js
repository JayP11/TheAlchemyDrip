import React, { useContext, useState, useReducer } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import reducer from "../reducers/place_order_reducer";
import axios from "axios";
import {
  place_order_url,
  guest_ordet_url,
  get_ordet_url,
  get_order_details_url,
  return_order_url,
  download_invoice_url,
  create_store_ticket,
  store_ticket_view_url,
} from "../utils/constants";
import Notification from "../utils/Notification";
import { isValidHttpUrl } from "../utils/helpers";

import {
  PLACE_ORDER_BEGIN,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  GET_ORDER_SUCCESS,
  GET_SINGLE_ORDER_DETILS,
  STORE_TICKERS_LIST,
  RE_ORDER_PRODUCT,
  DOWNLOAD_INVOICE,
} from "../actions";

// use for login data management
const initialState = {
  //Home page api initial state
  login_loading: false,
  order_data: {},
  my_order_list: [],
  store_ticket_list: [],
  single_order_details: {},
};
const OrderContext = React.createContext();
export const OrderProvider = ({ children }) => {
  //calling use Auth from Auth0
  const [state, dispatch] = useReducer(reducer, initialState);

  const [orderResponse, setOrderRes] = useState({});

  //place order
  const setOrder = async (params, token) => {
    dispatch({ type: PLACE_ORDER_BEGIN });
    try {
      console.log("params ", params);
      const response = await axios.post(place_order_url, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(token),
        },
      });
      const logindata = response.data;
      // console.log('plaACE ORDER ',logindata)
      if (logindata.success == 1) {
        dispatch({ type: PLACE_ORDER_SUCCESS, payload: logindata });

        setOrderRes(logindata);
        return logindata;
      } else {
        dispatch({ type: PLACE_ORDER_ERROR });
      }
    } catch (error) {
      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };

  // without login place order
  const setOrderGuest = async (params, token) => {
    dispatch({ type: PLACE_ORDER_BEGIN });
    try {
      // console.log('params ',params)
      const response = await axios.post(guest_ordet_url, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          // "Authorization": "Bearer ".concat(token)
        },
      });
      const responses = response.data;
      // console.log('plaACE setOrderGuest ',responses)
      if (responses.success == 1) {
        dispatch({ type: PLACE_ORDER_SUCCESS, payload: responses });
        return responses;
      } else {
        dispatch({ type: PLACE_ORDER_ERROR });
      }
    } catch (error) {
      console.log("plaACE error ", error);
      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };

  // get my order list
  const getOrdersList = async (token) => {
    try {
      const response = await axios.post(
        get_ordet_url,
        {},
        {
          headers: {
            Accept: "application/x.uniform.v1+json",
            Authorization: "Bearer ".concat(token),
          },
        }
      );
      const responses = response.data;
      if (responses.success == 1) {
        dispatch({ type: GET_ORDER_SUCCESS, payload: responses.records });
        console.log("orderstatus", responses.success);
      }
    } catch (error) {
      console.log("plaACE error ", error);

      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };

  //specifice order
  const getSpecificOrderDetails = async (token) => {
    try {
      const response = await axios.post(
        get_ordet_url,
        {},
        {
          headers: {
            Accept: "application/x.uniform.v1+json",
            Authorization: "Bearer ".concat(token),
          },
        }
      );
      const responses = response.data;
      // console.log('plaACE setOrderGuest ',responses)
      if (responses.success == 1) {
        dispatch({ type: GET_ORDER_SUCCESS, payload: responses.records });
      }
    } catch (error) {
      console.log("plaACE error ", error);

      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };

  // get sinle order
  const getSingleOrderDetails = async (params, token) => {
    try {
      const response = await axios.get(get_order_details_url.concat(params), {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(token),
        },
      });
      const responses = response.data;
      if (responses.success == 1) {
        dispatch({ type: GET_SINGLE_ORDER_DETILS, payload: responses.records });
        // localStorage.setItem("exprodetails", JSON.stringify(responses.records));
      }
    } catch (error) {
      console.log("plaACE error ", error);

      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };
  const returnOrder = async (params, token) => {
    try {
      const response = await axios.post(return_order_url, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(token),
        },
      });
      const responses = response.data;
      // console.log('plaACE setOrderGuest ',responses)
      if (responses.success == 1) {
        getOrdersList(token);
      }
      Notification("error", "Error!", responses.message + "");
    } catch (error) {
      console.log("return error ", error);

      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };

  const downloadInvocie = async (params) => {
    try {
      const response = await axios.post(download_invoice_url, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
        },
      });
      const responses = response.data;
      console.log("download invoice res ", responses);
      if (responses.success == 1) {
        if (isValidHttpUrl(responses.records)) {
          window.open(responses.records);
        } else {
          Notification("error", "Error!", "PDF URL IS NOT VALID");
        }
      } else {
        Notification("error", "Error!", responses.message + "");
      }
    } catch (error) {
      console.log("return error ", error);

      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };

  const createStoreIssue = async (params, token) => {
    try {
      const response = await axios.post(create_store_ticket, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(token),
        },
      });
      const responses = response.data;
      console.log("store res ", responses);
      if (responses.success == 1) {
        viewStoreissueList(token);
        Notification("success", "Success!", responses.message + "");
      } else {
        Notification("error", "Error!", responses.message + "");
      }
    } catch (error) {
      console.log("return error ", error);

      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };
  const viewStoreissueList = async (token) => {
    try {
      const response = await axios.post(
        store_ticket_view_url,
        {},
        {
          headers: {
            Accept: "application/x.uniform.v1+json",
            Authorization: "Bearer ".concat(token),
          },
        }
      );
      const responses = response.data;
      console.log("store res ", responses);
      if (responses.success == 1) {
        dispatch({ type: STORE_TICKERS_LIST, payload: responses.record });
      } else {
        Notification("error", "Error!", responses.message + "");
      }
    } catch (error) {
      console.log("return error ", error);

      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };

  // const getOrdersDetails = async (token) => {
  //   try {
  //     const response = await axios.post(
  //       get_ordet_url,
  //       {},
  //       {
  //         headers: {
  //           Accept: "application/x.uniform.v1+json",
  //           Authorization: "Bearer ".concat(token),
  //         },
  //       }
  //     );
  //     const responses = response.data;
  //     // console.log('plaACE setOrderGuest ',responses)
  //     if (responses.success == 1) {
  //       dispatch({ type: GET_ORDER_SUCCESS, payload: responses.records });
  //     }
  //   } catch (error) {
  //     console.log("plaACE error ", error);

  //     dispatch({ type: PLACE_ORDER_ERROR });
  //   }
  // };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        setOrder,
        setOrderGuest,
        getOrdersList,
        getSingleOrderDetails,
        returnOrder,
        downloadInvocie,
        createStoreIssue,
        viewStoreissueList,
        orderResponse,
      }}>
      {children}
    </OrderContext.Provider>
  );
};
// make sure use
export const useOrderContext = () => {
  return useContext(OrderContext);
};

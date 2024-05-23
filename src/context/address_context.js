import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/address_reducer";
import axios from "axios";
import {
  add_address_url,
  get_countries,
  get_cities,
  get_state,
  get_address,
  delete_address,
  edit_address_url,
} from "../utils/constants";

import {
  ADDRESS_BEGIN,
  ADDRESS_ADD_SUCCESS,
  ADDRESS_ERROR,
  ADDRESS_GET_SUCCESS,
  GET_COUNTRY,
  GET_STATES,
  GET_CITY,
} from "../actions";

// use for login data management
const initialState = {
  //Home page api initial state
  loading: false,
  add_address_res: {},
  get_address_data: [],
  get_countrylist: [],
  get_statelist: [],
  get_citylist: [],
};
const AddressContext = createContext();
export const AddressProvider = ({ children }) => {
  //calling use Auth from Auth0
  const [state, dispatch] = useReducer(reducer, initialState);
  //address add
  const addAddress = async (params) => {
    const token = JSON.parse(localStorage.getItem("token"));

    dispatch({ type: ADDRESS_BEGIN });
    try {
      console.log("params ", params);
      const response = await axios.post(add_address_url, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(token),
        },
      });
      const logindata = response.data;
      if (logindata.success == 1) {
        dispatch({ type: ADDRESS_ADD_SUCCESS, payload: logindata });
        getAddress(token);
      } else {
        dispatch({ type: ADDRESS_ERROR });
      }
    } catch (error) {
      dispatch({ type: ADDRESS_ERROR });
    }
  };
  // edit address
  const editAddress = async (params) => {
    const token = JSON.parse(localStorage.getItem("token"));

    dispatch({ type: ADDRESS_BEGIN });
    try {
      console.log("params ", params);
      const response = await axios.post(edit_address_url, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(token),
        },
      });
      const logindata = response.data;
      if (logindata.success == 1) {
        dispatch({ type: ADDRESS_ADD_SUCCESS, payload: logindata });
        getAddress(token);
      } else {
        dispatch({ type: ADDRESS_ERROR });
      }
    } catch (error) {
      dispatch({ type: ADDRESS_ERROR });
    }
  };
  // delete addreass
  const deleteAddress = async (params) => {
    const token = JSON.parse(localStorage.getItem("token"));

    dispatch({ type: ADDRESS_BEGIN });
    try {
      console.log("params ", params);
      const response = await axios.post(delete_address, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(token),
        },
      });
      const logindata = response.data;
      if (logindata.success == 1) {
        // dispatch({ type: ADDRESS_ADD_SUCCESS, payload: logindata });
        getAddress(token);
      } else {
        dispatch({ type: ADDRESS_ERROR });
      }
    } catch (error) {
      dispatch({ type: ADDRESS_ERROR });
    }
  };

  const getAddress = async (token) => {
    dispatch({ type: ADDRESS_BEGIN });
    try {
      const response = await axios.get(get_address, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(token),
        },
      });
      console.log("token", token);
      const addresslist = response.data;

      if (addresslist.success == 1) {
        dispatch({ type: ADDRESS_GET_SUCCESS, payload: addresslist.message });
      }
    } catch (error) {
      dispatch({ type: ADDRESS_ERROR });
    }
  };

  const getCountries = async () => {
    dispatch({ type: ADDRESS_BEGIN });
    try {
      const response = await axios.post(
        get_countries,
        {},
        {
          headers: {
            Accept: "application/x.uniform.v1+json",
          },
        }
      );
      const countryList = response.data;
      if (countryList.success == 1) {
        dispatch({ type: GET_COUNTRY, payload: countryList.message });
      }
    } catch (error) {
      dispatch({ type: ADDRESS_ERROR });
    }
  };

  const getStates = async (params) => {
    dispatch({ type: ADDRESS_BEGIN });
    try {
      const response = await axios.post(get_state, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
        },
      });
      const statelist = response.data;

      if (statelist.success == 1) {
        dispatch({ type: GET_STATES, payload: statelist.message });
      }
    } catch (error) {
      dispatch({ type: ADDRESS_ERROR });
    }
  };
   const getCities = async (params) => {
     dispatch({ type: ADDRESS_BEGIN });
     try {
       const response = await axios.post(get_cities, params, {
         headers: {
           Accept: "application/x.uniform.v1+json",
         },
       });
       const cityList = response.data;
       if (cityList.success == 1) {
         dispatch({ type: GET_CITY, payload: cityList.message });
       }
     } catch (error) {
       dispatch({ type: ADDRESS_ERROR });
     }
   };
  return (
    <AddressContext.Provider
      value={{
        ...state,
        addAddress,
        editAddress,
        getCountries,
        getStates,
        getCities,
        getAddress,
        deleteAddress,
      }}>
      {children}
    </AddressContext.Provider>
  );
};
// make sure use
export const useAddressContext = () => {
  return useContext(AddressContext);
};

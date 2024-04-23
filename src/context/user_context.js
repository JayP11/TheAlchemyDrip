import React, { useContext, useEffect, useReducer } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import reducer from "../reducers/user_reducer";
import axios from "axios";
import {
  get_customer_details_url,
  update_customer_details_url,
} from "../utils/constants";
import Notification from "../utils/Notification";

import {
  GET_LOGIN_BEGIN,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_ERROR,
  LOGOUT_USER,
  GET_USER_DETAILS,
  EDIT_USER_DETAILS,
} from "../actions";

//get from local storage at the time of initializing
const getLocalStorage = () => {
  let logindata = localStorage.getItem("logindata");
  // console.log("logindata -----", logindata);
  if (logindata) {
    return JSON.parse(localStorage.getItem("logindata"));
  } else {
    return {};
  }
};
const getLoginState = () => {
  let islogin = localStorage.getItem("islogin");
  if (islogin) {
    return JSON.parse(localStorage.getItem("islogin"));
  } else {
    return false;
  }
};

const getUserId = () => {
  let userid = localStorage.getItem("userid");
  if (userid) {
    return JSON.parse(localStorage.getItem("userid"));
  } else {
    return 0;
  }
};

const getToken = () => {
  let userid = localStorage.getItem("token");
  if (userid) {
    // return JSON.parse(localStorage.getItem("token"));
  } else {
    return 0;
  }
};
// use for login data management
const initialState = {
  //Home page api initial state
  login_loading: false,
  login_error: false,
  logindata: getLocalStorage(),
  isLogin: getLoginState(),
  logintoken: getToken(),
  userid: getUserId(),
};
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  //calling use Auth from Auth0
  const [state, dispatch] = useReducer(reducer, initialState);

  //login
  const setLogin = async (params, url) => {
    dispatch({ type: GET_LOGIN_BEGIN });
    try {
      const response = await axios.post(url, params, {
        headers: {
          Accept: "application/x.uniform.v1+json",
        },
      });
      const logindata = response.data;
      console.log("logindata", logindata);
      if (logindata.success == 1) {
        dispatch({ type: GET_LOGIN_SUCCESS, payload: logindata });
        localStorage.setItem("logindata", JSON.stringify(logindata.user));
        localStorage.setItem("islogin", JSON.stringify(true));
        localStorage.setItem("userid", JSON.stringify(logindata.user.id));
        localStorage.setItem("token", JSON.stringify(logindata.token));
      } else {
        alert(logindata.message + "");
        // Notification("error", "Error!", logindata.message + "");
        dispatch({ type: GET_LOGIN_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_LOGIN_ERROR });
    }
  };

  const getUserDetails = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    dispatch({ type: GET_LOGIN_BEGIN });
    try {
      const response = await axios.post(
        get_customer_details_url,
        {},
        {
          headers: {
            Accept: "application/x.uniform.v1+json",
            Authorization: "Bearer ".concat(token),
          },
        }
      );
      const logindata = response.data;
      if (logindata.success == 1) {
        dispatch({ type: GET_USER_DETAILS, payload: logindata.record });
        localStorage.setItem("logindata", JSON.stringify(logindata.record));
      } else {
        dispatch({ type: GET_LOGIN_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_LOGIN_ERROR });
    }
  };

  // update user profile
  const updateUserDetails = async (params) => {
    const token = JSON.parse(localStorage.getItem("token"));
    dispatch({ type: GET_LOGIN_BEGIN });
    try {
      const response = await axios.post(update_customer_details_url, params, {
        headers: {
          // Accept: "application/x.mm.v1+json",
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(token),
        },
      });
      const logindata = response.data;
      if (logindata.success == 1) {
        getUserDetails(token);
      }
    } catch (error) {
      dispatch({ type: GET_LOGIN_ERROR });
    }
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    localStorage.setItem("logindata", "");
    localStorage.setItem("islogin", "");
    localStorage.setItem("userid", "");
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setLogin,
        logoutUser,
        getUserDetails,
        updateUserDetails,
      }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};

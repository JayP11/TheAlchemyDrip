import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/home_reducer";
import { get_category as urll, home_url as url } from "../utils/constants";
import {
  GET_HOME_CATEGORY_BEGIN,
  GET_HOME_CATEGORY_ERROR,
  GET_HOME_CATEGORY_SUCCESS,
  GET_HOME_DATA_BEGIN,
  GET_HOME_DATA_ERROR,
  GET_HOME_DATA_SUCCESS,
} from "../actions";

const initialState = {
  //Home page api initial state
  home_loading: false,
  home_error: false,
  homeData: [],
  categories: [],
  home_slider: [],
  occassions: [],
  category: [],
};

const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
  //using reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch all product api
  const fetchProducts = async (url) => {
    dispatch({ type: GET_HOME_DATA_BEGIN });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/x.uniform.v1+json",
        },
      });
      const homeData = response.data;
      console.log("hom", homeData);
      dispatch({ type: GET_HOME_DATA_SUCCESS, payload: homeData });
    } catch (error) {
      dispatch({ type: GET_HOME_DATA_ERROR });
    }
    // const response = await axios.get(url);
  };
  const fetchCategories = async (urll) => {
    dispatch({ type: GET_HOME_CATEGORY_BEGIN });
    try {
      const response = await axios.get(urll, {
        headers: {
          Accept: "application/x.uniform.v1+json",
        },
      });
      const homeData = response.data;
      // console.log("homeData123", homeData);
      dispatch({ type: GET_HOME_CATEGORY_SUCCESS, payload: homeData });
    } catch (error) {
      dispatch({ type: GET_HOME_CATEGORY_ERROR });
    }
    // const response = await axios.get(url);
  };

  //use effect to fire function when site loads
  useEffect(() => {
    fetchProducts(`${url}`);
    fetchCategories(`${urll}`);
  }, []);

  return (
    <HomeContext.Provider value={{ ...state }}>{children}</HomeContext.Provider>
  );
};
// make sure use
export const useHomeContext = () => {
  return useContext(HomeContext);
};

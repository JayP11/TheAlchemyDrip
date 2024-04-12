import {
  GET_HOME_CATEGORY_BEGIN,
  GET_HOME_CATEGORY_ERROR,
  GET_HOME_CATEGORY_SUCCESS,
  GET_HOME_DATA_BEGIN,
  GET_HOME_DATA_ERROR,
  GET_HOME_DATA_SUCCESS,
} from "../actions";

const home_reducer = (state, action) => {
  //all home data
  if (action.type === GET_HOME_DATA_BEGIN) {
    return { ...state, home_loading: true };
  }
  if (action.type === GET_HOME_DATA_SUCCESS) {
    return {
      ...state,
      home_loading: false,
      products: action.payload,
      categories: action.payload.records.browse_category,
      home_slider: action.payload.records.slider,
    };
  }
  if (action.type === GET_HOME_DATA_ERROR) {
    return { ...state, home_loading: false, home_error: true };
  }

  if (action.type === GET_HOME_CATEGORY_BEGIN) {
    return { ...state, home_loading: true };
  }
  if (action.type === GET_HOME_CATEGORY_SUCCESS) {
    return {
      ...state,
      home_loading: false,
      category: action.payload.records,
    };
  }
  if (action.type === GET_HOME_CATEGORY_ERROR) {
    return { ...state, home_loading: false, home_error: true };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default home_reducer;

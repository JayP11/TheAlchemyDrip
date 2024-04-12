
import {
  ADDRESS_BEGIN,
  ADDRESS_ADD_SUCCESS,
  ADDRESS_ERROR,
  ADDRESS_GET_SUCCESS,
  GET_COUNTRY,
  GET_STATES
} from "../actions";

const address_reducer = (state, action) => {
  //all home data
  if (action.type === ADDRESS_BEGIN) {
    return { ...state, loading: true };
  }
  if (action.type === ADDRESS_ADD_SUCCESS) {
    return {
      ...state,
      loading: false,
      add_address_res: action.payload,
     
    };
  }
  if (action.type === GET_COUNTRY) {
    return {
      ...state,
      loading: false,
      get_countrylist: action.payload,
     
    };
  }
  if (action.type === GET_STATES) {
    return {
      ...state,
      loading: false,
      get_statelist: action.payload,
     
    };
  }
  if (action.type === ADDRESS_GET_SUCCESS) {
    return {
      ...state,
      loading: false,
      get_address_data: action.payload,
     
    };
  }
  
  if (action.type === ADDRESS_ERROR) {
    return { ...state, loading: false, };
  }
  
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default address_reducer;

import {
  PLACE_ORDER_BEGIN,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  GET_ORDER_SUCCESS,
  GET_SINGLE_ORDER_DETILS,
  STORE_TICKERS_LIST,
  RE_ORDER_PRODUCT,
} from "../actions";

const place_order_reducer = (state, action) => {
  //all home data
  if (action.type === PLACE_ORDER_BEGIN) {
    return { ...state, login_loading: true };
  }
  if (action.type === PLACE_ORDER_SUCCESS) {
    return {
      ...state,
      login_loading: false,
      order_data: action.payload,
    };
  }
  if (action.type === GET_ORDER_SUCCESS) {
    return {
      ...state,
      login_loading: false,
      my_order_list: action.payload,
    };
  }
  if (action.type === GET_SINGLE_ORDER_DETILS) {
    return {
      ...state,
      login_loading: false,
      single_order_details: action.payload,
    };
  }
  if (action.type === STORE_TICKERS_LIST) {
    return {
      ...state,
      login_loading: false,
      store_ticket_list: action.payload,
    };
  }
  if (action.type === PLACE_ORDER_ERROR) {
    return { ...state, login_loading: false };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default place_order_reducer;

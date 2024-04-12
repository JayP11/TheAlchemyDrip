import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  MALL_SIGNUP_FAIL,
  MALL_SIGNUP_SUCCESS,
  MALL_SIGNUP_BEGIN,
  GET_SINGLE_PRODUCT_BEGIN1,
  GET_SINGLE_PRODUCT_SUCCESS1,
  GET_SINGLE_PRODUCT_ERROR1,
} from "../actions";

const products_reducer = (state, action) => {
  //sidebar
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  //all product
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    const trending_products = action.payload.filter(
      (product) => product.tranding === true
    );

    if (action.type === MALL_SIGNUP_BEGIN) {
      return { ...state, mall_signup_loading: true };
    }

    if (action.type === MALL_SIGNUP_SUCCESS) {
      console.log("logggggg", action.payload);
      return {
        ...state,
        mall_signup_loading: false,
        mall_signup_data: action.payload,
      };
    }

    if (action.type === MALL_SIGNUP_FAIL) {
      return { ...state, mall_signup_loading: false, mall_signup_error: true };
    }
    return {
      ...state,
      products_loading: true,
      products: action.payload,
      featured_products,
      trending_products,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, product_loading: false, produts_error: true };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, produts_error: true };
  }
  //single product
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
      // defulte_size: action.payload.details[0].size_name,
      // inver_index: action.payload.details[0].inventory,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  //single product details
  if (action.type === GET_SINGLE_PRODUCT_BEGIN1) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS1) {
    return {
      ...state,
      single_product_loading: false,
      single_product1: action.payload,
      // defulte_size: action.payload.details[0].size_name,
      // inver_index: action.payload.details[0].inventory,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR1) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;

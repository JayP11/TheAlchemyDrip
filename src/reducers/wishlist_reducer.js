import {
  GET_WISHLIST,
  LOAD_PRODUCTS_WISHLIST,
  ADD_TO_WISHLIST_BEGIN,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_ERROR,
  GET_WISHLIST_BEGIN,
  GET_WISHLIST_ERROR,
  GET_WISHLIST_SUCCESS,
} from "../actions";

const wishlist_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS_WISHLIST) {
    return {
      ...state,
      all_products: [...action.payload],
      // wishlist_product: [...action.payload],
    };
  }
  if (action.type === GET_WISHLIST) {
    const { all_products } = state;
    let tempProducts = [...all_products];
    tempProducts = tempProducts.filter((product) => product.is_wishlist);

    return { ...state, wishlist_product: tempProducts };
  }

  //all Wishlist product
  if (action.type === GET_WISHLIST_BEGIN) {
    return { ...state, loading: true };
  }
  if (action.type === GET_WISHLIST_SUCCESS) {
    return {
      ...state,
      loading: true,
      wishlist_product: action.payload,
    };
  }
  if (action.type === GET_WISHLIST_ERROR) {
    return { ...state, loading: false };
  }
  // add to wishlist reducer
// if (action.type === ADD_TO_WISHLIST) {

  //   const  singleProduct  = action.payload;

  //   return { ...state, wishlist_product: [...state.wishlist_product, singleProduct] }

  // }

  if (action.type === ADD_TO_WISHLIST_BEGIN) {
    return { ...state, loading: true };
  }
  if (action.type === ADD_TO_WISHLIST_SUCCESS) {
    return {
      ...state,
      loading: false,
      wishlist_product: action.payload,
    };
  }

  if (action.type === ADD_TO_WISHLIST_ERROR) {
    return { ...state, loading: false };
  }

  // remove from cart reducer
  // if (action.type === REMOVE_WISHLIST) {
  //   const tempCart = state.wishlist_product.filter((item) => item.id !== parseInt(action.payload));
  //   return { ...state, wishlist_product: tempCart };

  // }

  return state;
};

export default wishlist_reducer;

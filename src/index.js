import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { HomeProvider } from "./context/home_context";
import { WishlistProvider } from "./context/wishlist_context";
import { OrderProvider } from "./context/place_order_context";
import { AddressProvider } from "./context/address_context";
 
ReactDOM.render(
  <HomeProvider>
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <WishlistProvider>
            <CartProvider>
              <OrderProvider>
                <AddressProvider>
                  <App />
                </AddressProvider>
              </OrderProvider>
            </CartProvider>
          </WishlistProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </HomeProvider>,
  document.getElementById("root")
);

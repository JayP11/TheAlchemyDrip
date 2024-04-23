import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, NavbarHome } from "./components";

import {
  Home,
  About,
  Cart,
  Checkout,
  Products,
  SingleProduct,
  Error,
  PrivateRoute,
  ContactUs,
  AuthWrapper,
  Wishlist,
  MyProfile,
  PrivacyPolicy,
  TermsCondition,
  ShippingDeliveryPolicy,
} from "./pages";
import CancellationRefund from "./pages/CancellationRefund";
import ProductsPage from "./pages/ProductsPage";
import ProPage from "./pages/ProPage";
import ExchangeReturnPg from "./pages/ExchangeReturnPg";
import ExchangeReturnDetails from "./pages/ExchangeReturnDetails";
import ExchangeReturnPolicy from "./pages/exchangeReturnPolicy/ExchangeReturnPolicy";

function App() {
  return (
    <AuthWrapper>
      <Router basename={"/TheAlchemyDrip"}>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            {/* <NavbarHome /> */}
            <Home />
          </Route>
          <Route exact path="/about">
            {/* <Navbar /> */}
            <NavbarHome />
            <About />
          </Route>
          <Route exact path="/contactus">
            {/* <Navbar /> */}
            <NavbarHome />
            <ContactUs />
          </Route>
          <Route exact path="/cart">
            {/* <Navbar /> */}
            <NavbarHome />
            <Cart />
          </Route>
          <Route exact path="/wishlist">
            {/* <Navbar /> */}
            <NavbarHome />
            <Wishlist />
          </Route>
          <Route exact path="/checkout">
            {/* <Navbar /> */}
            <NavbarHome />
            <Checkout />
          </Route>
          <Route exact path="/products">
            <NavbarHome />
            <Products />
          </Route>
          <Route exact path="/ExchangeReturnPg">
            <NavbarHome />
            <ExchangeReturnPg />
          </Route>
          <Route exact path="/ExchangeReturnDetails">
            <NavbarHome />
            <ExchangeReturnDetails />
          </Route>
          <PrivateRoute exact path="/MyProfile">
            {/* <Navbar /> */}
            <NavbarHome />
            <MyProfile />
          </PrivateRoute>
          <Route exact path="/PrivacyPolicy">
            {/* <Navbar /> */}
            <NavbarHome />
            <PrivacyPolicy />
          </Route>
          <Route exact path="/TermsCondition">
            {/* <Navbar /> */}
            <NavbarHome />
            <TermsCondition />
          </Route>
          <Route exact path="/CancellationRefund">
            <Navbar />
            <CancellationRefund />
          </Route>
          <Route exact path="/ShippingDeliveryPolicy">
            <Navbar />
            <ShippingDeliveryPolicy />
          </Route>
          <Route exact path="/ExchangeReturnPolicy">
            <NavbarHome />
            <ExchangeReturnPolicy />
          </Route>
          <Route exact path="/Propage/:id">
            {/* <Navbar /> */}
            <NavbarHome />
            <ProPage />
          </Route>

          {/* <Route exact path="/MyProfile">
            <Navbar />
            <MyProfile />
          </Route> */}
          <Route
            exact
            path="/products/:id/abc/:idd"
            children={<SingleProduct />}>
            {/* <Navbar /> */}
          </Route>
          <Route exact path="*">
            {/* <Navbar /> */}
            <NavbarHome />
            <Error />
          </Route>
          {/* </Route> */}
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;

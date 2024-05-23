import React, { useEffect } from "react";
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
import ProPage from "./pages/ProPage";
import ExchangeReturnPg from "./pages/ExchangeReturnPg";
import ExchangeReturnDetails from "./pages/ExchangeReturnDetails";
import ExchangeReturnPolicy from "./pages/exchangeReturnPolicy/ExchangeReturnPolicy";
import Cookies from "js-cookie";

function App() {
  useEffect(() => {
    const clearCookiesForPath = (path) => {
      const allCookies = Cookies.get(); // Get all cookies
      for (let cookieName in allCookies) {
        Cookies.remove(cookieName, { path }); // Remove each cookie for the specific path
      }
    };

    clearCookiesForPath("https://theAlchemydripuniforms.com/");
  }, []);

  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });

  return (
    <AuthWrapper>
      <Router>
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
            <NavbarHome />
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

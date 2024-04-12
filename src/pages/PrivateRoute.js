import React from "react";
import { Route, Redirect, Router } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { isLogin, logintoken,logindata } = useUserContext();

  window.scrollTo(0, 0)
  console.log(children);
  console.log(rest); 
  //check user have logged in or not not from user context but auth0
  return (
    <Route
      {...rest}
      render={() => {
        return isLogin ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;

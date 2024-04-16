import React, { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaUserPlus,
  FaRegUser,
  FaSignOutAlt,
  FaUserCircle,
  FaExchangeAlt,
  FaRegHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import LoginModule from "./LoginModule";

const CartButtons = () => {
  const [showscreen, setShowlogin] = useState();
  const { isLogin, logoutUser } = useUserContext();

  //getting state from sidebar reducer for open and close
  const { closeSideBar } = useProductsContext();
  const { total_items } = useCartContext();
// aliasgargandhi00@gmail.com
  //123456

  useEffect(() => {
    if (isLogin) {
      setShowlogin(false);
    }
  }, [isLogin]);

  const setSignOut = () => {
    logoutUser();
    closeSideBar();
  };

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSideBar}>
        <span className="cart-container">
          <FaShoppingCart style={{ color: "black" }} />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {/* <button type="button" className="auth-btn">
        <FaSistrix />
      </button> */}
      {/* {isLogin ? (
        <Link to="/ExchangeReturnPg" className="cart-btn">
          <span className="cart-container">
            <FaExchangeAlt style={{ color: "black" }} />
          </span>
        </Link>
      ) : (
        ""
      )} */}
      {/* {isLogin ? (
        <Link to="/wishlist" className="cart-btn" onClick={closeSideBar}>
          <span className="cart-container">
            <FaRegHeart style={{ color: "black" }} />
          </span>
        </Link>
      ) : (
        ""
      )} */}

      {/* {isLogin?<button type="button" className="auth-btn" onClick={() => setSignOut()} >
        <FaSignOutAlt />
      </button>:''} */}
      {isLogin ? (
        <div className="dropdown" style={{ overflow: "visible" }}>
          <FaRegUser className="FaRegUser_icon" />
          <div className="dropdown-content dropdown_content_position">
            <Link to="/MyProfile" onClick={closeSideBar}>
              <FaUserCircle /> My Account
            </Link>

            <Link to="" onClick={() => setSignOut()}>
              <FaSignOutAlt /> Logout
            </Link>
          </div>
        </div>
      ) : (
        /* <div className="auth-btn dropdown">
          <FaRegUser className="FaRegUser_icon" />
          <ul>
            <div>
              <Link to="/MyProfile">
                <FaUserCircle /> My Account
              </Link>
            </div>
            <li>
              <Link to="" onClick={() => setSignOut()}>
                <FaSignOutAlt /> Logout
              </Link>
            </li>
          </ul>
        </div> */
        <></>
      )}
      <LoginModule showscreen={showscreen} setShowlogin={setShowlogin} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  align-items: center;
  ${"" /* gap: 20px; */}
  width: 225px;

  .FaRegUser_icon {
    font-size: 1.5rem;
    position: relative;
  }
  .dropdown_content_position {
    right: 10px;
  }
  .cart-btn {
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-orange);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-black);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .dropdown ul {
    border-radius: 15px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 31%);
    height: auto;
    left: auto;
    right: 8%;
    position: absolute;
    top: 60px;
    width: 200px;
    background-color: #fff;
    z-index: 999;
    display: flex;
    flex-direction: column;
    text-align: left;
    opacity: ;
    visibility: hidden;
    transition: all 0.5s ease;
    li {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      border-top: 1px solid #d2d2d2;
      padding: 10px 0 10px 10px;
      a {
        font-size: 18px;
        display: flex;
        align-items: center;
        ${"" /* color: #b1b1b1; */}
        color: #111;
        font-weight: 300;
        svg {
          margin-right: 5px;
        }
      }
    }
  }
  .dropdown:hover ul {
    opacity: 1;
    visibility: visible;
  }
  @media (max-width: 991px) {
    .dropdown_content_position {
      left: 56px;
      width: 100px;
    }
    .FaRegUser_icon {
      font-size: 24px;
    }
    span.cart-container svg {
      fill: #000;
      color: #000 !important;
    }
    svg {
      fill: #000;
      olor: #000 !important;
    }
    display: flex;
    justify-content: space-between;
    grid-template-columns: unset !important;
    align-items: center;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0px !important;
    a.cart-btn:first-child {
      margin-right: 15px;
    }
    button.auth-btn.dropdown {
      position: relative;
    }
    .dropdown ul {
      left: unset !important;
      right: -150px !important;
    }
  }
  @media (max-width: 767px) {
    svg {
      fill: #000;
      color: #000 !important;
    }
  }
  .login-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .login-6 {
    flex: 0 0 50%;
    max-width: 40%;
  }
  .login-img {
    text-align: center;
  }
  .login-img img {
    max-width: 100%;
  }
  .login-form img {
    max-width: 220px;
  }
  .login-form h2 {
    margin: 7px 0 15px 0;
    font-size: 29px;
    letter-spacing: 0.1em;
    color: #000;
  }
  .login-form p {
    max-width: 95%;
    letter-spacing: 0.1em;
    margin: 0 0 25px 0;
  }
  .login-form form .input-row {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 350px;
    width: 100%;
    padding: 5px 0 10px 60px;
    background: #e5eaea;
    border-radius: 5px;
    margin: 0 0 20px 0;
    transition: all 0.5s ease;
  }
  .show.login-screen {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .login-form form .input-row svg {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: #b1b1b1;
    font-size: 20px;
  }
  .login-form form .input-row label {
    font-size: 15px;
  }
  .login-form form .input-row input {
    background: transparent;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    color: #444;
  }
  .login-form form .input-row:focus,
  .login-form form .input-row:hover {
    background: #ffffff;
    box-shadow: 0px 0px 8px 2px rgb(25 25 25/0.2);
    transition: all 0.5s ease;
  }
  .login-form ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 350px;
  }
  .login-form ul a {
    font-size: 12px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #969696;
    font-weight: 400;
  }
  .login-form ul a svg {
    margin-right: 5px;
    color: #969696;
    font-size: 15px;
  }
  .login-form ul a.show svg {
    color: #5e9c6f;
  }
  .login-button {
    padding: 15px 0 20px 0;
  }
  .login-button button {
    border: none;
    background: transparent;
    border-radius: 182px;
    padding: 14px 25px 14px;
    letter-spacing: 0.1em;
    color: #000;
    box-shadow: 0px 0px 8px 0px rgb(0 0 0/0.2);
    margin-right: 20px;
    font-size: 14px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .login-button button.btn-login {
    ${"" /* background: var(--clr-heading-main); */}
    color: var(--clr-primary-1);
    transition: all 0.5s ease;
  }
  .login-button button.btn-login:hover {
    background: #fff;
    color: #000;
    transition: all 0.5s ease;
  }
  .login-button button:hover {
    ${"" /* background: var(--clr-heading-main); */}
    background: var(--clr-primary-indianred);
    color: var(--clr-primary-1);
    transition: all 0.5s ease;
  }
  .social-icon {
    padding: 10px 0 0 0;
  }
  .social-icon span {
    font-size: 13px;
  }
  .social-icon ul {
    justify-content: unset !important;
    margin: 5px 0 0 0;
  }
  .social-icon ul li {
    margin-right: 7px;
    background: #fff;
    box-shadow: 0px 0px 12px 0px rgb(0 0 0/0.2);
    border-radius: 100px;
    padding: 8px 10px 4px 10px;
    cursor: pointer;
  }
  .social-icon ul li svg {
    font-size: 16px;
  }
  .login-screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15555;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    transition: all 0.5s ease;
    opacity: 0;
    visibility: hidden;
  }
  .login-screen .login-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0 0 0/ 0.4);
    cursor: pointer;
  }
  .login-screen .loging-container {
    position: relative;
    z-index: 155;
    background: #fff;
    max-width: 1190px;
    padding: 40px 0 40px 0;
    margin: 0 auto;
    border-radius: 10px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0/0.2);
    width: 30px;
    text-align: center;
    padding: 5px 2px 1px 2px;
    border-radius: 100px;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    .login-row {
      flex-direction: column-reverse;
    }
    .login-row .login-6 {
      max-width: 100%;
      flex: 0 0 100%;
      padding: 0 30px;
    }
    .loging-container {
      overflow-y: scroll;
      height: 100%;
    }
  }

  @media screen and (max-width: 1400px) {
    .dropdown ul {
      right: 0;
    }
  }
`;
export default CartButtons;

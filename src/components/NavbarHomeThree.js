import React, { useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValuesHome, formatPrice } from "../utils/helpers";

const NavbarHome3 = () => {
  const { updateFilters, all_products } = useFilterContext();
  const categories = getUniqueValuesHome(all_products, "category");
  const occasions = getUniqueValuesHome(all_products, "occasion");
  const { isLogin, logindata } = useUserContext();

  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  //getting state from sidebar reducer for open and close
  const { openSideBar } = useProductsContext();

  return (
    <NavContainer className={scrolled ? "scrolled" : ""}>
      <div className="nav-center">
        <div className="nav-header">
          <button type="button" className="nav-toggle" onClick={openSideBar}>
            <FaBars />
          </button>
          <Link to="/"></Link>
          <div className="nav-toggle right-cart">
            <CartButtons />
          </div>
        </div>
        <CartButtons />
        <ul className="nav-links">
          <li>
            {/* <Link className="men-link" to="/products">
              Shop
            </Link> */}
            <div className="sub-menu" aria-hidden="true">
              <div className="MegaMenu__Inner">
                <div className="MegaMenu__Item">
                  <div className="MegaMenu__Push">
                    <div
                      className="MegaMenu__img"
                      // style={{ backgroundImage: `url(${background})` }}
                    >
                      {/* <p className="MegaMenu__PushHeading">
                        View All <FaArrowRight />
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="MegaMenu__Item">
                  <a href="#" className="megamenu_title">
                    Shop by Category
                  </a>
                  <div className="col-md-4">
                    <ul>
                      {categories.map((c, index) => {
                        return (
                          <li key={index}>
                            <Link
                              to={`/products`}
                              onClick={updateFilters}
                              type="button"
                              name="category"
                              value={c}>
                              {c}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="MegaMenu__Item">
                  <a href="#" className="megamenu_title">
                    Shop by Occasion
                  </a>
                  <div className="col-md-4">
                    <ul>
                      {occasions.map((c, index) => {
                        return (
                          <li key={index}>
                            <Link
                              to={`/products`}
                              onClick={updateFilters}
                              type="button"
                              name="occasion"
                              value={c}>
                              {c}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="MegaMenu__Item">
                  <div className="MegaMenu__Push">
                    <div
                      className="MegaMenu__img"
                      // style={{ backgroundImage: `url(${background})` }}
                    >
                      {/* <p className="MegaMenu__PushHeading">
                        View All <FaArrowRight />
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {isLogin && (
            <li>
              <Link to="/checkout">Check Out</Link>
            </li>
          )}
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  z-index: 155;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  transition: all 0.5s ease;
  :hover {
    background: var(--clr-white);
    transition: all 0.5s ease;
    a {
      color: var(--clr-black) !important;
      transition: all 0.5s ease;
    }
    .auth-btn {
      color: var(--clr-black) !important;
      transition: all 0.5s ease;
    }
    .cart-btn {
      color: var(--clr-black) !important;
      transition: all 0.5s ease;
    }
  }

  .nav-center {
    width: 100vw;
    margin: 0 auto;
    max-width: 100%;
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 20px;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    ${"" /* margin-bottom:0px; */}
    display: none;
  }
  .cart-btn-wrapper {
    gap: 20px;
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      margin: 30px 0px !important;
      position: relative;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      flex: 0 0 100%;
      max-width: 100%;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-white);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        border-bottom: 2px solid transparent;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
      position: absolute;
      right: 0;
      top: 15px;
    }
  }
  @media (max-width: 991px) {
    .nav-header {
      justify-content: space-between;
      width: 100%;
      padding: 0 25px !important;
    }
    .nav-header img {
      margin: 10px 0 0 0;
    }
    span.cart-container svg {
      fill: #000;
      color: #000 !important;
    }
    .sub-menu {
      display: none !important;
    }
  }
  @media (max-width: 767px) {
    .nav-header {
      max-width: 100%;
      justify-content: space-between;
      width: 100%;
      padding: 0 22px;
    }
    .nav-header img {
      margin: 0px !important;
    }
    .nav-center {
      padding-top: 10px;
    }
    span.cart-container svg {
      fill: #000;
      olor: #000 !important;
    }
  }
  // Sub Menu Css
  .sub-menu {
    flex: 0 0 100%;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    background: #fff;
    padding: 30px 0 0 0;
    z-index: 10;
  }
  a.men-link {
    border: none !important;
  }
  .nav-links li a.men-link {
    position: relative;
  }
  .nav-links li:hover a.men-link:after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 0;
    right: 0;
    border-bottom: 2px solid var(--clr-primary-7);
    z-index: 15;
  }
  .MegaMenu__Inner {
    display: flex;
    justify-content: center;
  }
  .MegaMenu__Inner .MegaMenu__Item:first-child {
    margin-right: auto;
    flex: 0 0 35%;
  }
  .MegaMenu__Inner .MegaMenu__Item:last-child {
    flex: 0 0 35%;
  }
  .MegaMenu__Push {
    display: flex;
    height: 100%;
  }
  .MegaMenu__img {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .MegaMenu__Inner .MegaMenu__Item {
    flex: 0 0 13%;
  }
  .MegaMenu__Inner .MegaMenu__Item a.megamenu_title {
    font-size: 18px;
    margin: 10px 0 15px 0;
    display: inline-block;
    padding: 0;
  }
  .MegaMenu__Inner .MegaMenu__Item ul {
    padding: 0;
    margin: 0;
  }
  .MegaMenu__Inner .MegaMenu__Item ul li {
    margin: 0 0 10px 0;
  }
  .MegaMenu__Inner .MegaMenu__Item ul li a {
    font-size: 14px;
    padding: 0;
  }
  .MegaMenu__img p.MegaMenu__PushHeading {
    width: 100%;
    text-align: center;
    justify-content: center;
    color: #fff;
    font-size: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .MegaMenu__img p.MegaMenu__PushHeading svg {
    margin: 0 0 0 10px;
  }
  // .sub-menu[aria-hidden="true"] {}
  .sub-menu {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
  }
  ul.nav-links li:hover .sub-menu {
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease;
  }
  @media screen and (max-width: 1200px) {
    .MegaMenu__Inner .MegaMenu__Item {
      flex: 0 0 18%;
    }
    .MegaMenu__Inner .MegaMenu__Item:first-child,
    .MegaMenu__Inner .MegaMenu__Item:last-child {
      flex: 0 0 30%;
    }
  }
  @media screen and (max-width: 1024px) {
    .MegaMenu__Inner .MegaMenu__Item {
      -webkit-flex: 0 0 19%;
      -ms-flex: 0 0 19%;
      flex: 0 0 19%;
    }
  }
  @media screen and (max-width: 991px) {
    .nav-header {
      justify-content: center !important;
      button.nav-toggle {
        position: absolute;
        left: 25px;
      }
    }
    .nav-toggle.right-cart {
      display: inline-block;
      width: 50px;
      position: absolute;
      right: 5px;
      .cart-btn-wrapper {
        display: flex;
        button.auth-btn {
          display: none;
        }
      }
    }
  }
`;

export default NavbarHome3;

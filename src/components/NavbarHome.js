import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IImages from "../constants/IImages";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";
import { useProductsContext } from "../context/products_context";

const NavbarHome = ({ getdrop }) => {
  const { openSideBar } = useProductsContext();
  const { isLogin, logindata } = useUserContext();
  const [getdata2, setdata2] = useState([]);

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
    // console.log("first, ", openSideBar);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  useEffect(() => {
    // fetchCategorieslist(`${urll}/${slug}`);
    prodatalist();
    // console.log("data are", mall_signup_data);
  }, []);

  const prodatalist = async () => {
    const datalist = await localStorage.getItem("productdata");
    setdata2(JSON.parse(datalist));
    // console.log("productdata", JSON.parse(datalist));
  };

  return (
    <NavContainer
      style={{
        background: "floralwhite",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      }}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              src={IImages.logo}
              alt=""
              style={{ height: "85px", width: "120px", objectFit: "contain" }}
            />
          </Link>
          <div className="nav-toggle nav_toggle_edit">
            <button
              type="button"
              onClick={openSideBar}
              style={{ background: "white", border: "none" }}>
              <FaBars />
            </button>
            {isLogin ? (
              <div className="dropdown">
                <Link className="nav-linkk nav_link_position_top">
                  Sections&nbsp;
                  <i className="fa fa-caret-down"></i>
                </Link>
                <div className="dropdown-content nav_link_position_bottom">
                  {getdata2 && getdata2.length > 0 ? (
                    getdata2.map((c, index) => {
                      return (
                        <>
                          <Link to={`/Propage/${c.slug}`}> {c.name}</Link>
                          {/* <Link
                        to={`/propage/${c.slug}`}
                        style={{ cursor: "pointer" }}
                        className="col-md-4"
                        key={index}
                        onClick={() => {
                          // setModal(true);
                        }}>
                        <div className="a">
                          <img
                            src={c.image_full_path}
                            alt=""
                            style={{ marginBottom: "0px !important" }}
                          />
                          <button type="button" name="category" value={c.name}>
                            {c.name}
                          </button>
                        </div>
                      </Link> */}
                        </>
                      );
                    })
                  ) : (
                    <p>No data found</p>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}

          {isLogin ? (
            <div className="dropdown">
              <Link className="nav-linkk">
                Sections&nbsp;
                <i className="fa fa-caret-down"></i>
              </Link>
              <div className="dropdown-content">
                {/* <div className="row"> */}
                {getdata2 && getdata2.length > 0 ? (
                  getdata2.map((c, index) => {
                    return (
                      <>
                        <Link to={`/Propage/${c.slug}`}> {c.name}</Link>
                        {/* <Link
                        to={`/propage/${c.slug}`}
                        style={{ cursor: "pointer" }}
                        className="col-md-4"
                        key={index}
                        onClick={() => {
                          // setModal(true);
                        }}>
                        <div className="a">
                          <img
                            src={c.image_full_path}
                            alt=""
                            style={{ marginBottom: "0px !important" }}
                          />
                          <button type="button" name="category" value={c.name}>
                            {c.name}
                          </button>
                        </div>
                      </Link> */}
                      </>
                    );
                  })
                ) : (
                  <p>No data found</p>
                )}
                {/* </div> */}
              </div>
              {/* <div className="dropdown-content">
              <Link to="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&me=A33TVR7FZVY48E">
                Amazon
              </Link>
              <Link to="https://deodap.in/search?q=Vishwas">DeoDap</Link>
              <Link to="https://www.flipkart.com/search?q=VISHWAS%20COOKING%20OIL&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off">
                Flipkart
              </Link>
            </div> */}
            </div>
          ) : (
            ""
          )}

          {/* {isLogin && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )} */}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #5d5d9c;
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    ${"" /* max-width: var(--max-width); */}
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
      /* height: 45px; */
      margin-left: -15px;
    }
  }

  .nav_toggle_edit {
    display: none;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-darkred);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    margin-bottom: 0px;
    display: none;
  }
  .cart-btn-wrapper {
    gap: 20px;
    display: none;
  }

  @media (max-width: 992px) {
    .nav_toggle_edit {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .nav_link_position_top {
      position: relative;
    }
    .nav_link_position_bottom {
      position: absolute;
      right: 10px;
    }
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-size: 1.1rem;
        font-weight: 500;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          ${"" /* border-bottom: 2px solid var(--clr-primary-indianred); */}
          border-bottom: 2px solid var(--clr-primary-orange);
        }
      }
    }
    .cart-btn-wrapper {
      display: flex;
      flex-direction: row-reverse;
    }
  }
`;

export default NavbarHome;

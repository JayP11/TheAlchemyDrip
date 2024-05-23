import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { links, linkss } from "../utils/constants";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

import { useFilterContext } from "../context/filter_context";
import { getUniqueValuesHome, formatPrice } from "../utils/helpers";
import IImages from "../constants/IImages";

const Sidebar = () => {
  const { isSidebarOpen, closeSideBar } = useProductsContext();
  const { updateFilters, all_products } = useFilterContext();
  const categories = getUniqueValuesHome(all_products, "category");
  const occasions = getUniqueValuesHome(all_products, "occasion");
  const [isActive, setActive] = useState(false);
  const { isLogin, logindata } = useUserContext();
  const [getdata2, setdata2] = useState([]);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    prodatalist();
  }, []);

  const prodatalist = async () => {
    const datalist = await localStorage.getItem("productdata");
    setdata2(JSON.parse(datalist));
  };

  return (
    <SidebarContainerr>
      <aside
        className={`${isSidebarOpen ? "sidebarr show-sidebarr" : "sidebarr"}`}>
        <div className="sidebar-headerr">
          <img src={IImages.logo} className="logoss" alt="The Home Use" />
          <button type="button" className="close-btnn" onClick={closeSideBar}>
            <FaTimes />
          </button>
        </div>
        {/* <ul className="links"> */}
        {/* <li>
            <Link className="men-link" to="" onClick={toggleClass}>
              Shop
            </Link>
            <div
              className={isActive ? "sub-menu open" : "sub-menu"}
              aria-hidden="true"
            >
              <div className="MegaMenu__Inner">
                <div className="MegaMenu__Item">
                  <div className="MegaMenu__Push">
                    <div
                      className="MegaMenu__img"
                      style={{ backgroundImage: `url(${background})` }}
                    >
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
                              value={c}
                            >
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
                              value={c}
                            >
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
                      style={{ backgroundImage: `url(${background})` }}
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li> */}
        {/* {linkss.map((link) => {
            const { id, text, url } = link;
            console.log("linkss", linkss);
            return (
              <li key={id}>
                <Link to={url} onClick={closeSideBar}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={closeSideBar}>
              Checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer> */}
        <ul className="linkss">
          {links.map(({ id, text, url }) => {
            // console.log("links", links);
            return (
              <li key={id}>
                <Link to={url} onClick={closeSideBar}>
                  {text}
                </Link>
              </li>
            );
          })}

          {isLogin ? (
            <div className="dropdown" style={{padding:"0 1.5rem"}}>
              <div className="nav-linkk">
                Sections&nbsp;
                <i className="fa fa-caret-down"></i>
              </div>
              <div className="dropdown-content" onClick={closeSideBar}>
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
          {/* <li>
            <Link to="/checkout" onClick={closeSideBar}>
              checkout
            </Link>
          </li> */}
        </ul>
        <div style={{padding:"0 1.5rem"}}>
          <CartButtons />
        </div>
      </aside>
    </SidebarContainerr>
  );
};

const SidebarContainerr = styled.div`
  text-align: center;
  .sidebar-headerr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    z-index: 9999;
  }
  .close-btnn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
    z-index: 9999;
  }
  .close-btnn:hover {
    color: var(--clr-red-light);
  }
  .logoss {
    justify-self: center;
    ${"" /* height: 45px; */}
    height: 90px;
    z-index: 9999;
  }
  .links {
    margin-bottom: 2rem;
  }
  .linkss a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
    z-index: 9999;
  }

  .linkss a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebarr {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: 9999;
  }
  .show-sidebarr {
    transform: translate(0);
    z-index: 9999;
    opacity: inherit;
  }
  .cart-btn-wrapper {
    gap: 20px;
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebarr {
      display: none;
    }
  }
  // Sub Menu Css
  /* .sub-menu {
    flex: 0 0 100%;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    background: #fff;
    padding: 0px 0 0 0;
    z-index: 10;
  }
  a.men-link {
    border: none;
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
  } */
  // .sub-menu[aria-hidden="true"] {}
  /* .sub-menu {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
  }
  ul.links li:hover .sub-menu {
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease;
  }
  @media screen and (max-width: 1200px) {
    .MegaMenu__Inner .MegaMenu__Item {
      flex: 0 0 30%;
    }
    .MegaMenu__Inner .MegaMenu__Item:first-child,
    .MegaMenu__Inner .MegaMenu__Item:last-child {
      flex: 0 0 100%;
      min-height: 250px;
    }
    .MegaMenu__Inner {
      flex-wrap: wrap;
    }
    aside.sidebar.show-sidebar {
      overflow-y: scroll;
    }
    a.megamenu_title {
      text-align: left;
      width: 100%;
    }
  }
  @media screen and (max-width: 991px) {
    .sub-menu {
      display: none !important;
    }
    .sub-menu.open {
      display: block !important;
    }
  }
  @media screen and (max-width: 767px) {
    .MegaMenu__Inner .MegaMenu__Item {
      flex: 0 0 45%;
    }
  }
  @media screen and (max-width: 575px) {
    .MegaMenu__Inner .MegaMenu__Item {
      flex: 0 0 97%;
    }
  } */
`;

export default Sidebar;

// import React from "react";
// import logo from "../assets/logo.svg";
// import { Link } from "react-router-dom";
// import { useProductsContext } from "../context/products_context";
// import { FaTimes } from "react-icons/fa";
// import { links } from "../utils/constants";
// import styled from "styled-components";
// import CartButtons from "./CartButtons";
// import { useUserContext } from "../context/user_context";

// const Sidebar = () => {
//   const { isSidebarOpen, closeSideBar } = useProductsContext();
//   console.log("side", isSidebarOpen);
//   const { myUser } = useUserContext();

//   return (
//     <SidebarContainer>
//       <aside
//         className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
//       >
//         <div className="sidebar-header">
//           <img src={logo} className="logo" alt="comfy sloth" />
//           <button className="close-btn" type="button" onClick={closeSideBar}>
//             <FaTimes />
//           </button>
//         </div>
//         <ul className="links">
//           {links.map(({ id, text, url }) => {
//             console.log("links", links);
//             return (
//               <li key={id}>
//                 <Link to={url} onClick={closeSideBar}>
//                   {text}
//                 </Link>
//               </li>
//             );
//           })}
//           {myUser && (
//             <li>
//               <Link to="/checkout" onClick={closeSideBar}>
//                 checkout
//               </Link>
//             </li>
//           )}
//         </ul>
//         <CartButtons />
//       </aside>
//     </SidebarContainer>
//   );
// };

// const SidebarContainer = styled.div`
//   text-align: center;
//   .sidebar-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem 1.5rem;
//   }
//   .close-btn {
//     font-size: 2rem;
//     background: transparent;
//     border-color: transparent;
//     color: var(--clr-primary-5);
//     transition: var(--transition);
//     cursor: pointer;
//     color: var(--clr-red-dark);
//     margin-top: 0.2rem;
//   }
//   .close-btn:hover {
//     color: var(--clr-red-light);
//   }
//   .logo {
//     justify-self: center;
//     height: 45px;
//   }
//   .links {
//     margin-bottom: 2rem;
//   }
//   .links a {
//     display: block;
//     text-align: left;
//     font-size: 1rem;
//     text-transform: capitalize;
//     padding: 1rem 1.5rem;
//     color: var(--clr-grey-3);
//     transition: var(--transition);
//     letter-spacing: var(--spacing);
//   }

//   .links a:hover {
//     padding: 1rem 1.5rem;
//     padding-left: 2rem;
//     background: var(--clr-grey-10);
//     color: var(--clr-grey-2);
//   }

//   .sidebar {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: var(--clr-white);
//     transition: var(--transition);
//     transform: translate(-100%);
//     z-index: -1;
//   }
//   .show-sidebar {
//     transform: translate(0);
//     z-index: 999;
//   }
//   .cart-btn-wrapper {
//     margin: 2rem auto;
//   }
//   @media screen and (min-width: 992px) {
//     .sidebar {
//       display: none;
//     }
//   }
// `;

// export default Sidebar;

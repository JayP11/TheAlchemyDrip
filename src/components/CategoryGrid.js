import React, { useEffect, useState } from "react";
import { useHomeContext } from "../context/home_context";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import ReactModal from "react-modal";
import axios from "axios";
import { ACCEPT_HEADER, category_verify } from "../utils/constants";
import Notifications from "./Notifications";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useProductsContext } from "../context/products_context";
import PageHero from "./PageHero";
import LoginModule from "./LoginModule";
import { useUserContext } from "../context/user_context";

const CategoryGrid = ({ getdrop, setdrop }) => {
  const { updateFilters } = useFilterContext();
  const { fetchCategorieslist, setMallRegister } = useProductsContext();
  const { categories } = useHomeContext();
  const { category } = useHomeContext();
  const [getModal, setModal] = useState(false);
  // const [getModal1, setModal1] = useState(false);
  const [getCategoryId, setCategoryId] = useState(false);
  const [getslug, setslug] = useState("");
  const [getpassword, setpassword] = useState("");
  const [showscreen, setShowlogin] = useState();
  const { isLogin } = useUserContext();

  // let history = useHistory();

  // console.log("categories id jay", category);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  // const PasswordApi = async () => {
  //   console.log("clickk");

  //   if (getpassword == "") {
  //     Notifications("error", "Error!", "Please enter your Password!");
  //     return;
  //   } else {
  //     const formData = new FormData();
  //     formData.append("password", getpassword);
  //     formData.append("category", getCategoryId);

  //     const response = await axios
  //       .post(category_verify, formData, {
  //         headers: {
  //           Accept: "application/x.uniform.v1+json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       })
  //       .catch((error) => console.error(`Error: ${error}`));

  //     if (response.data.status == 1) {
  //       setpassword("");
  //       history.push("/products");
  //       setModal(false);

  //       return;
  //     } else {
  //       return;
  //     }
  //   }
  // };

  const SigninMall = async (type) => {
    if (getpassword === "") {
      alert("Enter the password......!");
      return;
    } else {
      var params = {
        category: getCategoryId,
        password: getpassword,
      };

      console.log("-=-=-=->", params);
      const data = await setMallRegister(params);
      if (data) {
        if (data.status === 1) {
          setModal(false);
          setShowlogin(true);
          console.log("register-data", data);
          setdrop(1);
          // history.push("/products");
          // history.push("/Propage/" + data.data[0].slug);
          // showscreen();
          // window.location.reload(false);
        }
      }
    }
  };

  return (
    <>
      <PageHero title="Schools" />
      <Wrapper>
        <div className="section-center">
          {/* <div className="title">
          <h2>Schools</h2>
          <div className="underline"></div>
        </div> */}
          <div className="row">
            {/* {category.slice(5, 6).map((c, index) => { */}
            {category.map((c, index) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  className="col-md-4"
                  key={index}
                  onClick={() => {
                    setModal(true);
                    setslug(c.slug);
                    setCategoryId(c.id);
                  }}
                >
                  {/* <Link to={`/products`}> */}
                  <div className="a">
                    <img
                      src={c.image_full_path}
                      alt=""
                      style={{ marginBottom: "0px !important" }}
                    />
                    <button
                      onClick={updateFilters}
                      type="button"
                      name="category"
                      value={c.name}
                      // className={${category === c.toLowerCase() ? "active" : null}}
                    >
                      {c.name}
                    </button>
                  </div>

                  {/* <a>{c.name}</a> */}
                </div>
              );
            })}
          </div>
        </div>

        <ReactModal
          isOpen={getModal}
          onRequestClose={() => {
            setModal(false);
          }}
          style={customStyles}
        >
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0.6rem",
                background: "gainsboro",
              }}
            >
              <b style={{ fontSize: "18px", margin: "0px" }}>PASSWORD</b>
            </div>
            <div className="model_sizing">
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter password"
                    className="password_input_modal"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  className="btn"
                  style={{ width: "100%", margin: "0px" }}
                  onClick={() => SigninMall()}
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        </ReactModal>
        {/* {isLogin && (
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
        )} */}
        {!isLogin && (
          <LoginModule showscreen={showscreen} setShowlogin={setShowlogin} />
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 60px 0;
  .title {
    margin-bottom: 30px;
    h2 {
      color: var(--clr-primary-darkred);
    }
  }
  h5 {
    font-size: 27px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: 0px 0px 20px 0;
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    ${"" /* margin: 0 auto; */}
    text-align: center;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    gap: 1rem;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    ${
      "" /* margin-right: -50px;
    margin-left: -50px; */
    }
    justify-content: center;
  }
  .col-md-4 {
    ${"" /* height: 150px; */}
    height: 350px;
    width: 140px;
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    ${"" /* max-width: 33.333333%; */}
    ${"" /* padding: 0 50px; */}
    text-align: center;
    ${"" /* margin-bottom: 30px; */}
    position: relative;
    overflow: hidden;
    .a {
      img {
        height: 350px;
        width: 100%;
        ${
          "" /* height:100%;
        width: 100%; */
        }
        ${"" /* object-fit: cover; */}
        display: flex;
      }
      button {
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0px;
        background: rgb(0 0 0/0.5);
        width: calc(100% - 100px);
        margin: 0 auto;
        color: #fff;
        font-size: 28px;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        transform: translateY(100%);
        transition: all 0.5s ease;
        visibility: hidden;
        opacity: 0;
        cursor: pointer;
      }
      :hover {
        button {
          transform: translateY(0%);
          visibility: visible;
          opacity: 1;
          cursor: pointer;
        }
      }
    }
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
  button {
    border: none;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (max-width: 1199px) {
    .row {
      margin-right: 0px;
      margin-left: 0px;
      .col-md-4 {
        ${"" /* padding: 0 20px; */}
      }
      .col-md-4 button {
        width: calc(100% - 40px);
      }
    }
  }
  @media (max-width: 767px) {
    .row {
      margin-right: -15px;
      margin-left: -15px;
    }
    .col-md-4 {
      padding: 0 15px;
      max-width: 50%;
      flex: 0 0 50%;
    }
    .col-md-4 a button {
      width: calc(100% - 30px) !important;
      font-size: 18px !important;

      transform: translateY(0%);
      visibility: visible;
      opacity: 1;
      cursor: pointer;
    }
  }
  ${"" /* @media (max-width: 475px) { */}
  @media (max-width: 767px) {
    .col-md-4 {
      padding: 0 15px;
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
`;

export default CategoryGrid;

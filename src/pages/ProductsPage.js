import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";
import { FaSlidersH, FaTimes } from "react-icons/fa";
import ReactModal from "react-modal";
import { useProductsContext } from "../context/products_context";
import { product as urll, products_url as url } from "../utils/constants";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductsPage = () => {
  const [show, setShow] = React.useState();
  window.scrollTo(0, 0);
  const [getModal, setModal] = useState(false);
  const [getdata2, setdata2] = useState([]);
  const [getSubclass, setSubclass] = useState(0);
  const { fetchCategorieslist, mall_signup_data } = useProductsContext();

  const paramm = useParams();

  var slug = paramm.id;

  useEffect(() => {
    // fetchCategorieslist(`${urll}/${slug}`);
    prodatalist();
    // console.log("data are", mall_signup_data);
  }, []);

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

  const prodatalist = async () => {
    const datalist = await localStorage.getItem("productdata");
    setdata2(JSON.parse(datalist));
    // console.log("productdata", JSON.parse(datalist));
  };

  return (
    <main>
      <PageHero title="Class" />
      {/* <Wrapper className="page">
        <div className="section-center products">
          <div className="filter-div">
            <div className={show ? "open" : "close"}>
              <div className="filter-list">
                <div className="filter-bg" onClick={() => setShow(!show)}></div>
                <div className="filter-close" onClick={() => setShow(!show)}>
                  <FaTimes />
                </div>
                <Filters setModal={setModal} getSubclass={getSubclass} />
              </div>
            </div>
          </div>

          <div>
            <div className="filter-group">
              <button className="man-btn" onClick={() => setShow(!show)}>
                <FaSlidersH />
              </button>
              <Sort />
            </div>
            <ProductList />
          </div>
        </div>
      </Wrapper> */}

      <Wrapper>
        <div className="section-center">
          {/* <div className="title">
            <h2>Sub Category</h2>
            <div className="underline"></div>
          </div> */}
          <div className="row">
            {getdata2 && getdata2.length > 0
              ? getdata2.map((c, index) => {
                  return (
                    <Link
                      to={`/Propage/${c.slug}`}
                      style={{ cursor: "pointer" }}
                      className="col-md-4"
                      key={index}
                      onClick={() => {
                        // setModal(true);
                      }}>
                      <div className="Propage_img_main">
                        <img
                          src={c.image_full_path}
                          alt=""
                          style={{ marginBottom: "0px !important" }}
                        />
                        <button type="button" name="category" value={c.name}>
                          {c.name}
                        </button>
                      </div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
        <ReactModal
          isOpen={getModal}
          onRequestClose={() => {
            setModal(false);
          }}
          style={customStyles}>
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0.6rem",
                background: "gainsboro",
              }}>
              <b style={{ fontSize: "18px", margin: "0px" }}>PASSWORD</b>
            </div>
            <div className="model_sizing">
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter password"
                    className="password_input_modal"
                    // onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  className="btn"
                  style={{ width: "100%", margin: "0px" }}>
                  Submit
                </button>
              </div>
            </div>
          </>
        </ReactModal>
      </Wrapper>
      <ReactModal
        isOpen={getModal}
        onRequestClose={() => {
          setModal(false);
        }}
        style={customStyles}>
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.6rem",
              background: "gainsboro",
            }}>
            <b style={{ fontSize: "18px", margin: "0px" }}>PASSWORD</b>
          </div>
          <div className="model_sizing">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Enter password"
                  className="password_input_modal"
                />
              </div>
            </div>

            <div>
              <button
                className="btn"
                style={{ width: "100%", margin: "0px" }}
                onClick={() => {
                  setModal(false);
                  setSubclass(1);
                }}>
                Submit
              </button>
            </div>
          </div>
        </>
      </ReactModal>
    </main>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  ${"" /* padding: 60px 0 0 0; */}
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
    margin: 0 auto;
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
    ${'' /* height: 150px; */}
    width: 150px;
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    ${"" /* max-width: 33.333333%; */}
    ${"" /* padding: 0 50px; */}
    text-align: center;
    ${"" /* margin-bottom: 30px; */}
    position: relative;
    overflow: hidden;
    .Propage_img_main {
      height: 200px;
    }
    .Propage_img_main {
      img {
        ${"" /* max-width: 100%; */}
        height:100%;
        width: 100%;
        object-fit: cover;
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

// const Wrapper = styled.div`
//   .section-center {
//     max-width: 100%;
//   }
//   .products {
//     display: grid;
//     gap: 3rem 1.5rem;
//     margin: 80px auto;
//   }
//   .filter-div {
//     .filter-close {
//       display: none;
//     }
//   }
//   .filter-group {
//     button.man-btn {
//       display: none;
//     }
//   }

//   @media (min-width: 768px) {
//     .products {
//       grid-template-columns: 200px 1fr;
//     }
//   }
//   @media screen and (max-width: 767px) {
//     .filter-group {
//       display: flex;
//       align-items: center;
//       button.man-btn {
//         display: flex;
//         margin-bottom: 2rem;
//         margin-right: 11px;
//         background: #000;
//         border: none;
//         color: #fff;
//         border-radius: 3px;
//         padding: 5px 6px 5px;
//         align-items: center;
//         justify-content: center;
//         line-height: 35px;
//       }
//       section {
//         display: flex;
//         hr {
//           display: none;
//         }
//       }
//     }
//     .filter-div {
//       button {
//         display: block;
//       }
//       .filter-list {
//         position: fixed;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         height: 100vh;
//         z-index: 15555;
//         overflow: hidden;
//         .filter-close {
//           position: absolute;
//           top: 5px;
//           left: 244px;
//           z-index: 25;
//           background: #f1f5f8;
//           width: 30px;
//           height: 30px;
//           display: flex !important;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//         }
//         .filter-bg {
//           position: absolute;
//           background: #000;
//           opacity: 0.5;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           z-index: -1;
//         }
//         section {
//           max-width: 280px;
//           padding: 20px 15px;
//           background: #fff;
//           height: 100vh;
//           overflow-y: scroll;
//         }
//       }
//       .close {
//         display: none;
//       }
//     }
//   }
//   @media screen and (max-width: 480px) {
//     .filter-group {
//       align-items: baseline;
//       button.man-btn {
//         margin: 0 -25px 0 0 !important;
//         z-index: 5;
//       }
//       section {
//         flex-wrap: wrap;
//         .btn-container {
//           flex: 0 0 100%;
//           justify-content: end;
//           display: flex;
//           padding: 0 0 0 35px;
//         }
//       }
//     }
//   }
// `;

export default ProductsPage;

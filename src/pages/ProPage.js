import React, { useEffect } from "react";
import styled from "styled-components";
import { PageHero, ProductList } from "../components";
import { product as url } from "../utils/constants";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useProductsContext } from "../context/products_context";

const ProPage = () => {
  const { fetchSingleProduct } = useProductsContext();
  //getting perams
  const paramm = useParams();

  var slug = paramm.id;

  useEffect(() => {
    fetchSingleProduct(`${url}/${slug}`);
  }, [slug]);

  // console.log("slug", slug);

  return (
    <Wrapper className="page" style={{ background: "whitesmoke" }}>
      <PageHero title={slug} />

      <div
        className="section-center products"
        style={{ padding: "2rem", marginTop: "0px" }}>
        {/* <div className="filter-div">
            <div className={show ? "open" : "close"}>
              <div className="filter-list">
                <div className="filter-bg" onClick={() => setShow(!show)}></div>
                <div className="filter-close" onClick={() => setShow(!show)}>
                  <FaTimes />
                </div>
                <Filters setModal={setModal} getSubclass={getSubclass} />
              </div>
            </div>
          </div> */}

        <div>
          <div className="filter-group">
            {/* <button className="man-btn" onClick={() => setShow(!show)}>
                <FaSlidersH />
              </button> */}
            {/* <Sort /> */}
          </div>
          <ProductList />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section-center {
    max-width: 100%;
  }
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 80px auto;
  }
  .filter-div {
    .filter-close {
      display: none;
    }
  }
  .filter-group {
    button.man-btn {
      display: none;
    }
  }

  ${
    "" /* @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  } */
  }
  @media screen and (max-width: 767px) {
    .filter-group {
      display: flex;
      align-items: center;
      button.man-btn {
        display: flex;
        margin-bottom: 2rem;
        margin-right: 11px;
        background: #000;
        border: none;
        color: #fff;
        border-radius: 3px;
        padding: 5px 6px 5px;
        align-items: center;
        justify-content: center;
        line-height: 35px;
      }
      section {
        display: flex;
        hr {
          display: none;
        }
      }
    }
    .filter-div {
      button {
        display: block;
      }
      .filter-list {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        z-index: 15555;
        overflow: hidden;
        .filter-close {
          position: absolute;
          top: 5px;
          left: 244px;
          z-index: 25;
          background: #f1f5f8;
          width: 30px;
          height: 30px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .filter-bg {
          position: absolute;
          background: #000;
          opacity: 0.5;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        section {
          max-width: 280px;
          padding: 20px 15px;
          background: #fff;
          height: 100vh;
          overflow-y: scroll;
        }
      }
      .close {
        display: none;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .filter-group {
      align-items: baseline;
      button.man-btn {
        margin: 0 -25px 0 0 !important;
        z-index: 5;
      }
      section {
        flex-wrap: wrap;
        .btn-container {
          flex: 0 0 100%;
          justify-content: end;
          display: flex;
          padding: 0 0 0 35px;
        }
      }
    }
  }
`;

export default ProPage;

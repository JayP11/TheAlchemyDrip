import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useProductsContext } from "../context/products_context";
const PageHero = ({ title, product, productpage }) => {
  return (
    <Wrapper
      style={{
        backgroundColor: "currentColor",
        // backgroundColor: "#5d5d9c",
        minHeight: "20vh",
        margin: "2rem 0",
      }}>
      <div>
        <Helmet>
          <title>{`${title} | The Alchemy Drip`}</title>
          <meta name="description" content="The Alchemy Drip" />
        </Helmet>
        <div className="section-center">
          <h3
            className="path-heading"
            style={{
              marginBottom: "0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              // fontSize:"1rem"
            }}>
            <Link to="/">HOME</Link>
            {product && (
              <Link to="/products" style={{ color: "#b2b2d1" }}>
                / PRODUCTS
              </Link>
            )}
            {productpage && (
              <Link to="/Propage" style={{ color: "#b2b2d1" }}>
                / PRODUCT PAGE
              </Link>
            )}
            <div
              style={{
                fontWeight: "600",
                color: "#fff",
                textTransform: "uppercase",
              }}>
              / {title}
            </div>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  a {
    padding: 0.5rem;
    font-weight: 600;
    transition: var(--transition);
    color: #b2b2d1;
  }

  a:hover {
    ${"" /* color: #9b98ee; */}
    color:  var(--clr-white);
  }
`;

export default PageHero;

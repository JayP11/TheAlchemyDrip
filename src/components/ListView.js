import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import { useUserContext } from "../context/user_context";
const ListView = ({ products }) => {
  const { userid, isLogin } = useUserContext();
  const demoimage =
    "https://t4.ftcdn.net/jpg/05/81/84/71/360_F_581847176_eF540XqFGHDdGPZxyh5NtWHNzgs0XFk6.jpg";

  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description, slug, wholesale_price } =
          product;
        console.log("product is", product);
        return (
          <article
            key={id}
            className="main_box"
            style={{
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
            <Link to={`/products/${slug}/abc/${userid}`}>
              <img
                src={
                  image === "" || image === undefined || image === null
                    ? demoimage
                    : image
                }
                alt={name}
              />
            </Link>
            <div>
              <h4>{name}</h4>
              <p style={{ display: "flex", marginBottom: "0px" }}>
                <b>Description : </b> &nbsp;
                <p
                  style={{ textAlign: "justify", marginBottom: "0px" }}
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}></p>
              </p>
              {/* <h5 className="pricee">{formatPrice(price)}</h5>
              <h5 className="price">{formatPrice(wholesale_price)}</h5> */}
              {/* <p>{description.substring(0, 150)}...</p> */}
              {/* <div>{renderHTML(description.substring(0, 150))}</div> */}
              <Link to={`/products/${slug}/abc/${userid}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    ${
      "" /* width: 300px;
    height: 300px; */
    }
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: var(--radius);
    ${"" /* margin-bottom: 1rem; */}
  }
  h4 {
    margin-bottom: 0.5rem;
  }

  .pricee {
    font-size: 14px;
    text-decoration: line-through;
    font-weight: 400;
  }
  .price {
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
    font-weight: 700;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
  @media (max-width: 992px) {
    .main_box {
      gap: 1rem;
      flex-direction: row;
      display: flex;
    }
  }
  @media (max-width: 767px) {
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default ListView;

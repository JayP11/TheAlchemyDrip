import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useUserContext } from "../context/user_context";
import { useWishlistContext } from "../context/wishlist_context";
import { Link } from "react-router-dom";

const WishlistItem = ({
  id,
  image,
  product_name,
  color,
  price,
  amount,
  size,
  product_slug,
  wholesale_price,
}) => {
  console.log("🚀 ~ file: WishlistItem.js:20 ~ image:", id);
  localStorage.setItem("wishprodid", JSON.stringify(id));
  const { userid, isLogin } = useUserContext();
  const { addToWishlist, removeItemWishlist } = useWishlistContext();
  // console.log("🚀 ~ file: WishlistItem.js:20 ~ wholesale_price:", wholesale_price)
  // console.log("🚀 ~ file: WishlistItem.js:22 ~ addToWishlist:", id)
  // console.log("🚀 ~ file: WishlistItem.js:22 ~ addToWishlist:", price)

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt="" />
        <div>
          <h5 className="name">{product_name}</h5>
          <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
            <span style={{ fontSize: "18px" }}>size:</span>
            <h5 className="name">{size}</h5>
          </div>
          {/* <Link to={`/products/${slug}`} className="btn"> */}
          <Link to={`/products/${product_slug}/abc/0`} className="btn">
            Details
          </Link>
          {/* <p className="color">
            color : <span style={{ background: color }}></span>
            <h5 className="price-small">{formatPrice(price)}</h5>
          </p> */}
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      {/* <h5 className="price">{formatPrice(wholesale_price)}</h5> */}

      <button
        type="button"
        className="remove-btn"
        onClick={() => {
          var params = {
            // calling: 2,
            product_id: id,
            // customer_id: userid,
          };
          removeItemWishlist(params);
        }}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: unset;
  gap: 3rem 5rem;
  justify-items: center;
  margin-bottom: 30px;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #ededed;

  + hr {
    display: none;
  }
  .title {
    grid-template-rows: unset;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    height: 100px;
    width: 100px;
    ${
      "" /* width: 100%;
    height: 100%; */
    }
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 20px;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      /* background: red; */
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (max-width: 776px) {
    .title {
      margin-left: 2rem;
      gap: 3rem;
    }
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-darkred);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: unset;
    img {
      ${"" /* height: unset; */}
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default WishlistItem;

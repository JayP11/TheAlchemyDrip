import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  // window.scrollTo(0, 0)
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your Cart is empty</h2>
          {/* <Link to="/products" className="btn">
            Fill it
          </Link> */}
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  @media screen and (max-width: 575px) {
    .link-container {
      flex-wrap: wrap;
      gap:1rem;
      .link-btn {
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 15px;
        text-align: center;
      }
    }
  }
`;

export default CartPage;

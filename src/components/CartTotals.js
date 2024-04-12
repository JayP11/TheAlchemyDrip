import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fees } = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fees)}</span>
          </p>
          <hr />
          <h4>
            Order Total :{" "}
            <span>{formatPrice(total_amount + shipping_fees)}</span>
          </h4>
          <div style={{ marginTop: "2rem" }}>
            <Link to="/checkout" className="btn">
              proceed to checkout
            </Link>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid #bcccdc;
    border-radius: var(--radius);
    padding: 2rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    padding: 0px !important;
    max-width: 100%;
    display: inline-block;
    h4,
    h5,
    p {
      display: flex;
      justify-content: space-between;
    }
    article {
      padding: 30px 15px;
      width: 100%;
    }
  }
`;

export default CartTotals;

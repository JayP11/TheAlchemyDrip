import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const QtyButtons = ({ increase, decrease, qty }) => {
  return (
    <Wrapper className="qty-btns">
      <div className="quantity-box" style={{ padding: "0px" }}>
        <b>Quantity</b>
        <div className="qty">
          <button type="button" className="qty-btn" onClick={decrease}>
            <FaMinus />
          </button>
          <h2 className="qty">{qty}</h2>
          <button type="button" className="qty-btn" onClick={increase}>
            <FaPlus />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default QtyButtons;

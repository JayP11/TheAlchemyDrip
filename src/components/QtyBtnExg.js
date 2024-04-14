import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const QtyBtnExg = ({ inc, dec, getQtys }) => {
  const handleIncrement = () => {
    if (getQtys < 4) {
      inc();
    }
  };

  return (
    <Wrapper className="qty-btns">
      <div className="quantity-box" style={{ padding: "0px" }}>
        {/* <b>Quantity</b> */}
        <div
          className="qty"
          style={{
            display: "flex",
            border: "2px solid",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <button type="button" className="qty-btn" onClick={dec}>
            <FaMinus />
          </button>
          <p className="qty" style={{ marginBottom: "0px" }}>
            {getQtys}
          </p>
          <button type="button" className="qty-btn" onClick={handleIncrement}>
            <FaPlus />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  ${
    "" /* display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center; */
  }
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

export default QtyBtnExg;

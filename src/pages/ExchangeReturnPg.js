import React from "react";
import IImages from "../constants/IImages";
import styled from "styled-components";

const ExchangeReturnPg = () => {
  return (
    <Wrapper>
      <div>
        <img
          src={IImages.Return}
          alt=""
          style={{ height: "300px", width: "100%" }}
        />
      </div>
      <div className="input_main_block">
        <h3>Return / Exchange</h3>
        <p>Enter your order details below</p>
        <div>
          <div className="input_main">
            <div>
              <input type="text" placeholder="Enter Order ID" />
            </div>
            <div>
              <input type="text" placeholder="Email or Phone no." />
            </div>
            <div>
              <input type="text" placeholder="Password" />
            </div>
            <div>
              <input type="text" placeholder="Roll no." />
            </div>
            <div>
              <button style={{ width: "100%" }} className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;

  .input_main_block {
    width: 30%;
  }
  .input_main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input {
    border: none;
    border-bottom: 2px solid;
    width: 100%;
  }
  @media (max-width: 610px) {
    .input_main_block {
      width: 100%;
    }
  }
`;

export default ExchangeReturnPg;

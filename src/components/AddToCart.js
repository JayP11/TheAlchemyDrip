/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import QtyButtons from "./QtyButtons";
import IImages from "../constants/IImages";
const AddToCart = ({ product, value, sizeValue, getstock, sizeid }) => {
  const { addToCart } = useCartContext();

  const { stock, colors, sizes, HIGHT, LENGTH, WIDTH, slug } = product;

  console.log("product details", sizeValue);
  console.log("product details qty", getstock);
  // Set Color State
  const [mainColor, setMainColor] = useState(colors ? colors[0] : []);
  const [mainSize, setMainSize] = useState(sizes ? sizes[0] : []);

  const [qty, setQty] = useState(1);

  const increase = () => {
    setQty((oldQty) => {
      let tempQty = oldQty + 1;
      if (tempQty > getstock) {
        tempQty = getstock;
      }
      return tempQty;
    });
  };

  const decrease = () => {
    setQty((oldQty) => {
      let tempQty = oldQty - 1;
      if (tempQty < 1) {
        tempQty = 1;
      }
      return tempQty;
    });
  };

  return (
    <Wrapper>
      <div className="price-box">
        <QtyButtons qty={qty} increase={increase} decrease={decrease} />
      </div>
      {/* Total Qty Display  */}
      <div style={{ padding: "0.5rem" }}>
        <h5 className="qtyText">Total Qty {stock}</h5>
      </div>
      <div className="addcart-box">
        <div className="cart-btn">
          <button
            type="submit"
            onClick={() => {
              console.log("ttttt->", JSON.stringify(value, null, 2));
              addToCart(
                product.product_id,
                mainColor,
                qty,
                product,
                mainSize,
                slug,
                product.product_images,
                value,
                sizeValue,
                getstock,
                sizeid
              );

              // addToCart(id, mainColor, qty, product, mainSize, slug);
            }}>
            ADD TO CART
          </button>
        </div>
        {/* <Link
          to="/cart"
          className="cart-btn"
          onClick={() =>
            addToCart(id, mainColor, qty, product, mainSize, slug)
          }>
          <button type="submit">BUY IT NOW</button>
        </Link> */}
      </div>
      {/* colors */}
      {/* <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div> */}
      {/* <p className="info">
        <span>Available : </span>
        <h5>{stockAvail > 0 ? "In Stock" : "Out of Stock"}</h5> 

        {stock > 0 ? "In Stock" : "Out of Stock"} 
        {details[0].inventory > 0 ? "In Stock" : "Out of Stock"} 
      </p> */}
      {/* <p className="info">
        <span>SKU : </span>
        {product_code}
      </p> */}

      {/* <p className="info info-about">
        <span>About Product : </span>
        <p
          dangerouslySetInnerHTML={{
            __html: short_description,
          }}></p>
      </p> */}

      {/* <div className="mesure_logos">
        <img src={IImages.weight_logo} alt="" />
        <p>weigth - {WEIGHT}</p>
      </div> */}
      {HIGHT && (
        <div className="mesure_logos mesure_logos_margin">
          <img src={IImages.height_logo} alt="" />
          <p>Height (cm) - {HIGHT}</p>
        </div>
      )}
      {LENGTH && (
        <div className="mesure_logos">
          <img src={IImages.length_logo} alt="" />
          <p>Lenght (cm) - {LENGTH}</p>
        </div>
      )}
      {WIDTH && (
        <div className="mesure_logos">
          <img src={IImages.width_logo} alt="" />
          <p>Width (cm) - {WIDTH}</p>
        </div>
      )}
      {/* amount button */}
      {/* <div className="btn-container"></div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  h6.qtyText {
    padding: 11px 0 5px 0;
  }
  button {
    cursor: pointer;
  }
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 5px;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
  .qtyText {
    color: darkgrey;
  }
  .mesure_logos > img {
    width: 30px;
  }

  .mesure_logos {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4%;
  }

  .info-about {
    /* margin-top: 14px; */
  }
`;
export default AddToCart;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import WishlistColumns from "./WishlistColumns";
import WishlistItem from "./WishlistItem";
import { useWishlistContext } from "../context/wishlist_context";
import { wishlist_details as urlll } from "../utils/constants";
import axios from "axios";
import { useUserContext } from "../context/user_context";
const WishlistContent = () => {
  const { wishlist_product, fetchWishlistProducts } = useWishlistContext();
  const [prolist, SetProList] = useState([]);
  const { isLogin, logintoken } = useUserContext();
  useEffect(async () => {
    // fetchWishlistProducts();
    try {
      const response = await axios.get(urlll, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer ".concat(logintoken),
        },
      });
      SetProList(response.data.data);
    } catch (error) {
      console.log("err", error);
    }
  }, []);
  return (
    <Wrapper className="section section-center">
      <WishlistColumns />

      {prolist &&
        prolist.map((item) => {
          return <WishlistItem key={item.id} {...item} />;
        })}
      <hr />
      <div className="link-container"></div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    ${"" /* background: var(--clr-primary-5); */}
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default WishlistContent;

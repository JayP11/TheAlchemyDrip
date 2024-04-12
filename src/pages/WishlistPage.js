import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { WishlistContent, PageHero } from "../components";
import { useWishlistContext } from "../context/wishlist_context";
import { wishlist_details as urlll } from "../utils/constants";
import { useUserContext } from "../context/user_context";
import axios from "axios";
const WishlistPage = () => {
  const { wishlist_product, fetchWishlistProducts } = useWishlistContext();
  const { isLogin, logintoken } = useUserContext();

  const [prolist, SetProList] = useState([]);

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

  if (prolist && prolist.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your wishlist is empty</h2>
          <Link to="/products" className="btn">
            Wishlist Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="wishlist" />
      <Wrapper className="page">
        <WishlistContent />
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
`;

export default WishlistPage;

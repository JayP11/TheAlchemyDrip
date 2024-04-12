import React, { useEffect } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const Product = ({
  image,
  product_images,
  id,
  name,
  price,
  slug,
  wholesale_price,
}) => {
  const { userid, isLogin } = useUserContext();

  const paramm = useParams();

  var slug2 = paramm.id;
  // console.log("sluggg", slug);
  // console.log("product_images :", product_images);
  // console.log(wholesale_price);
  const demoimage =
    "https://t4.ftcdn.net/jpg/05/81/84/71/360_F_581847176_eF540XqFGHDdGPZxyh5NtWHNzgs0XFk6.jpg";

  // useEffect(() => {
  //   (${url}/${slug});
  // }, [slug]);

  return (
    <Wrapper
      style={{
        padding: "1rem",
        background: "var(--clr-primary-darkred)",
      }}>
      <Link to={`/products/${slug}/abc/${userid}`} className="container">
        {/* <Link to={/products/${slug}/abc/${userid}}>
          <img
            src={
              image === "" || image === undefined || image === null
                ? demoimage
                : image
            }
            alt={name}
          />
        </Link> */}
        {/* <div>
          {product_images && product_images.length <= 0 ? (
            <>
              <img
                src={
                  image === "" || image === undefined || image === null
                    ? demoimage
                    : image
                }
                alt={name}
              />
            </>
          ) : (
            <>
              {product_images.map((item) => {
                return <img src={item.image} alt={name} />;
              })}
            </>
          )}
        </div> */}

        <div>
          {product_images && product_images.length > 0 ? (
            <img
              src={
                product_images[0].image ? product_images[0].image : demoimage
              }
              alt={name}
            />
          ) : (
            <img
              src={
                image === "" || image === undefined || image === null
                  ? demoimage
                  : image
              }
              alt={name}
            />
          )}
        </div>
        <Link to={`/products/${slug}/abc/${userid}`} className="link">
          <FaSearch />
        </Link>
      </Link>
      <footer>
        <h5 style={{ color: "white" }}>{name}</h5>
        {/* <p className="pricee">{formatPrice(price)}</p> */}
        {/* <p>{formatPrice(wholesale_price)}</p> */}
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    ${"" /* background: var(--clr-white); */}
    border-radius: var(--radius);
  }

  img {
    object-fit: cover;
    width: 100%;
    display: block;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-darkred);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
  }
  footer h5 {
    ${"" /* color: var(--clr-h5); */}
    color: var(--clr-primary-darkred);
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    ${"" /* color: var(--clr-primary-5); */}
    color: var(--clr-primary-indianred);
    letter-spacing: var(--spacing);
    font-weight: 700;
  }

  .pricee {
    font-size: 14px;
    text-decoration: line-through;
    font-weight: 400;
  }
`;
export default Product;

import React from "react";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import Error from "./Error";
import Product from "./Product";
import Slider from "react-slick";
// import lefticon from "../assets/left.png";
// import righticon from "../assets/right.png";

const TrandingProducts = () => {
  const {
    products_loading: loading,
    produts_error: error,
    trending_products: tranding,
  } = useProductsContext();

  console.log("trending_products", tranding);
  if (error) {
    return <Error />;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper className="section" style={{ paddingBottom: "10px" }}>
      <div className="title">
        <h2 style={{ color: "var(--clr-primary-darkred)" }}>
          Trending Products
        </h2>
        <div className="underline"></div>
      </div>

      <div className="section-center featured" style={{ height: "250px" }}>
        <Slider {...settings}>
          {tranding.slice(0, 6).map((product) => {
            return <Product className="test" key={product.id} {...product} />;
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  position: relative;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    max-width: 80%;
    img {
      object-fit: cover;
      height: 200px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .slick-track {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    margin: 0.5rem auto;
    display: grid;
  }
  .slick-slide {
    padding: 0 25px;
  }
  .slick-slider button {
    font-size: 0;
    border: none;
    outline: none;
    box-shadow: none;
    position: relative;
    background: transparent;
    position: absolute;
    cursor: pointer;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
  button.slick-arrow.slick-next {
    left: unset;
    right: 5%;
  }
  button.slick-arrow.slick-prev::after {
    content: "";
    font-size: 18px;
    display: inline-block;
    width: 55px;
    height: 32px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  button.slick-arrow.slick-next::after {
    content: "";
    font-size: 18px;
    display: inline-block;
    width: 55px;
    height: 32px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .slick-list {
    margin: 0px -5px 0px -5px;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      overflow: hidden;
    }
  }
  @media (max-width: 1199px) {
    .slick-track {
      display: flex;
    }
    padding-bottom: 40px;
    .featured {
      margin-bottom: 0px;
      position: relative;
      overflow: visible;
      max-width: 100%;
    }
    .slick-list {
      overflow: hidden;
    }
    .slick-slider button {
      left: -30px;
    }
    button.slick-arrow.slick-next {
      left: unset;
      right: -30px;
    }
  }
  @media (max-width: 767px) {
    .slick-track {
      grid-template-columns: unset !important;
      display: flex !important;
    }
    .featured {
      display: flex !important;
    }
    .slick-list {
      width: 100% !important;
      display: flex;
      max-width: 100%;
      overflow: hidden;
    }
    padding-bottom: 0px !important;
    .section-center.featured {
      margin-bottom: 0px !important;
    }
    .slick-slider.slick-initialized {
      width: 100%;
      overflow: hidden;
    }
    .slick-slider button {
      top: unset !important;
      bottom: -40px;
      left: 30% !important;
    }
    button.slick-arrow.slick-next {
      left: unset !important;
      right: 30% !important;
    }
  }

  @media screen and (max-width: 1335px) {
    .slik-track {
      height: 246px;
    }
  }

  @media screen and (max-width: 600px) {
    .slick-slide {
      padding: 0 0px;
    }
    footer {
      padding: 0 15px 15px;
    }
  }
  h2 {
    color: var(--clr-grey-1);
  }
`;

export default TrandingProducts;

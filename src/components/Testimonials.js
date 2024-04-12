import React from "react";
import { useProductsContext } from "../context/products_context";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section className="testimonials-sec pt-5 mt-5">
      <div className="container-fluid">
        <div className="section-title">
          <h2>TESTIMONIALS</h2>
        </div>
        <Slider {...settings}>
          <div className="testimonials-box">
            <div className="testimonials-rate">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="testimonials-text">
              <h2>NAME</h2>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem Ipsum Generator.
              </p>
            </div>
          </div>
          <div className="testimonials-box">
            <div className="testimonials-rate">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="testimonials-text">
              <h2>NAME</h2>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem Ipsum Generator.
              </p>
            </div>
          </div>
          <div className="testimonials-box">
            <div className="testimonials-rate">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="testimonials-text">
              <h2>NAME</h2>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem Ipsum Generator.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 3rem 0 !important;
  margin-top: 3rem !important;
  .container-fluid {
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section-title {
    text-align: center;
    margin: 0 0 50px 0;
  }
  .section-title h2 {
    font-weight: 600;
    font-size: 40px;
    letter-spacing: 0.07em;
  }
  .testimonials-box {
    width: 100%;
    display: block;
    text-align: center;
  }
  .testimonials-text h2 {
    letter-spacing: 0.2em;
  }
  .testimonials-text p {
    max-width: 1200px;
    margin: 10px auto 0;
    letter-spacing: 0.2em;
    font-size: 24px;
  }
  .testimonials-rate svg {
    margin-right: 10px;
  }
  .testimonials-rate {
    fill: #764215;
    color: #764215;
    letter-spacing: 0.6em;
    font-size: 29px;
    margin: 0 0 5px 0;
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-track {
    display: flex;
  }
  .slick-track {
    display: flex;
  }
  ul.slick-dots {
    display: flex !important;
    justify-content: center;
    margin: 30px 0 0 0;
  }
  ul.slick-dots button {
    border: none;
    background: #8a8a8a;
    font-size: 0;
    width: 15px;
    height: 15px;
    border-radius: 100px;
  }
  ul.slick-dots li {
    margin-right: 10px;
  }
  ul.slick-dots li.slick-active button {
    background: #f0444b;
  }
  ul.slick-dots li:last-child {
    margin: 0;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (max-width: 1199px) {
    .testimonials-text p {
      letter-spacing: 0.1em;
      font-size: 21px;
      max-width: 88%;
      margin: 0 auto;
    }
  }
  @media (max-width: 767px) {
    p {
      font-size: 18px !important;
    }
    padding-top: 0px !important;
  }
`;

export default Testimonials;

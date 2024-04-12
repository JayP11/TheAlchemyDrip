import React from "react";
import { useHomeContext } from "../context/home_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";

const OcassionsGrid = () => {
  const { categories } = useHomeContext();
  const { updateFilters } = useFilterContext();
  // console.log(categories);
  return (
    // <Section className="shop-sec pt-5">
    //   <div className="container-fluid">
    //     <div className="title">
    //       <h2>SHOP BY OCASSION</h2>
    //       <div className="underline"></div>
    //     </div>
    //     <div className="row justify-content-center">
    //       {categories.slice(8, 14).map((c, index) => {
    //         return (
    //           <div className="col-md-6" key={index}>
    //             <div className="product-box">
    //               <Link to={`/products`}  >

    //                 <img src={c.image_full_path} alt="" className="img-fluid" />
    //                 <div className="product-text" onClick={updateFilters}
    //                   type="button"
    //                   name="occasion"
    //                   value={c.name}>
    //                   <button
    //                     onClick={updateFilters}
    //                     type="button"
    //                     name="occasion"
    //                     value={c.name}
    //                   // className={${category === c.toLowerCase() ? "active" : null}}
    //                   >
    //                     {c.name}
    //                   </button>
    //                   </div>
    //               </Link>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </Section>
    <></>
  );
};

const Section = styled.section`
  padding: 50px 0 0 0;
  .product-box {
    position: relative;
    margin: 50px 0 0;
  }
  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .justify-content-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .container-fluid {
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col-md-6 {
    padding: 0 40px;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .product-box .product-text {
    background: rgb(178 134 84/0.4);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .section-title {
    text-align: center;
    margin: 0 0 20px 0;
  }
  .section-title h2 {
    font-weight: 600;
    font-size: 40px;
    letter-spacing: 0.07em;
  }
  .product-box .product-text span {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 19px;
  }
  .product-box {
    img {
      display: flex;
    }
  }

  .product-sec .row {
    margin-right: -50px;
    margin-left: -50px;
  }

  .product-sec [className*="col-"] {
    padding: 0 50px;
  }
  .product-text button {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: transparent;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (max-width: 1199px) {
    .product-box {
      position: relative;
      margin: 35px 0 0;
    }
    .col-md-6 {
      padding: 0 20px;
    }
  }
  @media (max-width: 767px) {
    .col-md-6 {
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
  }
`;

export default OcassionsGrid;

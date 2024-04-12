import React from "react";
import { useHomeContext } from "../context/home_context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeroCategories = () => {
  const { categories } = useHomeContext();
  return (
    <Section className="sell-section">
      <div className="sell-box">
        {categories.slice(5, 6).map((c, index) => {
          return (
            <div className="featured" key={index}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="sell-text">
                    <h3>500+</h3>
                    <p>{c.name}</p>
                    {c.name == "Ready to Ship" ? (
                      <a className="btn" href="/products">
                        Shop Now
                      </a>
                    ) : (
                      <Link
                        to=""
                        className="btn"
                        style={{ pointerEvents: "none", padding: "0.5rem" }}>
                        coming soon
                      </Link>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sell-img">
                    <img src={c.image_full_path} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    max-width: 80%;
  }
  .sell-box {
    // padding: 10px 0 0 0;
  }
  .sell-box .sell-img {
    height: 548px;
    overflow: hidden;
    text-align: center;
  }
  .sell-box .row.align-items-center {
    ${"" /* background: #f1d7c0; */}
    background: gray;
    padding: 30px 20px 20px 0;
  }
  .sell-box .col-md-6 {
    padding: 0;
  }
  .sell-box .sell-text {
    text-align: left;
    padding-left: 50px;
    ${"" /* padding: 0 0 0 110px; */}
  }
  .sell-box .sell-text h3 {
    color: var(--clr-white);
    letter-spacing: 0.3em;
    font-size: 78px;
    font-weight: 400;
  }
  .sell-box .sell-text p {
    letter-spacing: 0.3em;
    font-size: 36px;
    color: var(--clr-white);
    margin: 0 0 10px 0;
  }
  .sell-box .sell-text a.btn {
    border: 2px solid var(--clr-white);
    color: var(--clr-white);
    letter-spacing: 0.3em;
    padding: 0 30px;
    line-height: 45px;
    font-size: 21px;
    text-transform: uppercase;
    margin: 20px 0 0 0;
    width: 100%;
    max-width: 281px;
    display: block;
    text-align: center;
  }
  .align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (max-width: 1199px) {
    .featured {
      max-width: 100%;
      padding: 0 15px;
    }
  }
  @media (max-width: 1000px) {
    .sell-box {
      ${"" /* height: 450px; */}
      ${"" /* width: 400px; */}
    }
    .sell-img {
      height: 100%;
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .sell-box .row.align-items-center {
      padding: 0px;
    }
    .sell-img {
      padding: 30px 0 0 0;
    }
    .sell-img img {
      max-width: 100%;
    }
    .featured {
      max-width: 100% !important;
      padding: 0 15px;
      margin-top: 0px !important;
    }
    .sell-text {
      padding: 0 0 !important;
      text-align: center !important;
    }
    .sell-text a.btn {
      margin: 0 auto !important;
      display: block !important;
    }
    .sell-text h3 {
      font-size: 60px !important;
      letter-spacing: 0.2em !important;
    }
    .sell-text p {
      letter-spacing: 0.2em !important;
      font-size: 25px !important;
      line-height: normal;
      margin-bottom: 15px !important;
    }
  }
`;

export default HeroCategories;

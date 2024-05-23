import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import applogo from "../assets/googlepay-1.png";
// import ioslogo from "../assets/appstore-1.png";
// import shipping from "../assets/shipping.jpeg";
// import payment from "../assets/zc.png";
// import logo from "../assets/DSH-Logo.svg";
// import IImages from "../constants/IImages";

const Footer = () => {
  return (
    <Wrapper>
      <section className="footer_main_dv">
        <div className="footer-middle">
          <div className="container">
            {/* <div class="footer-ribbon bg-primary text-white ls-10">
              <div className="f-logo">
                <img
                  src={IImages.weblogo}
                  className="footer"
                />
              </div>
            </div> */}
            <div className="row">
              {/* <div className="col-md-4">
                <div className="widget">
                   <div className="f-logo">
                    <img src={IImages.weblogo} alt="the home use" />
                  </div> 
                  <h4 class="widget-title">Contact Info</h4>
                  <ul class="contact-info">
                    <li>
                      <span>
                        <span class="contact-info-label">Address : </span>
                        The Home Use,
                        <br />
                        10 Lati Plot Warehouses, <br />
                        Near Janta Weigh Bridge, <br />
                        Morbi Road, Rajkot – 360003, <br />
                        Gujarat-India. <br />
                      </span>
                    </li>
                  </ul>
                  <ul className="social-icon">
                    <li>
                      <a href="javascript:void(0)"><FaFacebookSquare /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><FaInstagramSquare /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><FaTwitterSquare /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><FaLinkedin /></a>
                    </li>
                  </ul> 
                </div>
              </div> */}
              <div className="col-md-9">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="widget">
                      <h4 class="widget-title">Quick links</h4>
                      <ul className="links link-parts">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/contactus">Contact</Link>
                        </li>
                        <li>
                          <Link to="/ShippingDeliveryPolicy">
                            Shipping & Delivery Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/ExchangeReturnPolicy">
                            Exchange Return And Refund
                          </Link>
                        </li>
                        <li>
                          <Link to="/TermsCondition">Terrm & Condition</Link>
                        </li>
                        <li>
                          <Link to="/PrivacyPolicy">Privacy Policy</Link>
                        </li>
                        {/* <li>
                          <Link to="/ExchangeReturnPolicy">
                            Exchange Return And Refund
                          </Link>
                        </li>
                        <li>
                          <Link to="/TermsCondition">
                            Term & Condition & Privacy Policy
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="widget">
                      <h4 class="widget-title">Social Sharing</h4>
                      <ul className="social-icon">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <FaFacebookSquare />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com" target="_blank">
                            <FaInstagramSquare />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com" target="_blank">
                            <FaTwitterSquare />
                          </a>
                        </li>
                        {/* <li>
                          <a href="javascript:void(0)">
                            <FaTwitterSquare />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <FaLinkedin />
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <ul class="contact-info">
                      <li>
                        <h4
                          class="widget-title"
                          style={{ marginBottom: "10px" }}
                        >
                          Phone
                        </h4>
                        <span>
                          {/* <a tel="+917575884885">+261 33 21 834 39</a> */}
                          <a href="tel:+918296485534">+91 82964 85534</a>
                        </span>
                      </li>
                      <li>
                        <h4
                          class="widget-title"
                          style={{ marginBottom: "10px" }}
                        >
                          Whatsapp
                        </h4>
                        <span>
                          <a
                            href="http://api.whatsapp.com/send?phone=8296485534&text=Let%27s%20Get%20in%20Touch"
                            target="_blank"
                          >
                            +91 82964 85534
                          </a>
                        </span>
                      </li>
                      <li>
                        <h4
                          class="widget-title"
                          style={{ marginBottom: "10px" }}
                        >
                          Email
                        </h4>
                        <span>
                          <p>
                            <a href="mailto:info@thealchemydrip.com">
                              Info@TheAlchemydrip.com{" "}
                            </a>
                          </p>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
              <div class="col-md-8">
                <p
                  class="footer-copyright py-3 pr-4 mb-0"
                  style={{ color: "rgb(151, 151, 151)" }}
                >
                  © 2024 The Alchemy Drip , All right reserved.
                </p>
              </div>
              <div class="col-md-0"></div>
              {/* <img src={payment} alt="payment methods" /> */}
            </div>
          </div>
        </div>
        <div className="f-link-btn">
          <a
            href="http://api.whatsapp.com/send?phone=82964 85534&text=Let%27s%20Get%20in%20Touch"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #222529 !important;
  color: #fff;
  .f-link-btn {
    position: fixed;
    bottom: 30px;
    z-index: 155555555;
    right: 30px;
  }
  section.footer_main_dv {
    position: relative;
  }
  .f-link-btn a {
    background-color: #4dc247 !important;
    color: #fff;
    height: 45px;
    display: flex;
    width: 45px;
    justify-content: center;
    align-items: center;
    font-size: 29px;
    border-radius: 100px;
    padding: 0 0 1px 0;
    cursor: pointer;
  }
  .footer-middle {
    padding: 5.8rem 0 1.2rem;
  }
  .container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .footer-ribbon {
    position: absolute;
    top: -110px;
    left: 1.5rem;
    min-width: 142px;
    padding: 8px 0;
    font-size: 1.3rem;
    line-height: normal;
    text-align: center;
  }
  .bg-primary {
    background-color: #fff !important;
  }
  .ls-10 {
    letter-spacing: 0.01em !important;
  }
  .text-white {
    color: #fff !important;
  }
  .footer-ribbon::before {
    display: block;
    position: absolute;
    top: 0;
    left: -15px;
    width: 0;
    height: 0;
    border-top: 17px solid transparent;
    border-right: 15px solid #504be2;
    content: "";
  }
  .widget {
    margin-bottom: 3rem;
  }
  .widget-title {
    color: #fff;
    font-size: 17px;
    letter-spacing: 0.01em;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 1.7rem;
  }
  .contact-info li {
    position: relative;
    margin-bottom: 1.3rem;
    line-height: 1.4;
  }
  [class*="col-"] {
    padding-left: 10px;
    padding-right: 10px;
  }
  .col-md-4 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
  }
  .contact-info li span {
    font-weight: 200;
    font-size: 14px;
    line-height: normal;
  }
  .contact-info li span a {
    color: #fff;
  }
  .contact-info li span.contact-info-label {
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
  }
  ul.social-icon {
    display: flex;
    align-items: center;
  }
  ul.social-icon li {
    color: #fff;
    border: 1px solid;
    border-radius: 100px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 0 0 0;
    margin-right: 9px;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  ul.social-icon li svg {
    color: #fff;
    font-size: 16px;
  }
  ul.social-icon li:hover {
    ${"" /* background: #504be2; */}
    background: var(--clr-primary-indianred);
    transition: all 0.5s ease;
  }
  ul.links.link-parts a {
    ${"" /* font-size: 12px; */}
    line-height: 24px;
    color: #afafaf;
  }
  .col-sm-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-md-9 {
    -ms-flex: 0 0 75%;
    /* flex: 0 0 75%;
    max-width: 75%; */
    flex: 0 0 100%;
    max-width: 100%;
  }
  ul.download-btn {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  ul.download-btn img {
    max-width: 130px;
    border-radius: 5px;
  }
  ul.download-btn li {
    margin-right: 15px;
  }
  // .col-md-8 {
  //   -ms-flex: 0 0 66.666667%;
  //   flex: 0 0 66.666667%;
  //   max-width: 66.666667%;
  // }
  .footer-bottom {
    padding: 1.5rem 0;
    border-top: 1px solid #313438;
    -ms-flex-align: center !important;
    align-items: center !important;
    display: flex;
  }
  .f-logo img {
    /* max-width: 70%; */
    height: 45px;
    width: 200px;
    margin: 0 10px;
  }
  p.footer-copyright {
    margin: 0;
  }
  .footer-bottom img {
    max-width: 360px;
    margin-left: auto;
  }
  @media screen and (max-width: 1199px) {
    ul.download-btn {
      flex-direction: column;
      justify-content: start !important;
      align-items: self-end !important;
    }
    ul.download-btn img {
      max-width: 180px !important;
    }
  }
  @media (min-width: 768px) {
    .container {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media screen and (max-width: 767px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-9 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .container {
      padding: 0 15px;
    }
    .col-sm-4 {
      max-width: 100%;
      flex: 0 0 100%;
    }
    ul.download-btn {
      flex-direction: unset !important;
    }
    .footer-bottom {
      flex-wrap: wrap;
    }
    ul.download-btn img {
      max-width: 180px !important;
      width: 100%;
    }
    ul.shipping img {
      max-width: 100%;
    }
    .footer-bottom img {
      max-width: 360px;
      width: 100%;
    }
    p.footer-copyright {
      text-align: center;
      font-size: 14px;
      padding: 0 0 10px 0;
      display: inline-block;
    }
  }
`;

export default Footer;

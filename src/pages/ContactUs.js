import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { contact_us } from "../utils/constants";
import axios from "axios";
import Notification from "../utils/Notification";
import { mobileValidate, emailValidate } from "../utils/helpers";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  window.scrollTo(0, 0);
  const [show, setShow] = React.useState();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [city_id, setcity_id] = useState("");
  const [message, setmessage] = useState("");

  const mContactus = async () => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexpMobile = /^[0-9\b]+$/;

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("message", message);
    formData.append("country_id", 101);
    formData.append("state_id", 12);
    formData.append("city_id", "779");
    console.log("formData contact us ", formData);
    if (firstname == "") {
      Notification("error", "Error!", "Please enter your Name!");
      return;
    } else if (email == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else if (regEx.test(email) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (number == "") {
      Notification("error", "Error!", "Please enter your Number!");
      return;
    } else if (message == "") {
      Notification("error", "Error!", "Please enter your Message!");
      return;
    }

    const response = await axios
      .post(contact_us, formData, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .catch((error) => console.error(`Error: ${error}`));
    if (response.data.success == 1) {
      setfirstname("");
      setlastname("");
      setemail("");
      setnumber("");
      setcity_id("");
      setmessage("");

      Notification(
        "success",
        "Success!",
        "form has been successfully submitted"
      );
      return;
    } else {
      Notification("error", "Error!", "please enter valid data!");
      return;
    }
    console.log("response contact us ", response.data);
  };

  return (
    <>
      <Section className="contact-us contact_main">
        <Helmet>
          <title>The Alchemy Drip</title>
          <meta name="description" content="About Us | The Alchemy Drip" />
        </Helmet>
        <div className="container-fluid">
          <div className="row row-margin-bottom">
            <div className="col-md-6">
              <h2 className="con-heading">Contact Us</h2>
              <h3 className="con-sub-heading">Have a question? Need help?</h3>
              <p className="con-txt">
                We'd love to hear from you - please use the form to send us your
                message or ideas.
              </p>
              <b className="con-txt">
                The Alchemy Drip,
                <br />
                4, 7th Main Rd, Bhuvaneshwari Nagar, Banashankari, Bengaluru,
                Karnataka 560085, India
                <br />
              </b>
              <br />
              <ul>
                <li>
                  <p
                    className="con-txt"
                    style={{
                      color: "black",
                      fontWeight: "700",
                      marginBottom: "0px",
                    }}>
                    Email: &nbsp;
                    <a
                      href="mailto:info@thealchemydrip.com"
                      style={{ color: "black", fontWeight: "400" }}>
                      info@thealchemydrip.com
                    </a>
                  </p>
                </li>
                <li>
                  {/* <span>Phone:</span>+91 98792 06540 / 9099977117 */}
                  {/* <span>Phone:</span>+91 1234 884 885 */}
                  <p
                    className="con-txt"
                    style={{ color: "black", fontWeight: "700" }}>
                    Phone: &nbsp;
                    <a
                      href="tel:+918296485534"
                      style={{ color: "black", fontWeight: "400" }}>
                      +91 82964 85534
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <div className="input-row">
                  <label>First Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                  />
                </div>
                <div className="input-row">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>
                {/* <div className="input-row">
                  <label>City *</label>
                  <input
                    type="text"
                    placeholder=""
                    value={city_id}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div> */}
                <div className="input-row">
                  <label>Your Phone *</label>
                  <input
                    type="text"
                    placeholder=""
                    // type="text"
                    name="field-name"
                    value={number}
                    maxLength={10}
                    onChange={(e) => {
                      if (mobileValidate(e.target.value)) {
                        setnumber(e.target.value);
                      }
                    }}
                    // placeholder=""
                  />
                </div>
                <div className="input-row">
                  <label>Your Email *</label>
                  <input
                    type="text"
                    placeholder=""
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div className="input-row">
                  <label>Your Comment *</label>
                  <textarea
                    placeholder="Please leave comment here..."
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}></textarea>
                </div>
                <div className="input-row">
                  <a
                    href="javascript:void(0)"
                    onClick={() => mContactus()}
                    className="btn">
                    SUBMIT CONTACT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  ${"" /* padding: 150px 0 0 0; */}
  margin-top: 50px;
  .container-fluid {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .contact_main {
    border: 1px solid;
  }
  .row-margin-bottom {
    border: 3px solid;
    margin: 0 auto;
    margin-bottom: 60px;
    border-radius: 15px;
    padding: 1rem;
  }
  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 15px;
  }
  .con-heading {
    letter-spacing: var(--spacing);
    color: var(--clr-heading-main);
    font-size: 2.5rem;
    margin: 0 0 40px 0;
    text-transform: capitalize !important;
  }
  .con-sub-heading {
    color: var(--clr-heading-main);
    letter-spacing: var(--spacing);
    margin: 0 0 25px 0;
  }
  .con-txt {
    margin: 0 0 20px 0;
    max-width: 610px;
    font-size: 18px;
    letter-spacing: 0.1em;
  }
  ul li {
    letter-spacing: 0.1em;
    margin: 0 0 6px 0;
  }
  ul li span {
    margin: 0 10px 0 0px;
  }
  .contact-form .input-row {
    margin: 0 0 20px 0;
  }
  .contact-form label {
    color: #2a2929;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 300;
    margin: 0 0 5px 0;
    display: inline-block;
  }
  .contact-form input[type="text"] {
    background: #f0f0f0;
    border: none;
    width: 100%;
    line-height: 42px;
    padding: 0 10px;
  }
  .contact-form .input-row textarea {
    display: block;
    width: 100%;
    height: 170px;
    background: #f0f0f0;
    border: none;
    padding: 10px;
    color: #000;
  }
  .input-row a.btn {
    ${"" /* background: var(--clr-heading-main); */}
    color: var(--clr-primary-1);
    letter-spacing: 0.2em;
    font-size: 18px;
    text-transform: uppercase;
    ${"" /* padding: 0 35px; */}
    line-height: 45px;
    margin: 20px 0 0 0;
  }
  @media (max-width: 767px) {
    padding: 1rem 0 0 0;
    .col-md-6 {
      max-width: 100%;
      flex: 0 0 100%;
    }
    .contact-form {
      padding: 60px 0 0 0;
    }
  }

  .login-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .login-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .login-img {
    text-align: center;
  }
  .login-img img {
    max-width: 100%;
  }
  .login-form img {
    max-width: 220px;
  }
  .login-form h2 {
    margin: 7px 0 15px 0;
    font-size: 29px;
    letter-spacing: 0.1em;
    color: #000;
  }
  .login-form p {
    max-width: 95%;
    letter-spacing: 0.1em;
    margin: 0 0 25px 0;
  }
  .login-form form .input-row {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 350px;
    width: 100%;
    padding: 5px 0 10px 60px;
    background: #e5eaea;
    border-radius: 5px;
    margin: 0 0 20px 0;
    transition: all 0.5s ease;
  }
  .login-form form .input-row svg {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: #b1b1b1;
    font-size: 20px;
  }
  .login-form form .input-row label {
    font-size: 15px;
  }
  .login-form form .input-row input {
    background: transparent;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    color: #444;
  }
  .login-form form .input-row:focus,
  .login-form form .input-row:hover {
    background: #ffffff;
    box-shadow: 0px 0px 8px 2px rgb(25 25 25/0.2);
    transition: all 0.5s ease;
  }
  .login-form ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 350px;
  }
  .login-form ul a {
    font-size: 12px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #969696;
    font-weight: 400;
  }
  .login-form ul a svg {
    margin-right: 5px;
    color: #969696;
    font-size: 15px;
  }
  .login-form ul a.show svg {
    color: #5e9c6f;
  }
  .login-button {
    padding: 15px 0 20px 0;
  }
  .login-button button {
    border: none;
    background: transparent;
    border-radius: 182px;
    padding: 14px 25px 14px;
    letter-spacing: 0.1em;
    color: #000;
    box-shadow: 0px 0px 8px 0px rgb(0 0 0/0.2);
    margin-right: 20px;
    font-size: 14px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .login-button button.btn-login {
    background: #4ec2cd;
    color: #fff;
    transition: all 0.5s ease;
  }
  .login-button button.btn-login:hover {
    background: #fff;
    color: #000;
    transition: all 0.5s ease;
  }
  .login-button button:hover {
    background: #4ec2cd;
    color: #fff;
    transition: all 0.5s ease;
  }
  .social-icon {
    padding: 10px 0 0 0;
  }
  .social-icon span {
    font-size: 13px;
  }
  .social-icon ul {
    justify-content: unset !important;
    margin: 5px 0 0 0;
  }
  .social-icon ul li {
    margin-right: 7px;
    background: #fff;
    box-shadow: 0px 0px 12px 0px rgb(0 0 0/0.2);
    border-radius: 100px;
    padding: 8px 10px 4px 10px;
    cursor: pointer;
  }
  .social-icon ul li svg {
    font-size: 16px;
  }
  .login-screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15555;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-screen .login-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0 0 0/ 0.4);
    cursor: pointer;
  }
  .login-screen .loging-container {
    position: relative;
    z-index: 155;
    background: #fff;
    max-width: 1190px;
    padding: 40px 0 40px 0;
    margin: 0 auto;
    border-radius: 10px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0/0.2);
    width: 30px;
    text-align: center;
    padding: 5px 2px 1px 2px;
    border-radius: 100px;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    .login-row {
      flex-direction: column-reverse;
    }
    .login-row .login-6 {
      max-width: 100%;
      flex: 0 0 100%;
      padding: 0 30px;
    }
    .loging-container {
      overflow-y: scroll;
      height: 100%;
    }
    @media screen and (max-width: 400px) {
      .container-fluid {
        padding: 1rem;
      }
    }
  }
`;
export default ContactUs;

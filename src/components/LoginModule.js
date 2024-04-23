import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import loginimg from "../assets/loginimg1.png";
import Notification from "../utils/Notification";
import { getcampus, login_url as url, WEB_CLIENT_ID } from "../utils/constants";
import { signup_url as urlsignup } from "../utils/constants";
import { mobileValidate } from "../utils/helpers";
import IImages from "../constants/IImages";
import { MdFormatListNumbered, MdSchool } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LoginModule = ({ showscreen, setShowlogin }) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\x]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexpMobile = /^[0-9\b]+$/;
  const { setLogin, setSignUp, isLogin, logoutUser } = useUserContext();

  const [show, setShow] = React.useState();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [mobile, setMobile] = useState("");
  const [getDivision, setDivision] = useState("");
  const [getRoll, setRoll] = useState("");
  const [getCampusinput, setCampusinput] = useState("");
  const [signuptype, setSignupType] = useState(1); // 1: login, 2: signup
  const [getCampus, setCampus] = useState([]);

  const getCampusApi = async () => {
    try {
      const response = await axios.get(getcampus, {
        headers: {
          Accept: "application/x.uniform.v1+json",
        },
      });
      const getcampus1 = response.data.data;
      // console.log("getcampus", getcampus1);
      setCampus(getcampus1);
    } catch (error) {}
    // const response = await axios.get(url);
  };

  useEffect(() => {
    getCampusApi();
  }, []);
  let history = useHistory();

  const mLogin = async () => {
    if (email == "") {
      alert("Please enter your email ID!");
      // Notification("error", "Error!", "Please enter your email ID!");
      return;
    } else if (regEx.test(email) == false) {
      alert("Please enter valid email id!");
      return;
    } else if (password == "") {
      alert("Please enter your password!");
      return;
    }

    var params = {
      email: email,
      password: password,
    };

    setLogin(params, url);
    // const data = await mLogin(params);
    // if (data) {
    //   if (data.success == 1) {
    //     history.push("/Propage/" + data.data[0].slug);
    //   }
    // }
  };

  function mSignUp() {
    if (email == "") {
      alert("Please enter your email ID!");
      // Notification("error", "Error!", "Please enter your email ID!");
      return;
    } else if (regEx.test(email) == false) {
      // Notification("error", "Error!", "Please enter valid email id!");
      alert("Please enter valid email id!");
      return;
    } else if (password == "") {
      // Notification("error", "Error!", "Please enter your password!");
      alert("Please enter your password!");
      return;
    } else if (username == "") {
      // Notification("error", "Error!", "Please enter your name!");
      alert("Please enter your name!");
      return;
    } else if (mobile == "") {
      // Notification("error", "Error!", "Please enter your number!");
      alert("Error!", "Please enter your number!");
      return;
    } else if (getDivision == "") {
      // Notification("error", "Error!", "Please enter your Division!");
      alert("Please enter your Division!");
      return;
      // }
      // else if (getRoll == "") {
      //   Notification("error", "Error!", "Please enter your Roll number!");
      //   return;
    } else if (getCampusinput == "") {
      alert("Please enter select campus!");
      return;
    }
    var params = {
      email: email,
      password: password,
      name: username,
      number: mobile,
      class_division: getDivision,
      roll_number: getRoll,
      campus_id: getCampusinput,
    };
    setLogin(params, urlsignup);
  }

  const setSignOut = () => {
    logoutUser();
  };

  const handleSocialLogin = (user) => {
    console.log(user);
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  return (
    <Wrapper className="cart-btn-wrapper">
      <div className={showscreen ? "show login-screen" : " login-screen "}>
        <div
          className="login-bg"
          onClick={() => setShowlogin(!showscreen)}></div>
        <div className="loging-container">
          <div className="close" onClick={() => setShowlogin(!showscreen)}>
            <FaTimes />
          </div>
          <div className="login-row">
            <div className="login-6">
              <div
                className="login-logo"
                style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={IImages.logo}
                  alt="Logo"
                  style={{
                    height: "130px",
                    paddingBottom: "1rem",
                  }}
                />
              </div>
              <div className="login-img">
                <img src={loginimg} alt="" />
              </div>
            </div>
            {signuptype == 1 ? (
              <div className="login-6">
                <div className="login-form">
                  {/* <div className="login-logo">
                    <img src={IImages.logo} alt="Logo" />
                  </div> */}
                  <h2>Welcome Back :)</h2>
                  <p>
                    {/* Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the{" "} */}
                  </p>
                  <form>
                    <div className="input-row">
                      <FaEnvelope />
                      <label style={{ textAlign: "left" }}>Email Address</label>
                      <input
                        type="text"
                        placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-row">
                      <FaLock />
                      <label style={{ textAlign: "left" }}>Password</label>
                      <input
                        type="password"
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </form>
                  <ul>
                    <li>
                      <a
                        onClick={() => setShow(!show)}
                        href="javascript:void(0)"
                        className={show ? "show" : ""}>
                        <FaCheckCircle /> Remember Me{" "}
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Forget Password?</a>
                    </li>
                  </ul>
                  <div className="login-button" style={{ display: "flex" }}>
                    <button
                      className="btn-login"
                      onClick={() => {
                        mLogin();
                        setShowlogin(!showscreen);
                      }}>
                      Login Now
                    </button>
                    <button className="btn" onClick={() => setSignupType(2)}>
                      Create Account
                    </button>
                  </div>
                  {/* <div className="social-icon">
                    <span>Or you can join with</span>
                    <ul>
                      <li><FaFacebook /></li>
                      <li><FaGoogle /></li>
                    </ul>
                  </div> */}
                </div>
              </div>
            ) : (
              <div className="login-6">
                <div className="login-form">
                  {/* <div className="login-logo">
                    <img src={IImages.logo} alt="Logo" />
                  </div> */}
                  <h2>Welcome to The Alchemy Drip :)</h2>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the{" "}
                  </p> */}
                  <form>
                    <div className="input-row" style={{ marginBottom: "1rem" }}>
                      <FaUser />
                      <label>Student Name</label>
                      <input
                        type="text"
                        placeholder="Enter Student Name"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="input-row" style={{ marginBottom: "1rem" }}>
                      <FaEnvelope />
                      <label>Email Address</label>
                      <input
                        type="text"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-row" style={{ marginBottom: "1rem" }}>
                      <FaLock />
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="input-row" style={{ marginBottom: "1rem" }}>
                      <FaPhoneAlt />
                      <label>Number</label>
                      <input
                        type="text"
                        placeholder="Enter Phone Number"
                        maxLength={10}
                        value={mobile}
                        onChange={(e) => {
                          if (mobileValidate(e.target.value)) {
                            setMobile(e.target.value);
                          }
                        }}
                      />
                    </div>
                    <div className="input-row" style={{ marginBottom: "1rem" }}>
                      <SiGoogleclassroom />
                      <label>Class & Division</label>
                      <input
                        type="text"
                        placeholder="Enter Class & Division"
                        value={getDivision}
                        onChange={(e) => setDivision(e.target.value)}
                      />
                    </div>
                    {/* <div className="input-row" style={{ marginBottom: "1rem" }}>
                      <MdFormatListNumbered />

                      <label>Roll number</label>
                      <input
                        type="text"
                        placeholder="Enter Roll number"
                        value={getRoll}
                        onChange={(e) => setRoll(e.target.value)}
                      />
                    </div> */}
                    <div className="input-row" action="#">
                      <MdSchool />
                      <label>Campus</label>

                      <select
                        className="dropdown_career"
                        name="Campus"
                        id="lang"
                        style={{
                          background: "transparent",
                          border: "none",
                          width: "96%",
                        }}
                        onChange={(e) => setCampusinput(e.target.value)}>
                        {getCampus && getCampus.length <= 0 ? (
                          <></>
                        ) : (
                          <>
                            <option value={""}>Select Campus</option>
                            {getCampus.map((item, index) => {
                              return (
                                <>
                                  <option value={item.id}>{item.name}</option>
                                </>
                              );
                            })}
                          </>
                        )}
                      </select>
                    </div>
                  </form>
                  <ul>
                    <li>
                      <a
                        onClick={() => setShow(!show)}
                        href="javascript:void(0)"
                        className={show ? "show" : ""}>
                        <FaCheckCircle /> Remember Me{" "}
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Forget Password?</a>
                    </li>
                  </ul>
                  <div className="login-button" style={{ display: "flex" }}>
                    <button className="btn" onClick={() => setSignupType(1)}>
                      Login Now
                    </button>
                    <button className="btn-login" onClick={mSignUp}>
                      Create Account
                    </button>
                  </div>
                  {/* <div className="social-icon">
                    <span>Or you can join with</span>
                    <ul>
                      <SocialLogin
                        provider='facebook'
                        appId='1165605173945308'
                        callback={handleSocialLogin}
                      >
                        <button>Login with Facebook</button>
                      </SocialLogin>
                      <SocialLogin
                        provider='google'
                        appId={WEB_CLIENT_ID}
                        callback={handleSocialLogin}
                      >
                        <button>Login with Google</button>
                      </SocialLogin>
                      
                    </ul>
                  </div> */}
                  {/* <SocialButton
                        provider='google'
                        appId={WEB_CLIENT_ID}
                        onLoginSuccess={handleSocialLogin}
                        onLoginFailure={handleSocialLoginFailure}
                      >
                        Login with GOogle
                      </SocialButton> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  align-items: center;
  width: 225px;
  z-index: -10;
  .cart-btn {
    color: var(--clr-white);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-white);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-white);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  @media (max-width: 991px) {
    span.cart-container svg {
      fill: #000;
      olor: #000 !important;
    }
    svg {
      fill: #000;
      color: #000 !important;
    }
  }
  @media (max-width: 767px) {
    svg {
      fill: #000;
      color: #000 !important;
    }
  }
  .login-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-around;
  }
  .login-6 {
    flex: 0 0 50%;
    max-width: 40%;
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
    ${"" /* margin: 0 0 20px 0; */}
    transition: all 0.5s ease;
  }
  .show.login-screen {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
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
    width: 170px;
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
    ${"" /* background: var(--clr-primary-5); */}
    background: var(--clr-primary-darkred);
    color: #fff;
    transition: all 0.5s ease;
  }
  .login-button button.btn-login:hover {
    background: #fff;
    color: #000;
    transition: all 0.5s ease;
  }
  .login-button button:hover {
    ${"" /* background: var(--clr-primary-5); */}
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
    transform: translateY(-100%);
    transition: all 0.5s ease;
    opacity: 0;
    visibility: hidden;
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
    ${"" /* margin: 0 auto; */}
    margin: 0 1rem;
    border-radius: 10px;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
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
  }
  @media screen and (max-width: 503px) {
    .login-button {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
  }
`;
export default LoginModule;

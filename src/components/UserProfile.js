import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useUserContext } from "../context/user_context";
import { mobileValidate } from "../utils/helpers";

const UserProfile = () => {
  const { logintoken, logindata, updateUserDetails } = useUserContext();
  // console.log("logindata aaa", logindata);
  const [username, setUserName] = React.useState(
    logindata ? logindata.name : ""
  );
  const [mobile, setMobile] = React.useState(logindata ? logindata.number : "");
  const [isActive, setActive] = useState(true);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const mUpdateProfile = () => {
    var params = {
      name: username,
      number: mobile,
    };
    console.log("update details");
    updateUserDetails(params, logintoken);
    toggleClass();
  };
  return (
    <Wrapper>
      {isActive ? (
        logindata ? (
          <div className="my_profile_inside">
            <h2>Personal Information</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="inner_profile_in">
                  <p>
                    ID Number<span>{logindata.id_no} </span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inner_profile_in">
                  <p style={{textTransform:"capitalize"}}>
                    Name<span>{logindata.name}</span>
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="inner_profile_in">
                  <p>
                    Email ID<span>{logindata.email}</span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inner_profile_in">
                  <p>
                    Mobile Number<span>{logindata.number}</span>
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-primary profile_btn"
                  onClick={toggleClass}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        <div className="my_profile_inside">
          <h2>Edit Profile</h2>
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control forms_inputs"
                    name="Name"
                    required=""
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              {/* 
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control forms_inputs"
                    name="email"
                    required=""
                    placeholder="Email Id"
                   
                  />
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control forms_inputs"
                    name="Name"
                    required=""
                    maxLength={10}
                    placeholder="Mobile no."
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  {/* <input
                    type="text"
                    className="form-control forms_inputs"
                    name="text"
                    required=""
                    placeholder="Mobile Number"
                    // maxLength={10}
                    value={c}
                    onChange={(e)=>{if(mobileValidate(e.target.value)){
                      setMobile(e.target.value)

                    }}}
                  /> */}
                </div>
              </div>
            </div>
            <div className="mb-2"></div>

            <div className="form-footer">
              <div className="form-footer-center edit_profile_f">
                <button
                  type="submit"
                  className="btn btn-primary profile_btn"
                  onClick={mUpdateProfile}>
                  Update
                </button>
                <button
                  type="submit"
                  className="btn btn-primary profile_btn"
                  onClick={toggleClass}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .my_profile_inside {
    width: 100%;
    display: inline-block;
    background-color: #eee;
    padding: 30px;
    ${'' /* min-height: 598px; */}
    .row {
      margin-left: -10px;
      margin-right: -10px;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      .col-md-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        padding-left: 10px;
        padding-right: 10px;
      }
      .col-md-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
      }
    }
    .inner_profile_in {
      width: 70%;
      display: inline-block;
      padding: 15px 0px;
      border-bottom: 1px solid #cecece;
      margin-bottom: 20px;
      p {
        font-size: 16px;
        color: #000;
        font-weight: 500;
        span {
          display: block;
          padding: 15px 0px 0px;
          font-weight: 400;
          ${"" /* color: #828080; */}
        }
      }
    }

    .form-group {
      margin-bottom: 45px;
      .form-control.forms_inputs {
        height: 35px;
        border: none;
        padding: 0;
        transition: all 0.3s;
        border-bottom: 1px solid #929292;
        border-radius: 0;
        background-color: transparent;
        ${"" /* color: #959799; */}
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        max-width: 100%;
        margin-bottom: 0;
        width: 100%;
      }
      .slect_pst {
        background-color: transparent;
        height: 35px !important;
        padding: 7px 0px !important;
        border: none;
        border-bottom: 1px solid #929292;
        font-size: 16px !important;
        font-weight: 400;
        line-height: 24px;
        color: #959799;
        -moz-appearance: none;
        width: 100%;
      }
    }
    .form-check-inline {
      display: -ms-inline-flexbox;
      display: inline-flex;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 0;
      margin-right: 0.75rem;
      .form-check-input {
        position: static;
        margin-top: 0;
        margin-right: 0.3125rem;
        margin-left: 0;
      }
      .form-check-label {
        margin-bottom: 0;
        font-size: 16px;
        font-weight: 400;
        color: #959799;
        margin-right: 30px;
        margin: 0 20px 0rem 0px;
      }
    }
    .form-footer {
      text-align: center;
      width: 100%;
      button {
        margin: 0 15px;
      }
    }
  }

  @media screen and (max-width: 575px) {
    .my_profile_inside {
      padding: 30px 15px;
      .row {
        .col-md-6 {
          flex: 0 0 100%;
          max-width: 100%;
          .inner_profile_in {
            max-width: 100%;
            width: 100%;
            padding-bottom: 10px;
            p {
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }
`;

export default UserProfile;

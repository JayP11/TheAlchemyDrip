import React, { useEffect } from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useAddressContext } from "../context/address_context";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import Notification from "../utils/Notification";
import axios from "axios";
import Modal from "react-modal";
import { FaPlusCircle, FaHome, FaCheckCircle } from "react-icons/fa";
import { mobileValidate, emailValidate } from "../utils/helpers";
import { CHECKOUT_SCREEN } from "../utils/constants";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const UserAddress = (props) => {
  let subtitle;
  const { isLogin, logintoken } = useUserContext();
  const {
    addAddress,
    get_address_data,
    get_countrylist,
    getCountries,
    getStates,
    get_statelist,
    getAddress,
    deleteAddress,
    editAddress,
  } = useAddressContext();

  console.log("addressn are", get_address_data);
  const [firstname, setFirstname] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [_state, setStateAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [postalcode, setPostalCode] = React.useState("");
  const [showlist, showAddressList] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false); // add address modal
  const [addressId, setAddressId] = React.useState(""); // add address modal
  const [isEdit, setEditType] = React.useState(false); // add address modal
  const [screenType, setScreen] = React.useState(
    props.screenType ? props.screenType : 0
  ); // add address modal

  useEffect(() => {
    getCountries();
    getAddress(logintoken);
  }, []);

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("token"));
    if (login !== "") {
      getAddress(login);
      console.log("123");
    } else {
      console.log("error");
    }

    getCountries();
  }, []);
  // console.log(
  //   "🚀 ~ file: UserAddress.js:73 ~ UserAddress ~ get_countrylist:",
  //   get_countrylist
  // );

  const mDeleteAddress = async (id) => {
    let formData = new FormData(); //formdata object
    // formData.append(`address_id_no`, payment_types)
    formData.append(`id`, id);
    deleteAddress(formData, logintoken);
  };
  // edit address
  const mEditAddress = async (item) => {
    setEditType(true);
    setAddressId(item.id);

    setFirstname(item.fullname);
    setMobile(item.number);
    setCountry(item.country_id);
    setCity(item.city_id);
    setAddress(item.address);
    setPostalCode(item.pincode);
    var params = {
      country_id: item.country_id,
    };
    getStates(params);
    setStateAddress(item.state_id);
    openModal();
  };

  const addNewAddress = async () => {
    setEditType(false);

    setFirstname("");
    setMobile("");
    setCountry("");
    setCity("");
    setAddress("");
    setPostalCode("");
    setStateAddress("");
    openModal();
  };
  const re = /^[A-Za-z]+$/;
  const mAddAddress = async () => {
    if (firstname == "") {
      Notification("error", "Error!", "Please enter full name!");
      return;
    }
    // else if (re.test(firstname) == false) {
    //   Notification("error", "Error!", "Please enter valid  firstname");
    //   return;
    // }

    if (mobile == "") {
      Notification("error", "Error!", "Please enter mobile number!");
      return;
    }
    if (mobile.length < 10 || mobile.length > 10) {
      // alert("Enter valid mobile number...");
      Notification("error", "Error!", "Enter valid mobile number...");
      return;
    }

    if (address == "") {
      Notification("error", "Error!", "Please enter address!");
      return;
    }
    if (postalcode == "") {
      Notification("error", "Error!", "Please enter postal code!");
      return;
    }

    if (country == "") {
      Notification("error", "Error!", "Please select country!");
      return;
    }
    if (_state == "") {
      Notification("error", "Error!", "Please select state!");
      return;
    }
    if (city == "") {
      Notification("error", "Error!", "Please enter city!");
      return;
    }

    let formData = new FormData();

    formData.append(`fullname`, firstname);
    formData.append(`number`, mobile);
    formData.append(`pincode`, postalcode);
    formData.append(`address`, address);
    formData.append(`city_id`, city);
    formData.append(`state_id`, _state);
    formData.append(`country_id`, country);
    formData.append(`is_status`, 1);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    if (isEdit) {
      formData.append(`id`, addressId);
      editAddress(formData, logintoken);
    } else {
      addAddress(formData, logintoken);
    }
    closeModal();
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const mSelectAddress = async (item) => {
    if (screenType == CHECKOUT_SCREEN) {
      // await setSelectAddress(item.id)
      props.mSelectAddress(item.id);
    }
  };
  return (
    <main>
      <Wrapper className="page">
        <section className="section-big-py-space b-g-light">
          <div className="col-lg-9 order-lg-last dashboard-content">
            <div className="card card_bg_color">
              <div
                onClick={() => addNewAddress()}
                className="card-header"
                type="button"
                data-toggle="modal"
                data-target="#AddressModal">
                <i className="fa" aria-hidden="true">
                  <FaPlusCircle />
                </i>
                &nbsp; Add New Address
              </div>
              {get_address_data.map((item, index) => {
                return (
                  <div
                    onClick={() => mSelectAddress(item)}
                    className={
                      props.selectedAddId == item.id
                        ? "card-body active"
                        : "card-body deactive"
                    }>
                    <div className="row">
                      <div className="col-md-9">
                        <div className="addressList">
                          <h4>
                            <i className="fas" style={{ marginLeft: "7px" }}>
                              <FaHome />
                            </i>
                            {item.fullname}
                            {props.selectedAddId == item.id ? (
                              <div className="check">
                                <FaCheckCircle />
                              </div>
                            ) : null}
                          </h4>
                          <address>Mobile : {item.number}</address>
                          <address>
                            {item.address} - {item.city_id}
                          </address>
                          <address>
                            {item.state_name}, {item.country_name} -{" "}
                            {item.pincode}
                          </address>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div
                          className="actions_btns"
                          style={{ marginLeft: "2rem" }}>
                          <div className="left_edit">
                            <a
                              href="javascript:void(0);"
                              onClick={() => mEditAddress(item)}>
                              Edit
                            </a>
                          </div>
                          <div className="right_delete">
                            <a
                              href="javascript:void(0);"
                              onClick={() => mDeleteAddress(item.id)}>
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <Innermodal>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <div className="checkout-page contact-page">
              <div className="checkout-form">
                <div className="theme-form">
                  <div className="row check-out ">
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="field-name"
                        placeholder=""
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                    {/* <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <label>Last Name</label>
                      <input type="text" name="field-name" value={lastname}
                        onChange={(e) => setLastname(e.target.value)} placeholder="" />
                    </div> */}
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <label className="field-label">Phone</label>
                      <input
                        type="text"
                        name="field-name"
                        value={mobile}
                        maxLength={10}
                        onChange={(e) => {
                          if (mobileValidate(e.target.value)) {
                            setMobile(e.target.value);
                          }
                        }}
                        placeholder=""
                      />
                    </div>

                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <label className="field-label">Address</label>
                      <input
                        type="text"
                        name="field-name"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street address"
                      />
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <label className="field-label">Country</label>
                      <select
                        value={country}
                        onChange={(e) => {
                          setCountry(e.target.value);
                          var params = {
                            country_id: e.target.value,
                          };
                          setStateAddress("");
                          getStates(params);
                        }}>
                        <option value={""}>Select Country</option>
                        {get_countrylist.map((country, index) => {
                          return (
                            <option value={country.id}>{country.name}</option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <label className="field-label">State</label>
                      <select
                        value={_state}
                        onChange={(e) => {
                          setStateAddress(e.target.value);
                        }}>
                        <option value={""}>Select State</option>

                        {get_statelist.map((states, index) => {
                          return (
                            <option value={states.state_id}>
                              {states.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <label className="field-label">City</label>
                      <input
                        type="text"
                        name="field-name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder=""
                      />
                    </div>

                    <div className="form-group col-md-12 col-sm-6 col-xs-12">
                      <label className="field-label">Postal Code</label>
                      <input
                        type="text"
                        name="field-name"
                        value={postalcode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder=""
                      />
                    </div>

                    <div className="text-right">
                      <a
                        href="javascript:void(0)"
                        className="btn-normal btn"
                        onClick={mAddAddress}>
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Innermodal>
        </Modal>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  .card {
    margin-bottom: 3rem;
    border: 1px solid #ddd;
    border-radius: 0;
    font-size: 1.4rem;
  }
  .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    .card-header {
      margin: 0;
      line-height: 1.5;
      text-transform: uppercase;
      border: none;
      font-size: 16px;
      padding: 16px 20px;
      text-align: left;
      width: 100%;
      background-color: var(--clr-primary-darkred);
      -webkit-appearance: none;
      color: #fff;
      font-weight: 400;
      cursor: pointer;
      :first-child {
        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
      }
      i {
        position: relative;
        bottom: -2px;
      }
    }
    .card-body.deactive {
      background: #fff !important;
    }
    .card-body.active {
      background: #eee !important;
    }
    .card-body {
      min-height: auto;
      border-radius: 0;
      background-color: #fff;
      border-top: 1px solid #eee;
      padding: 0px;
      position: relative;
      cursor: pointer;
      .active {
        background-color: #ff0;
      }
      .deactive {
        background-color: #fff;
      }
      :nth-child(odd) {
        background-color: #eee;
      }
      .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -10px;
        margin-left: -10px;
        .col-md-9 {
          -ms-flex: 0 0 75%;
          flex: 0 0 75%;
          max-width: 75%;
        }
        .col-md-3 {
          -ms-flex: 0 0 25%;
          flex: 0 0 25%;
          max-width: 25%;
          .actions_btns {
            width: 100%;
            display: flex !important;
            margin-top: 0px;
            .left_edit {
              width: 70px;
              float: left;
            }
            .right_delete {
              width: 125px;
              float: right;
            }
            a {
              padding: 8px;
              text-decoration: none;
              ${"" /* color: #48c0cb; */}
              color: var(--clr-primary-darkred);
              font-size: 12px;
              .edit_delete {
                float: left;
                width: 20px;
                height: 20px;
              }
            }
          }
        }
        [className*="col-"] {
          padding-left: 10px;
          padding-right: 10px;
        }
        .addressList {
          width: 100%;
          display: block;
          padding: 16px 20px 20px 50px;
          position: relative;
          h4 {
            margin-bottom: 5px;
            font-size: 16px;
            line-height: 24px;
            color: #333;
            font-weight: 700;
            i {
              margin-right: 10px;
              font-size: 26px;
              position: absolute;
              left: 10px;
            }
            .check {
              display: inline-block;
              padding: 0 0 0 5px;
              svg {
                fill: green;
                position: relative;
                top: 3px;
              }
            }
          }
          address {
            margin-bottom: 0px;
            font-style: normal;
            line-height: inherit;
            font-size: 16px;
            color: #333;
            font-weight: 400;
            word-break: break-word;
          }
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .col-md-9,
    .col-md-3 {
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
  }
`;

const Innermodal = styled.section`
  max-width: 700px;
  max-height: 80vh;
  .top-group {
    margin: 8px 0 20px 0 !important;
    padding: 0px !important;
  }
  .top-group label {
    font-size: 14px !important;
  }
  h2.section__title {
    font-size: 16px;
    letter-spacing: 0.1em;
  }
  .row.check-out .text-right {
    padding: 0 0 0 10px;
  }
  .or-sec {
    display: flex;
    align-items: center;
    margin: 0 0 40px 0;
  }
  .or-sec span {
    width: 100%;
    background: #000;
    height: 1px;
  }
  p.layout-flex__item a {
    color: #ed232a;
    margin: 0 0 0 5px;
  }
  .or-sec p {
    margin: 0;
    padding: 0 15px;
  }
  .layout-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 5px 0;
  }
  .custom-container {
    max-width: 1650px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .contact-page .theme-form {
    padding: 30px;
    background-color: #ffffff;
    border: 30px solid #f3f7f8;
    margin: 30px 0 70px 0;
  }
  .col-lg-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 50%;
    padding: 0 15px;
  }
  .col-md-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 50%;
    padding: 0 15px;
  }
  .col-md-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 100%;
    padding: 0 15px;
  }
  .contact-page .theme-form label {
    text-transform: capitalize;
    color: #333333;
    font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 600;
    margin: 0 0 4px 5px;
    display: inline-block;
  }
  .checkout-page {
    .checkout-title {
      margin-bottom: 25px;

      h3 {
        color: $font-color;
        font-weight: 700;
        font-size: 24px;
      }
    }

    .checkout-form {
      .check-out {
        .form-group {
          &:last-child {
            margin-bottom: -5px;

            label {
              margin-bottom: -5px;
            }
          }
        }
      }

      .form-group {
        position: relative;
        margin-bottom: 25px;

        h3 {
          color: #444444;
          font-weight: 700;
          margin-bottom: 30px;
          margin-top: 30px;
        }

        .field-label {
          line-height: 24px;
          text-transform: capitalize;
          color: $font-color;
          margin-bottom: 10px;
          font-weight: 700;

          span {
            font-size: 16px;
            color: #444444;
            font-weight: 600;
          }
        }

        label {
          color: $font-color;
        }
      }

      select {
        cursor: pointer;
        appearance: none;
        background: url(../images/dropdown.png) no-repeat 95%;
      }

      input {
        &[type="text"],
        &[type="email"],
        &[type="password"],
        &[type="tel"],
        &[type="number"],
        &[type="url"] {
          width: 100%;
          padding: 0 22px;
          height: 45px;
          border: 1px solid #dddddd;
        }
      }

      select,
      textarea {
        width: 100%;
        padding: 0 22px;
        height: 45px;
        background: $white;
        border: 1px solid #dddddd;
      }
    }

    .check-box {
      line-height: 24px;
      font-size: 14px;
      font-weight: normal;
      padding-top: 5px;

      label {
        position: relative;
        top: -1px;
        font-weight: normal;
        padding: 0;
        font-size: 16px;
        cursor: pointer;
        color: $font-color;
      }
    }

    .lower-content {
      margin-top: 30px;

      .order-column {
        margin-bottom: 40px;
      }
    }
  }

  .order-box {
    position: relative;
    margin-bottom: 50px;
    .title-box {
      position: relative;
      padding-bottom: 25px;
      color: #444444;
      font-weight: 600;
      font-size: 22px;
      border-bottom: 1px solid #dddddd;
      margin-bottom: 20px;

      span {
        position: relative;
        width: 35%;
        float: right;
        line-height: 1.2em;
      }
    }

    .qty {
      position: relative;
      border-bottom: 1px solid #dddddd;
      margin-bottom: 30px;

      li {
        position: relative;
        display: block;
        font-size: 15px;
        color: #444444;
        line-height: 20px;
        margin-bottom: 20px;

        span {
          float: right;
          font-size: 18px;
          line-height: 20px;
          color: $font-color;
          font-weight: 400;
          width: 35%;
        }
      }
    }

    .sub-total {
      position: relative;
      border-bottom: 1px solid #dddddd;
      margin-bottom: 30px;

      li {
        position: relative;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        color: $font-color;
        line-height: 20px;
        margin-bottom: 20px;
        width: 100%;

        .count {
          position: relative;
          font-size: 18px;
          line-height: 20px;
          color: #00baf2;
          font-weight: 400;
          width: 35%;
          float: right;
        }
      }

      .shopping-option {
        label {
          position: relative;
          font-size: 16px;
          line-height: 32px;
          padding-left: 10px;
          color: #444444;
        }
      }

      .shipping {
        width: 35%;
        float: right;
      }
    }

    .total {
      position: relative;
      margin-bottom: 40px;

      li {
        position: relative;
        display: block;
        font-weight: 400;
        color: $font-color;
        line-height: 20px;
        margin-bottom: 10px;
        font-size: 18px;

        .count {
          position: relative;
          font-size: 18px;
          line-height: 20px;
          color: #00baf2;
          font-weight: 400;
        }

        span {
          float: right;
          font-size: 15px;
          line-height: 20px;
          color: #444444;
          font-weight: 400;
          width: 35%;
          display: block;
        }
      }
    }
  }

  .payment-box {
    position: relative;

    .upper-box {
      position: relative;
    }

    .btn-normal {
      text-transform: uppercase;
    }

    .payment-options {
      position: relative;
      margin-top: 20px;
      margin-bottom: 30px;

      li {
        display: flex;
        margin-bottom: 15px;

        .radio-option {
          position: relative;

          label {
            position: relative;
            padding-left: 30px;
            text-transform: capitalize;
            color: #444444;
            cursor: pointer;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 0;
          }

          input[type="radio"] {
            position: absolute;
            left: 0;
            top: 5px;
          }

          label {
            .small-text {
              position: relative;
              display: none;
              font-size: 15px;
              line-height: 25px;
              font-weight: 300;
              color: #666666;
              margin-top: 10px;
            }

            img {
              position: relative;
              display: block;
              max-width: 100%;
              margin-left: -30px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
  .col-lg-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .iconbox.style1 {
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    background-color: #fff;
    position: relative;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .iconbox.style1:before {
    content: "";
    position: absolute;
    border-style: solid;
    z-index: 5;
    border-radius: 8px;
    box-sizing: content-box;
    width: 100%;
    top: -1px;
    left: 0;
    height: 100%;
    border-color: var(--clr-primary-5);
    border-width: 1px 0 1px 0;
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    transform: scaleX(0);
  }
  .iconbox.style1:hover:before {
    transform: scaleX(1);
  }
  .iconbox.style1:after {
    content: "";
    position: absolute;
    border-style: solid;
    z-index: 5;
    border-radius: 8px;
    box-sizing: content-box;
    width: 100%;
    top: 0px;
    left: -1px;
    height: 100%;
    ${"" /* border-color: var(--clr-primary-5); */}
    border-width: 0 1px 0 1px;
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    transform: scaleY(0);
  }
  .iconbox.style1:hover:after {
    transform: scaleY(1);
  }
  .iconbox.style1 .box-header .image {
    display: inline-block;
    width: 40%;
  }
  .row .col-md-3:nth-child(1) .iconbox.style1 .box-header .box-title {
    padding-left: 33px;
  }
  .row .col-md-3:nth-child(3) .iconbox.style1 .box-header .box-title {
    padding-left: 48px;
  }
  .row .col-md-3:nth-child(4) .iconbox.style1 .box-header .box-title {
    padding-left: 8px;
  }
  .iconbox.style1 .box-header .image:before {
    display: none;
  }
  .iconbox.style1 .box-header .box-title {
    text-align: left;
    display: inline-block;
    width: 58%;
    padding-left: 20px;
    vertical-align: middle;
  }
  .iconbox.style1 .box-header .box-title h3 {
    font-size: 18px;
    margin: 0;
    line-height: 22px;
    font-weight: 300;
    color: #2d2d2d;
  }
  .iconbox.style1.v1 {
    box-shadow: 0px 2px 3px 0px rgba(234, 234, 234, 1);
    border: none;
  }
  .container {
    width: 1170px;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
  }
  .box-header .image {
    position: relative;
    height: 88px;
    line-height: 88px;
    text-align: center;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  section.flat-row.flat-iconbox.style5 {
    padding: 20px 0 70px;
  }
  .box-header {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 991px) {
    .col-lg-6.col-sm-12.col-xs-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .theme-form {
      margin-bottom: 0px !important;
    }
  }
  @media screen and (max-width: 767px) {
    .col-lg-3.col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
      margin-bottom: 17px;
    }
  }
  @media screen and (max-width: 575px) {
    .form-group.col-md-6.col-sm-6.col-xs-12 {
      flex: 0 0 100%;
      padding: 0px !important;
    }
    .form-group.col-md-12.col-sm-12.col-xs-12 {
      padding: 0px;
    }
    .layout-flex {
      flex-direction: column;
    }
    .form-group.col-md-12.col-sm-6.col-xs-12 {
      padding: 0;
    }
    .sub-total .shipping {
      width: 50% !important;
      float: right;
    }
    .custom-container {
      padding: 0px !important;
    }
    .checkout-details.theme-form.section-big-mt-space,
    .contact-page .theme-form {
      padding: 15px;
      border-width: 9px;
    }
    .col-md-12 {
      padding: 0px !important;
    }
    .form-group.top-group {
      display: flex;
      align-items: flex-start;
    }
    .form-group.top-group input#account-opt {
      margin: 7px 0 0 0;
    }
  }
  @media screen and (max-width: 350px) {
    .sub-total .shipping {
      width: 100% !important;
      float: left !important;
    }
  }
`;
export default UserAddress;

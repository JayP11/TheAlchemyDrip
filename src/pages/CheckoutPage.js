import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";

import { PageHero, StripeCheckout, UserAddress } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { useOrderContext } from "../context/place_order_context";

import icon1 from "../assets/car.png";
import icon2 from "../assets/order.png";
import icon3 from "../assets/payment.png";
import icon4 from "../assets/returnOrder.png";
import { formatPrice } from "../utils/helpers";
import { CHECKOUT_SCREEN, get_payment_id } from "../utils/constants";
import LoginModule from "../components/LoginModule";
import Notification from "../utils/Notification";
import axios from "axios";
import { useAddressContext } from "../context/address_context";
import { mobileValidate, emailValidate } from "../utils/helpers";
import Razorpay from "razorpay";
import createNotification from "../utils/Notification";

// import web_logo2 from "../assets/web_logo2.png";

const re = /^[A-Za-z]+$/;
const CheckoutPage = () => {
  const history = useHistory();
  // window.scrollTo(0, 0);

  const { cart, total_amount, shipping_fees, clearCart, orderResponse } =
    useCartContext();
  const { isLogin, logintoken, logindata } = useUserContext();
  const { setOrder, order_data, login_loading, setOrderGuest } =
    useOrderContext();

  const { get_countrylist, getCountries, getStates, get_statelist } =
    useAddressContext();
  const [showscreen, setShowlogin] = React.useState();
  // const [payment_type, Type] = React.useState("1");
  const [payment_type, setPaymentType] = React.useState("1"); // 1- razorpay, 2-paypal, 3-cod

  // console.log("checkput ----->",cart[0].sizeid);
  // address
  const [email, setEmail] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [_state, setStateAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [postalcode, setPostalCode] = React.useState("");
  const [selectedAddId, setSelectAddress] = React.useState(0);

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (isLogin) {
      setShowlogin(false);
    }
  }, [isLogin]);

  useEffect(() => {}, [order_data]);

  const mSelectAddress = (id) => {
    setSelectAddress(id);
  };

  const token = JSON.parse(localStorage.getItem("token"));
  const placeOrder = async () => {
    if (cart.length == 0) {
      Notification("error", "Error!", "Please select product!");
      return;
    }
    if (payment_type == "") {
      Notification("error", "Error!", "Please select payment type!");
      return;
    }
    if (selectedAddId == 0 || selectedAddId == "") {
      Notification("error", "Error!", "Please select address!");
      return;
    }

    var payment_types = "";
    if (payment_type === "1") {
      payment_types = "online";
    } else if (payment_type === "2") {
      payment_types = "others";
    } else if (payment_type === "3") {
      payment_types = "cod";
    } else {
      null();
    }
    let formData = new FormData(); //formdata object
    formData.append(`payment_type`, payment_types);
    formData.append(`shipping_address_id`, selectedAddId);
    formData.append(`billing_address_id`, selectedAddId);
    formData.append(`currency`, "INR");
    formData.append(`gst_no`, "test");
    formData.append(`device_id`, "bx7ftm5vhdm5c78pqr9l");
    formData.append(`gst_no`, "test");

    for (var i = 0; i < cart.length; i++) {
      formData.append(`product_id[${i}]`, cart[i].idmain);
      // formData.append(`color_id[${i}]`, cart[i].color);
      formData.append(`color_id[${i}]`, 1);
      formData.append(`size_id[${i}]`, cart[i].sizeid);
      // formData.append(`size_id[${i}]`, 1);
      // formData.append(`size_id[${i}]`, cart[i].size);
      formData.append(`main_price[${i}]`, cart[i].price);
      formData.append(`price[${i}]`, cart[i].price);
      formData.append(`quantity[${i}]`, cart[i].amount);
      // formData.append(`refe_id[${i}]`, cartArray[i].refe_id ? cartArray[i].refe_id : '')
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    var order_data = await setOrder(formData, token);

    if (payment_type == 1 && order_data) {
      displayRazorpay(order_data.detail.order_id, total_amount, order_data);
    } else if (order_data.success == 1) {
      Notification("success", "", order_data.message);
      clearCart();
      history.push("/");
    }

    console.log("response order ", order_data);
  };
  //

  const onInputChange = (e) => {
    const { value } = e.target;
    console.log("Input value: ", value);

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setFirstname(value);
    }
  };

  const onInputChange1 = (e) => {
    const value = e.target.value;
  };
  // place order as guest without login
  const placeOrderGuest = async () => {
    if (email == "") {
      Notification("error", "Error!", "Please enter email ID!");
      return;
    }
    if (firstname == "") {
      Notification("error", "Error!", "Please enter full name!");
      return;
    }
    if (mobile == "") {
      Notification("error", "Error!", "Please enter mobile number!");
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
    if (payment_type == "") {
      Notification("error", "Error!", "Please select payment type!");
      return;
    }

    var payment_types = "";
    if (payment_type == 1) {
      payment_types = "online";
    } else {
      payment_types = "cod";
    }
    let formData = new FormData(); //formdata object
    formData.append(`payment_type`, payment_types);
    formData.append(`currency`, "INR");
    formData.append(`email`, email);
    formData.append(`name`, firstname);
    formData.append(`number`, mobile);
    formData.append(`pincode`, postalcode);
    formData.append(`address`, address);
    formData.append(`city_id`, city);
    formData.append(`state_id`, _state);
    formData.append(`country_id`, country);
    for (var i = 0; i < cart.length; i++) {
      formData.append(`product_id[${i}]`, cart[i].idmain);
      formData.append(`color_id[${i}]`, cart[i].color);
      formData.append(`size_id[${i}]`, cart[i].sizeid);
      formData.append(`main_price[${i}]`, cart[i].price);
      formData.append(`price[${i}]`, cart[i].price);
      formData.append(`quantity[${i}]`, cart[i].amount);
      // formData.append(`refe_id[${i}]`,   cartArray[i].refe_id ? cartArray[i].refe_id : '')
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    var order_data = await setOrderGuest(formData, logintoken);

    if (payment_type == 1 && order_data) {
      displayRazorpay(order_data.detail.order_id, total_amount, order_data);
    } else if (order_data.success == 1) {
      Notification("success", "", order_data.message);
      clearCart();
      history.push("/");
    }
    console.log("order_data 12121", orderResponse);
  };

  async function displayRazorpay(order_id, total_amount) {
    console.log("order_id from api in => displayRazorpay", order_id);

    var res = await loadScript();
    console.log("res => in displayRazorpay function", res);

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    var names = "dsh";
    if (logindata) {
      names = logindata.name;
    }
    var options = {
      // key: "rzp_live_EGIRrud6dPuubI",
      // key: "rzp_test_PcJbHDcGhcGxlv",
      // key: "rzp_test_OP1ZatqCXyH2Zq", //test
      key: "rzp_live_0w1C4me9f1dfrt",

      currency: "INR",
      order_id: order_id,
      name: "The Alchemy Drip",
      description: "Transaction",
      amount: total_amount,
      prefill: {
        name: names,
      },
      // image: "https://applified.co.in/dsh//public/logos/1626349162-200X200.png",
      // image: web_logo2,

      handler: async function (response) {
        console.log(
          "Response => get_payment_id api after razorpay payment",
          response
        );

        var formData = new FormData();
        formData.append("razorpay_payment_id", response.razorpay_payment_id);
        formData.append("razorpay_order_id", response.razorpay_order_id);
        formData.append("razorpay_signature", response.razorpay_signature);

        for (var pair of formData.entries()) {
          console.log("Body => ", pair[0] + ", " + pair[1]);
        }

        var myRes = await axios.post(get_payment_id, formData, {
          headers: {
            Accept: "application/x.uniform.v1+json",
            // "Authorization": "Bearer ".concat(token)
          },
        });
        console.log(
          "Response => get_payment_id api after razorpay payment------",
          myRes.data
        );

        if (myRes && myRes.data.success == 1) {
          Notification("success", "", myRes.data.message);

          clearCart();
          history.push("/");
          // alert('Payment Successfully\n Order Placed Successfully \n ')
        } else if (myRes && myRes.data.success == 0) {
          alert(myRes.data.message);
        }

        // Notification("success", "", order_data.message);
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  function loadScript() {
    return new Promise((res) => {
      var myScript = document.createElement("script");
      myScript.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(myScript);
      myScript.onload = () => {
        res(true);
      };
      myScript.onerror = () => {
        res(false);
      };
      document.body.appendChild(myScript);
    });
  }
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        <section className="section-big-py-space b-g-light">
          <div className="section-center products">
            <div className="checkout-page contact-page">
              <div className="checkout-form">
                <form>
                  <div className="row custom-grid">
                    {isLogin ? (
                      <div className="col-md-4">
                        <UserAddress
                          screenType={CHECKOUT_SCREEN}
                          selectedAddId={selectedAddId}
                          mSelectAddress={mSelectAddress}
                        />
                      </div>
                    ) : (
                      <div className="col-lg-6 col-sm-12 col-xs-12 form">
                        <div className="theme-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="layout-flex">
                                <h2 className="section__title">
                                  Contact information{" "}
                                </h2>
                                <p className="layout-flex__item">
                                  <span aria-hidden="true">
                                    Already have an account?
                                  </span>
                                  <a
                                    href="javascript:void(0)"
                                    onClick={() => setShowlogin(!showscreen)}>
                                    Log in
                                  </a>
                                </p>
                              </div>
                              <div className="email_or_phone">
                                <input
                                  type="text"
                                  name="field-name"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Email or mobile phone number"
                                />
                              </div>
                              <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12 top-group checkoutt-checkbox">
                                <input
                                  type="checkbox"
                                  name="shipping-opt"
                                  id="account-opt"
                                />
                                <label for="account-opt">
                                  Keep me up to date on news and offers
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="or-sec">
                            <span></span>
                            <p>OR</p>
                            <span></span>
                          </div>
                          <div className="row check-out ">
                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                              {/* <label>Full Name</label> */}
                              <input
                                type="text"
                                name="field-name"
                                placeholder="Enter Full Name"
                                value={firstname}
                                onChange={onInputChange}
                              />
                            </div>
                            {/* <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <label>Last Name</label>
                      <input type="text" name="field-name" value={lastname}
                        onChange={(e) => setLastname(e.target.value)} placeholder="" />
                    </div> */}
                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                              {/* <label className="field-label">Phone</label> */}
                              <input
                                type="text"
                                name="field-nmber"
                                value={mobile}
                                maxLength={10}
                                onChange={(e) => {
                                  if (mobileValidate(e.target.value)) {
                                    setMobile(e.target.value);
                                  }
                                }}
                                placeholder="Enter Phone Number"
                              />
                            </div>

                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                              {/* <label className="field-label">Address</label> */}
                              <input
                                type="text"
                                name="field-address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Street address"
                              />
                            </div>
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                              {/* <label className="field-label">Country</label> */}
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
                                    <option value={country.id}>
                                      {country.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                              {/* <label className="field-label">State</label> */}
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
                              {/* <label className="field-label">City</label> */}
                              <input
                                type="text"
                                name="field-name"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Enter City"
                              />
                            </div>

                            <div className="form-group col-md-12 col-sm-6 col-xs-12">
                              {/* <label className="field-label">Postal Code</label> */}
                              <input
                                type="text"
                                name="field-name"
                                value={postalcode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                placeholder="Enter Postal Code"
                              />
                            </div>

                            <div className="text-right">
                              <a
                                href="javascript:void(0)"
                                className="btn-normal btn"
                                onClick={placeOrderGuest}>
                                Submit
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="col-lg-6 col-sm-12 col-xs-12 left">
                      <div className="checkout-details theme-form  section-big-mt-space">
                        <div className="order-box">
                          <div className="title-box">
                            <div>
                              Product <span>Total</span>
                            </div>
                          </div>
                          <ul className="qty">
                            {cart.map((item) => {
                              return (
                                <li style={{ textTransform: "capitalize" }}>
                                  {item.name}{" "}
                                  <span>{formatPrice(item.price)}</span>
                                </li>
                              );
                            })}
                          </ul>
                          {/* <ul className="sub-total">
                            <li>
                              Subtotal{" "}
                              <span className="count">
                                {formatPrice(total_amount)}
                              </span>
                            </li>
                            <li>
                              Shipping
                              <div className="shipping">
                                <div className="shopping-option">
                                  <input
                                    type="checkbox"
                                    name="free-shipping"
                                    id="free-shipping"
                                  />
                                  <label for="free-shipping">
                                    Free Shipping
                                  </label>
                                </div>
                                <div className="shopping-option">
                                  <input
                                    type="checkbox"
                                    name="local-pickup"
                                    id="local-pickup"
                                  />
                                  <label for="local-pickup">Local Pickup</label>
                                </div>
                              </div>
                            </li>
                          </ul> */}
                          <ul className="total">
                            <li>
                              Total
                              <span className="count">
                                {formatPrice(total_amount)}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="payment-box">
                          <div className="upper-box">
                            <div className="payment-options">
                              <ul>
                                <div className="radio-option">
                                  <input
                                    type="radio"
                                    value="3"
                                    checked={payment_type === "3"}
                                    onChange={() => setPaymentType("3")}
                                  />

                                  <label>Cash On Delivery</label>
                                </div>
                                <div className="radio-option">
                                  <input
                                    type="radio"
                                    value="2"
                                    checked={payment_type === "2"}
                                    onChange={() => {
                                      setPaymentType("2");
                                      console.log("type is", payment_type);
                                    }}
                                  />
                                  <label>Pick from store</label>
                                </div>
                                <div className="radio-option">
                                  <input
                                    type="radio"
                                    value="1"
                                    checked={payment_type === "1"}
                                    onChange={() => {
                                      setPaymentType("1");
                                      console.log("type is", payment_type);
                                    }}
                                  />
                                  <label>Razorpay</label>
                                </div>
                                {/* <div className="col-lg-3 col-md-6"> */}
                                <div className="payment-option-list-main">
                                  {/* <div className="box-header">
                                    <div className="image">
                                      <img src={icon2} alt="" />
                                    </div>
                                    <div className="box-title">
                                      <h3>Order Online Service</h3>
                                    </div>
                                    <div className="clearfix"></div>
                                  </div> */}

                                  <ul
                                    className="online-pay-option"
                                    style={{ listStyleType: "circle" }}>
                                    <li className="online-pay-option-sub">
                                      Card
                                    </li>
                                    <li className="online-pay-option-sub">
                                      UPI / QR
                                    </li>
                                    <li className="online-pay-option-sub">
                                      Netbanking
                                    </li>
                                    <li className="online-pay-option-sub">
                                      Wallet
                                    </li>
                                    <li className="online-pay-option-sub">
                                      EMI
                                    </li>
                                    <li className="online-pay-option-sub">
                                      Pay Later
                                    </li>
                                  </ul>
                                </div>

                                {/* </div> */}
                                {/* <div className="radio-option">
                                  <input
                                    type="radio"
                                    value="2"
                                    checked={payment_type === "2"}
                                    onChange={() => setPaymentType("2")}
                                    
                                  />
                                  <label>
                                    PayPal
                                  </label>
                                </div> */}

                                {/* <li>
                                  <div className="radio-option">
                                    <input type="radio" id="1" value="1" checked={payment_type === "1"} onChange={e => setPaymentType("1")} />
                                    <label for="payment-1">Razorpay<span className="small-text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span></label>
                                  </div>
                                </li>
                                <li>
                                  <div className="radio-option">
                                    <input type="radio" id="2" value="2" checked={payment_type === "2"} onChange={e => setPaymentType("2")} />
                                    <label for="payment-2">PayPal<span className="small-text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span></label>
                                  </div>
                                </li>
                                <li>
                                  <div className="radio-option paypal">
                                    <input type="radio" name="payment-group" id="3" value={'3'} checked={payment_type === '3' ? true : false} onChange={e => setPaymentType('3')} />
                                    <label for="payment-3">Cash On Delivery</label>
                                  </div>
                                </li> */}
                              </ul>
                            </div>
                          </div>
                          {isLogin ? (
                            <div className="text-right">
                              <a
                                href="javascript:void(0)"
                                className="btn-normal btn"
                                onClick={placeOrder}>
                                Place Order
                              </a>
                            </div>
                          ) : (
                            <div className="text-right">
                              <a
                                href="javascript:void(0)"
                                className="btn-normal btn"
                                onClick={placeOrderGuest}>
                                Login/Guest
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="flat-row flat-iconbox style5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="iconbox style1">
                  <div className="box-header">
                    <div className="image">
                      <img src={icon1} alt="" />
                    </div>
                    <div className="box-title">
                      <h3>Worldwide Shipping</h3>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="iconbox style1">
                  <div className="box-header">
                    <div className="image">
                      <img src={icon2} alt="" />
                    </div>
                    <div className="box-title">
                      <h3>Order Online Service</h3>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="iconbox style1">
                  <div className="box-header">
                    <div className="image">
                      <img src={icon3} alt="" />
                    </div>
                    <div className="box-title">
                      <h3>Payment</h3>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="iconbox style1">
                  <div className="box-header">
                    <div className="image">
                      <img src={icon4} alt="" />
                    </div>
                    <div className="box-title">
                      <h3>Return 30 Days</h3>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LoginModule showscreen={showscreen} setShowlogin={setShowlogin} />
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  .top-group {
    margin: 8px 0 5px 0 !important;
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
    margin: 0 0 20px 0;
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
        margin-bottom: 15px;

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
          ${"" /* color: #00baf2; */}
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
          ${"" /* color: #00baf2; */}
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
    ${"" /* border-color: var(--clr-primary-5); */}
    border-color: var(--clr-primary-darkred);
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
    border-color: var(--clr-primary-darkred);
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

  .row.custom-grid {
    .col-md-4,
    .col-lg-6.col-sm-12.col-xs-12.form {
      max-width: 38%;
      padding-top: 30px;
    }
    .col-lg-6.col-sm-12.col-xs-12.left {
      width: 62%;
    }
    .col-lg-6.col-sm-12.col-xs-12.form {
      padding-top: 0;
      .layout-flex {
        flex-direction: column;
      }
      .form-group.col-md-6.col-sm-6.col-xs-12 {
        flex: 0 0 100%;
      }
    }
  }

  .checkoutt-checkbox {
    display: flex;
    gap: 15px;
  }

  .payment-option-list-main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #e5e5e5;
    width: 300px;
    border-radius: 8px;
  }
  .online-pay-option {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    list-style: circle !important;
    /* gap: 5px; */
  }

  .online-pay-option-heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px !important;
  }

  .online-pay-option-sub {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 0px !important;
  }

  @media screen and (max-width: 1199px) {
    .section-center {
      width: 95vw;
    }
    .row.custom-grid {
      .col-md-4 {
        max-width: 100%;
        ${"" /* padding-top: 30px; */}
        padding: 30px 15px 0 15px;
        flex: 0 0 100%;
      }
      .col-lg-6.col-sm-12.col-xs-12.left {
        width: 100%;
      }
    }
    .checkout-form .row.custom-grid .col-lg-6.col-sm-12.col-xs-12.form {
      max-width: 100%;
      width: 100%;
    }

    ${
      "" /* .col-lg-9 order-lg-last dashboard-content{
      padding:0 15px;
    } */
    }
    .page {
      min-height: calc(60vh - (20vh + 10rem));
    }
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
    .qty li {
      display: flex !important;
      flex-direction: column !important;
      text-align: left !important;
      float: left !important;
      span {
        float: left !important;
        text-align: left !important;
      }
    }
  }
  @media screen and (max-width: 350px) {
    .sub-total .shipping {
      width: 100% !important;
      float: left !important;
    }
  }
`;
export default CheckoutPage;

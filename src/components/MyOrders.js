/* eslint-disable no-script-url */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

import {
  FaFileInvoice,
  FaWindowClose,
  FaDownload,
  FaExchangeAlt,
} from "react-icons/fa";
import { useOrderContext } from "../context/place_order_context";
import { useUserContext } from "../context/user_context";
import Modal from "react-modal";
import axios from "axios";
import { get_order_details_url } from "../utils/constants";
import { Radio } from "antd";
import Notification from "../utils/Notification";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom/cjs/react-router-dom";

const MyOrders = () => {
  const {
    getOrdersList,
    my_order_list,
    single_order_details,
    getSingleOrderDetails,
    returnOrder,
    downloadInvocie,
  } = useOrderContext();
  // console.log(
  //   "🚀 ~ file: MyOrders.js:32 ~ MyOrders ~ my_order_list:",
  //   my_order_list
  // );
  const { isLogin, logintoken } = useUserContext();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openCancelModal, setCancelMOdal] = useState(false);
  const [orderDetailsObject, setOrderDetailsObject] = useState({});
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [selected_payment_return_mode, paymentMode] = useState(null);
  const [open_order_number, setOrderNumber] = useState(null);
  // console.log('my_order_list ', my_order_list)

  const login = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    // const login =  localStorage.getItem("token");
    const login = JSON.parse(localStorage.getItem("token"));

    if (login !== "") {
      getOrdersList(login);
    } else {
      console.log("error");
    }
  }, []);

  useEffect(() => {
    setOrderDetailsObject(single_order_details);
  }, [single_order_details]);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const getClickedOrderDetails = async (id, type) => {
    try {
      setSelectedOrder([]);
      paymentMode(null);
      setOrderNumber(null);
      setOrderDetailsObject({});
      setOrderNumber(id);
      getSingleOrderDetails(id, login);

      if (type == 1) {
        openModal();
      } else {
        setCancelMOdal(true);
      }
    } catch (error) {
      console.log("order details error ", error);
    }
  };

  const removeOrder = async (item) => {
    var addedItemIndex = await compareItem(selectedOrder, item);

    var newArroption = [];
    if (addedItemIndex == -1) {
      // temp.push(item)
      newArroption = [...selectedOrder, item.id];

      await setSelectedOrder(newArroption);
    } else {
      var newArrChecked = selectedOrder.filter((a) => a !== item.id);
      await setSelectedOrder(newArrChecked);
    }
  };

  const selectAllDefult = async () => {
    if (orderDetailsObject.order_lines.length > 0) {
      for (let i = 0; i < orderDetailsObject.order_lines.length; i++) {
        await removeOrder(orderDetailsObject.order_lines[i]);
      }
    }
  };
  const _returnFullOrder = async (item) => {
    if (orderDetailsObject.order_lines.length > 0) {
      if (selected_payment_return_mode == null) {
        Notification(
          "error",
          "Error!",
          "Please select return payment mode type !"
        );
        return;
      }
      var orderId = "";
      if (selectedOrder.length > 0) {
        orderId = selectedOrder
          .map((item) => {
            return item;
          })
          .join(",");
      } else {
        Notification("error", "Error!", "Please select order !");
        return;
      }

      var body = new FormData();
      body.append("order_lines_id", orderId);
      body.append("order_number", open_order_number);
      body.append("is_return_status", selected_payment_return_mode);

      for (var pair of body.entries()) {
      }
      returnOrder(body, login);
    }
  };
  const compareItem = (filterArray, checkedItem) => {
    for (var i = 0; i < filterArray.length; i++) {
      if (filterArray[i] == checkedItem.id) {
        return i;
      }
    }
    return -1;
  };

  const mDownloadInvoice = (mID) => {
    var params = {
      order_number: mID,
    };
    downloadInvocie(params);
  };
  return (
    <Wrapper style={{ maxHeight: "500px", overflow: "scroll" }}>
      <div className="wallet_inside">
        <div className="col-md-12 col-lg-12 col-sm-12 col-12">
          <div className="notification_head">
            <h3>My Order</h3>
          </div>
        </div>
        <div className="col-lg-9 order-lg-last dashboard-content">
          <div className="order_history">
            <div className="table table-responsive-sm table-responsive-md table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Order Date</th>
                    <th>Order ID</th>
                    <th>Order Total</th>
                    <th>Order Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {my_order_list &&
                    my_order_list.map((item, index) => {
                      return (
                        <tr>
                          <td>{item.created_at}</td>
                          <td>{item.order_number}</td>
                          {/* <td>{item.formated_total_price}</td> */}
                          {/* <td>{formatPrice(item.formated_total_price)}</td> */}
                          <td>{formatPrice(item.total_price)}</td>
                          {item.order_status_id == "1" ? (
                            <td className="cancelled_order">Waiting</td>
                          ) : item.order_status_id == "2" ? (
                            <td className="cancelled_order">Preparing</td>
                          ) : item.order_status_id == "3" ? (
                            <td className="cancelled_order">On the way</td>
                          ) : item.order_status_id == "4" ? (
                            <td className="delevered_order">Completed</td>
                          ) : item.order_status_id == "5" ? (
                            <td className="cancelled_order">Cancelled</td>
                          ) : item.order_status_id == "6" ? (
                            <td className="cancelled_order">Returned</td>
                          ) : (
                            ""
                          )}
                          <td>
                            <div
                              className="actions_btns_list"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}>
                              <a
                                href="javascript:void(0);"
                                onClick={() =>
                                  getClickedOrderDetails(item.id, 1)
                                }
                                title="View order">
                                <i className="">
                                  <FaFileInvoice />
                                </i>
                              </a>
                              {/* <a
                                href="javascript:void(0);"
                                onClick={() =>
                                  getClickedOrderDetails(item.id, 2)
                                }
                                title="Cancel order">
                                <i className="">
                                  <FaWindowClose />
                                </i>
                              </a> */}
                              {/* <a
                                href="javascript:void(0);"
                                title="Download invoice"
                                onClick={() => mDownloadInvoice(item.id)}>
                                <i className="">
                                  <FaDownload />
                                </i>
                              </a> */}
                              <Link
                                to="/ExchangeReturnDetails"
                                onClick={() =>
                                  getSingleOrderDetails(item.id, login)
                                }>
                                <i className="">
                                  <FaExchangeAlt />
                                </i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <Innermodal>
          {/* <button className="close-button" onClick={closeModal}> */}
          <AiFillCloseCircle
            style={{ width: "17px", cursor: "pointer" }}
            onClick={closeModal}
          />
          {/* </button> */}
          <div classNameName="checkout-page contact-page">
            {orderDetailsObject ? (
              <div classNameName="cart-table-container">
                {/* <ul classNameName="checkout-progress-bar">
                  <li
                    classNameName={
                      orderDetailsObject.order_status_id &&
                      orderDetailsObject.order_status_id == "1"
                        ? "one active"
                        : orderDetailsObject.order_status_id &&
                          orderDetailsObject.order_status_id == "2"
                        ? "two active"
                        : orderDetailsObject.order_status_id &&
                          orderDetailsObject.order_status_id == "3"
                        ? "three active"
                        : orderDetailsObject.order_status_id &&
                          orderDetailsObject.order_status_id == "4"
                        ? "four active"
                        : ""
                    }
                  >
                    <span>Waiting</span>
                  </li>
                  <li>
                    <span>Preparing</span>
                  </li>
                  <li>
                    <span>On the way</span>
                  </li>
                  <li>
                    <span>Completed</span>
                  </li>
                </ul> */}
                <div classNameName="row">
                  <div classNameName="col-md-6">
                    <h3>
                      Order Number:
                      <span classNameName="red-color">
                        {orderDetailsObject &&
                        orderDetailsObject &&
                        orderDetailsObject.order_number
                          ? orderDetailsObject.order_number
                          : ""}
                      </span>
                    </h3>
                    {/* <h4>Delivery Address</h4> */}
                    <p>
                      <span classNameName="bold-fonts">
                        <b>Order Status: </b>
                      </span>
                      {orderDetailsObject.order_status_id &&
                      orderDetailsObject.order_status_id == "1"
                        ? "Waiting"
                        : orderDetailsObject.order_status_id &&
                          orderDetailsObject.order_status_id == "2"
                        ? "Preparing"
                        : orderDetailsObject.order_status_id &&
                          orderDetailsObject.order_status_id == "3"
                        ? "On the way"
                        : orderDetailsObject.order_status_id &&
                          orderDetailsObject.order_status_id == "4"
                        ? "Completed"
                        : orderDetailsObject.order_status_id &&
                          orderDetailsObject.order_status_id == "5"
                        ? "Cancelled"
                        : orderDetailsObject.order_status_id &&
                          orderDetailsObject.order_status_id == "6"
                        ? "Returned"
                        : ""}
                    </p>
                    <p>
                      <span
                        classNameName="bold-fonts"
                        style={{ fontWeight: "bold" }}>
                        Address:
                      </span>
                      <br /> {orderDetailsObject.shipping_fullname}
                      <br />
                      {orderDetailsObject &&
                      orderDetailsObject.address &&
                      orderDetailsObject.address.address
                        ? orderDetailsObject.address.address
                        : "Address Not Found"}{" "}
                      {orderDetailsObject.shipping_pincode} ,<br />
                      {orderDetailsObject.shipping_city_name} ,{" "}
                      {orderDetailsObject.shipping_state_name} ,{" "}
                      {orderDetailsObject.shipping_country_name}
                    </p>
                    <p>
                      <span classNameName="bold-fonts">
                        <b>Date: </b>
                      </span>{" "}
                      {orderDetailsObject.created_at}
                    </p>
                    {/* <p>
                      <span classNameName="bold-fonts">Time Slot: </span> 08:00AM -
                      08:00PM
                    </p> */}
                  </div>
                </div>
                <div>
                  {/* <div classNameName="card card_bg_color">
                    <div classNameName="card-header"> Category Name 01 </div>
                  </div> */}
                  {orderDetailsObject &&
                  orderDetailsObject.order_lines &&
                  orderDetailsObject.order_lines.length > 0
                    ? orderDetailsObject.order_lines.map((item, index) => {
                        return (
                          <div>
                            <table
                              classNameName="table"
                              style={{ width: "100%" }}>
                              <tbody style={{ border: "2px solid" }}>
                                <tr
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "0.5rem",
                                  }}>
                                  <td classNameName="product-col">
                                    <figure classNameName="product-image-container">
                                      <a
                                        href="javascript:void(0)"
                                        classNameName="product-image">
                                        {/* <img
                                          src={item.product_image}
                                          alt="product"
                                        /> */}
                                      </a>
                                    </figure>
                                    <h5
                                      classNameName="product-title"
                                      style={{ display: "flex" }}>
                                      <h5>Product Name :&nbsp;</h5>
                                      <a href="javascript:void(0)">
                                        {item.product_name}
                                      </a>
                                    </h5>
                                    {/* <div classNameName="ratings-container">
                                      <div classNameName="product-ratings">
                                        {" "}
                                        <span classNameName="ratings">
                                          <i
                                            className="fa fa-star fa-6"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star fa-6"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star fa-6"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star fa-6"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                      </div>
                                    </div>{" "} */}
                                    {/* <span>
                                      <a href="#" classNameName="btn-move">
                                        Rate &amp; Review Product
                                      </a>
                                      <a href="#" classNameName="btn-move">
                                        Return
                                      </a>
                                    </span> */}
                                  </td>
                                  <td style={{ display: "flex", gap: "2rem" }}>
                                    <div>
                                      <b>Price : </b>
                                      <span>{formatPrice(item.price)}</span>
                                    </div>
                                    <div>
                                      <b>Quantity : </b>
                                      {item.total_quantity}
                                    </div>
                                  </td>
                                  {/* <td>
                                    <span>₹{item.price}</span> *
                                    <span>{formatPrice(item.price)}</span> *
                                    {item.incentive_point} (IP) X{" "}
                                    {item.total_quantity}
                                  </td> */}
                                  {/* <td>₹{item.total_price}</td> */}
                                  {/* <td>
                                    <div>
                                      {" "}
                                      <b>Total Price : </b>
                                      {formatPrice(item.total_price)}
                                    </div>
                                  </td> */}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        );
                      })
                    : null}
                </div>
                <div>
                  <table classNameName="table totla-table">
                    <tbody>
                      <tr>
                        <td>
                          <b>SUB TOTAL : </b>
                        </td>
                        <td>
                          {/* <b>₹{orderDetailsObject.total_price}</b> */}
                          <b>{formatPrice(orderDetailsObject.total_price)}</b>
                        </td>
                      </tr>
                      {/* <tr>
                        <td>
                          <b>DELIVERY CHARGES</b>
                        </td>
                        <td>
                          <b>₹{orderDetailsObject.cod_charges}</b>
                          <b>{formatPrice(orderDetailsObject.cod_charges)}</b>
                        </td>
                      </tr> */}
                      <tr>
                        <td>
                          <b>PAYMENT TYPE : </b>
                        </td>
                        <td>
                          <b style={{ textTransform: "uppercase" }}>
                            {orderDetailsObject.payment_type}
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </div>
        </Innermodal>
      </Modal>
      <Modal
        title="Cancel Order"
        isOpen={openCancelModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setCancelMOdal(!openCancelModal)}
        style={customStyles}
        contentLabel="Example Modal">
        <Innermodal>
          <button
            classNameName="close-button"
            onClick={() => setCancelMOdal(!openCancelModal)}>
            X
          </button>
          <div classNameName="checkout-page contact-page cancel-modal">
            {orderDetailsObject ? (
              <div classNameName="modal_main_div">
                <div
                  classNameName="submit_frm row"
                  style={{ marginTop: "20px" }}>
                  <button
                    onClick={() => selectAllDefult()}
                    type="button"
                    classNameName="button_desing">
                    All
                  </button>
                </div>
                <div classNameName="radio_btns" style={{ marginTop: "20px" }}>
                  <Radio.Group onChange={(e) => paymentMode(e.target.value)}>
                    <Radio value={1}>Wallet</Radio>
                    <Radio value={2}>As per mode</Radio>
                  </Radio.Group>
                </div>

                {orderDetailsObject &&
                orderDetailsObject.order_lines &&
                orderDetailsObject.order_lines.length > 0
                  ? orderDetailsObject.order_lines.map((item, index) => {
                      return (
                        <div key={index} classNameName="order_details">
                          <div classNameName="inside_crt">
                            <div classNameName="list_iten_cart">
                              <div classNameName="media_cart">
                                <img src={item.product_image} alt="" />
                              </div>
                              <div classNameName="cart_content">
                                <h5>{item.product_name}</h5>
                                <p>
                                  ₹{item.price}{" "}
                                  <span>
                                    <s>₹{item.main_price}</s> You Save ₹
                                    {Number(item.main_price) -
                                      Number(item.price)}
                                  </span>
                                </p>
                                <p>IP Point {item.incentive_point}</p>
                              </div>
                            </div>
                            <div classNameName="increase_product circle_mp">
                              <div classNameName="product-action">
                                <div classNameName="product-single-qty circle_mp">
                                  <input
                                    checked={selectedOrder.includes(item.id)}
                                    onChange={() => removeOrder(item)}
                                    type="checkbox"
                                    id={item.id}
                                    value={item.id}
                                  />
                                  <label classNameName="checkbox"></label>
                                  {/* <Button onClick={() => this.setState({ selectedOrderIndex: index })} classNameName="order_remove_item">{selectedOrderIndex == index ? 'Selected' : 'Select'}</Button> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : null}
                <div classNameName="submit_frm">
                  <div
                    classNameName="submit_frm row"
                    style={{ marginTop: "20px" }}>
                    <button
                      onClick={() => _returnFullOrder()}
                      type="button"
                      classNameName="button_desing">
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Innermodal>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .order_history {
    .table {
      width: 100%;
      margin-bottom: 1rem;
      background-color: transparent;
    }
    .table-responsive {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      table {
        border: 1px solid #eee;
        background-color: #fff;
        thead tr th {
          text-align: center;
          color: #fff;
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
          vertical-align: middle;
          padding: 15px 10px;
          ${"" /* background-color: var(--clr-primary-5); */}
          background-color: var(--clr-primary-darkred);
          border-bottom: 2px solid #dee2e6;
          :nth-child(1) {
            width: 23%;
          }
          :nth-child(2) {
            width: 10%;
          }
          :nth-child(3) {
            width: 15%;
          }
          :nth-child(4) {
            width: 16%;
          }
        }
        tbody {
          tr {
            :nth-child(2n + 1) {
              background-color: #eee;
            }
            td {
              text-align: center;
              color: #000;
              font-size: 15px;
              line-height: 22px;
              font-weight: 400;
              vertical-align: middle;
              padding: 0.75rem;
              border-top: 1px solid #dee2e6;
              .actions_btns_list {
                a {
                  width: 35px;
                  height: 35px;
                  border-radius: 60px;
                  margin-right: 4px;
                  padding: 7px;
                  ${"" /* border: 1px solid var(--clr-primary-5); */}
                  border: 1px solid var(--clr-primary-darkred);
                  background-color: #fff;
                  float: left;
                  text-align: center;
                  display: block;
                  ${"" /* color: var(--clr-primary-5); */}
                  color: var(--clr-primary-indianred);
                  :hover {
                    ${"" /* background: var(--clr-primary-5); */}
                    background: var(--clr-primary-darkred);
                    color: #fff;
                  }
                }
              }
            }
            td.cancelled_order {
              color: #bd3042;
            }
            td.delevered_order {
              color: green;
            }
          }
        }
      }
    }
  }

  .wallet_inside {
    width: 100%;
    display: inline-block;
    background-color: #f4f4f4;
    padding: 10px 0px 0px 0px;
    .row {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-left: -10px;
      margin-right: -10px;
      .col-lg-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
      }
      [className*="col-"] {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
    .not_div {
      width: 100%;
      display: inherit;
    }
    .top_wallet_div {
      width: 100%;
      display: inherit;
      padding: 0px 15px 20px 15px;
      .wallet_div {
        padding: 40px 20px;
        margin-top: 20px;
        border-radius: 20px;
        box-shadow: 0px 12px 27px 7px #e6e6e6;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        .wallet_details {
          width: 50%;
          display: table-cell;
          padding-top: 20px;
          padding-left: 10px;
          margin-top: 20px;
          color: #000;
          h4 {
            font-size: 20px;
            font-weight: 300;
            margin-top: 30px;
          }
          a {
            font-size: 12px;
            color: #bd3042;
            text-decoration: underline;
          }
        }
        .wallet_btn {
          position: absolute;
          top: 7px;
          right: 15px;
          color: white;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 8px;
          font-size: 25px;
          font-weight: 700;
          height: 41px;
          padding-right: 10px;
          padding-left: 10px;
          border: 1px solid #bd3042;
          transition: box-shadow ease-in-out 0.35s;
          background-color: #bd3042;
        }
      }
      .wallet_logo {
        width: 26%;
        text-align: right;
        display: table-cell;
        vertical-align: middle;
        img {
          float: right;
        }
      }
    }
    .mt-50 {
      margin-top: 50px !important;
      .generate_button {
        padding-left: 30px;
        a {
          border: none;
          background: #bd3042;
          border-radius: 5px;
          padding: 10px 40px;
          text-align: center;
          border: none;
          ${"" /* font-size: 16px; */}
          text-transform: uppercase;
          color: #fff;
          cursor: pointer;
          transition: box-shadow 0.35s ease-in-out;
        }
        p {
          margin-top: 20px;
          color: #868686;
          font-size: 16px;
          margin-bottom: 20px;
        }
      }
    }
  }
  .bottom_inside {
    width: 100%;
    display: inline-block;
    padding: 20px 15px;
    background-color: #bd3042;
  }
  .generate_button {
    padding-left: 30px;
  }
  .generate_button a {
    border: none;
    background: #bd3042;
    border-radius: 5px;
    padding: 10px 40px;
    text-align: center;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    transition: box-shadow 0.35s ease-in-out;
  }
  .col-md-12.col-lg-12.col-sm-12.col-12 {
    width: 100%;
    margin: 30px 0 0 0;
  }
  .generate_button p {
    margin-top: 20px;
    color: #868686;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .mt-20 {
    margin-top: 20px !important;
  }
  .pl-10 {
    padding-left: 10px !important;
  }
  .wallet_head h4 {
    font-size: 20px;
    color: #fff;
  }
  .trans_logo_container {
    width: 5%;
    float: left;
    margin-top: 14px;
  }
  .refund {
    width: 80%;
    display: inline-block;
  }
  .refund p {
    font-size: 16px;
    color: #fff;
    margin: 0;
  }
  .badge-warning {
    color: #212529;
    background-color: #ffc107;
    border-radius: 5px;
    padding: 2px 7px;
    margin: 0 0 0 10px;
  }
  .notification_head h3 {
    padding: 0 20px;
  }
  .refund_amt {
    width: 13%;
    text-align: right;
    display: inline-block;
  }
  .refund_amt p {
    font-size: 22px;
    color: #fff;
    margin: 0;
  }
  .refund_date {
    padding-left: 1px;
  }
  .refund_date p {
    font-size: 16px;
    color: #fff;
  }
  .wallet_inside {
    width: 100%;
    display: inline-block;
    background-color: #f4f4f4;
    padding: 10px 0px 0px 0px;
  }
  @media screen and (max-width: 1200px) {
    table.table.table-hover {
      ${"" /* min-width: 900px; */}
    }
  }
`;
const Innermodal = styled.section`
  max-width: 100%;
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
    border-color: var(--clr-primary-5);
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

  .checkout-progress-bar {
    display: block;
    margin: 0 0 3rem;
    font-size: 0;
    line-height: 1.4;
    counter-reset: i;
    li {
      width: 25%;
      display: inline-block;
      position: relative;
      margin: 0;
      text-align: center;
      vertical-align: top;
      :first-child:before {
        border-radius: 0.6rem 0 0 0.6rem;
      }
      :last-child:before {
        border-radius: 0 0.6rem 0.6rem 0;
      }
      :before {
        position: absolute;
        top: 32px;
        left: 0;
        width: 100%;
        height: 7px;
        transition: background 0.3s;
        background-color: #e4e4e4;
        content: "";
      }
      span {
        display: inline-block;
        width: 100%;
        padding-top: 60px;
        color: #ccc;
        font-size: 18px;
        font-weight: 300;
        word-wrap: break-word;
        :before {
          width: 38px;
          height: 38px;
          margin-left: -1.9rem;
          background-color: #e4e4e4;
          position: absolute;
          top: 15px;
          left: 50%;
          transition: background 0.3s;
          border-radius: 50%;
          content: "";
        }
        :after {
          top: 0.6rem;
          width: 30px;
          height: 30px;
          margin-left: -1.3rem;
          background: #fff;
          color: #bd3042;
          font-weight: 600;
          content: counter(i);
          counter-increment: i;
          position: absolute;
          top: 19px;
          left: 46.5%;
          transition: background 0.3s;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    li.active {
      display: inline-block !important;
      :before {
        background-color: green !important;
      }
      span {
        color: #000;
        :before {
          background-color: green !important;
        }
        :after {
          font-family: "FontAwesome" !important;
          content: "\f00c" !important;
          color: green !important;
        }
      }
    }
  }
  .cart-table-container {
    table.table.totla-table {
      td {
        :last-child {
          text-align: right;
        }
      }
    }
    .row {
      .col-md-6 {
        max-width: 100%;
        flex: 100%;
      }
    }
    h3 {
      font-size: 29px;
      font-weight: 800;
      margin: 0;
      span {
        color: var(--clr-primary-5);
      }
    }
    h4 {
      font-size: 19px;
      font-weight: 700;
      letter-spacing: 0.02em;
      margin: 20px 0 0 0;
    }
    p {
      .bold-fonts {
        font-weight: 600;
        color: #000;
      }
    }
    .card.card_bg_color {
      background: var(--clr-primary-5);
      color: #fff;
      text-align: center;
      padding: 9px 0 13px;
      font-size: 24px;
      font-weight: 700;
      margin: 0 0 20px 0;
    }
    .table {
      width: 100%;
      margin-bottom: 1rem;
      background-color: transparent;
      tbody {
        tr {
          td {
            color: #000;
            font-size: 16px;
            line-height: 24px;
            vertical-align: middle;
            font-weight: 400;
            padding: 15px;
            border-top: 1px solid #dee2e6;
            .product-image-container {
              display: table-cell;
              padding-right: 1.8rem;
              margin-bottom: 0;
              vertical-align: middle;
              img {
                max-width: 70px;
                border: 0px solid #ccc;
              }
            }
            .product-title {
              display: table-cell;
              vertical-align: middle;
              p {
                display: block;
                line-height: normal;
                padding: 0 0 3px;
                font-size: 18px;
                font-weight: 700;
                letter-spacing: normal;
              }
              a {
                font-size: 15px;
                line-height: 24px;
                font-weight: 400;
                color: #000;
                letter-spacing: normal;
                text-align: left;
              }
            }
            .ratings-container {
              line-height: 1;
              margin: 0 0 10px 1px;
              cursor: pointer;
              position: relative;
              display: inline-block;
              .product-ratings {
                height: 11px;
                position: relative;
                display: inline-block;
                font-size: 11px;
                letter-spacing: 0.1em;
                font-family: "Font Awesome 5 Free";
                font-weight: 900;
                .ratings {
                  top: 0;
                  left: 0;
                  white-space: nowrap;
                  overflow: hidden;
                }
              }
            }
            .btn-move {
              font-size: 12px;
              line-height: 12px;
              color: var(--clr-primary-5);
            }
          }
        }
      }
    }
  }
  .cancel-modal {
    button.button_desing {
      background: var(--clr-primary-5);
      color: #fff;
      border-radius: 5px;
      line-height: 35px;
      display: inline-block;
      border: none;
      min-width: 150px;
      font-size: 17px;
      cursor: pointer;
    }
    label.ant-radio-wrapper {
      font-weight: 700;
    }
    .inside_crt {
      width: 100%;
      display: inline-block;
      padding: 15px 0px;
      border-bottom: 2px solid #cec8c8;
    }
    .order_details {
      .list_iten_cart {
        width: 100%;
        display: inline-block;
        padding: 5px 0px;
      }
      .increase_product.circle_mp {
        float: right;
        margin-top: -45px;
        position: relative;
        z-index: 15555;
        .product-single-qty.circle_mp {
          max-width: 100%;
          position: relative;
          display: inline-block;
          vertical-align: middle;
          input {
            position: absolute;
            width: 25px;
            z-index: 1;
            height: 25px;
            opacity: 0;
            :checked + .checkbox {
              background: var(--clr-primary-5);
            }
          }
          label.checkbox {
            border: 1px solid var(--clr-primary-5);
            display: inline-block;
            width: 25px;
            height: 25px;
            position: relative;
            :after {
              content: "\f00c";
              font-family: FontAwesome;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
            }
          }
        }
      }
      .media_cart {
        width: 80px;
        float: left;
        margin-right: 20px;
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      }
      .cart_content {
        float: left;
        width: calc(100% - 100px);
        h3 {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          padding: 5px 0px;
        }
        p {
          font-size: 16px;
          line-height: 24px;
          color: #000;
          font-weight: 600;
          margin: 0;
          span {
            font-size: 14px;
            line-height: 21px;
            font-weight: 400;
            color: #00a100;
          }
        }
      }
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
  }
  @media screen and (max-width: 350px) {
    .sub-total .shipping {
      width: 100% !important;
      float: left !important;
    }
  }
`;
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
export default MyOrders;

import React, { useEffect, useState } from "react";
import IImages from "../constants/IImages";
import styled from "styled-components";
import { useOrderContext } from "../context/place_order_context";
import axios from "axios";
import {
  ex_pro_submit,
  get_exchangeproduct,
  getexchangeproduct,
  getexchangeproductsize,
  return_order_url,
} from "../utils/constants";
import createNotification from "../utils/Notification";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import AmountButtons from "../components/AmountButtons";
import { useCartContext } from "../context/cart_context";
import QtyBtnExg from "../components/QtyBtnExg";
import { FaMinus, FaPlus } from "react-icons/fa";

const ExchangeReturnDetails = () => {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const [getData, setData] = useState([]);
  const [getStatus, setStatus] = useState();
  const [getSize, setSize] = useState();
  const [getPrice, setPrice] = useState();
  const [getInventry, setInventry] = useState();
  const [getMainPrice, setMainPrice] = useState();
  const [getCampusinput, setCampusinput] = useState("");
  const [getProId, setProId] = useState();
  const [getOrderlineId, setOrderlineId] = useState();
  const [getOrderId, setOrderId] = useState();
  const [getOrderId2, setOrderId2] = useState();
  const [getexsizeshow, setExsizeshow] = useState(false);
  const [getexsizeshow2, setExsizeshow2] = useState(false);
  const [getexsizedata, setExsizedata] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const [getQtys, setQtys] = useState();

  const login = JSON.parse(localStorage.getItem("token"));

  // const [getProductId, setProductId] = useState();
  const data = [
    {
      name: "Exchange",
      id: 1,
    },
    {
      name: "Return",
      id: 2,
    },
  ];

  const {
    getOrdersList,
    my_order_list,
    single_order_details,
    getSingleOrderDetails,
    returnOrder,
    downloadInvocie,
  } = useOrderContext();

  const { toggleAmount } = useCartContext();
  // const data1 = JSON.parse(localStorage.getItem("exprodetails"));

  const [loaded, setLoaded] = useState(false);
  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;

  // useEffect(() => {
  //   if (reloadCount < 2) {
  //     sessionStorage.setItem("reloadCount", String(reloadCount + 1));
  //     window.location.reload();
  //   } else {
  //     sessionStorage.removeItem("reloadCount");
  //   }
  // }, []);

  // useEffect(() => {
  //   setData(data1?.order_lines);
  //   setOrderId(data1);
  //   setOrderId2(data1?.order_number);
  // }, []);
  useEffect(() => {
    setData(single_order_details?.order_lines);
    setOrderId(single_order_details);
    setOrderId2(single_order_details?.order_number);
  }, [single_order_details]);

  // console.log("log jay", data1);

  const handleCheckboxChange = (id, id2, price, mainprice) => {
    setIsChecked(true);
    setIsChecked(!isChecked);
    if (isChecked) {
      setProId(null);
      setOrderlineId(null);
      setPrice(null);
      setMainPrice(null);
    } else {
      setProId(id);
      setOrderlineId(id2);
      setPrice(price);
      setMainPrice(mainprice);
    }
  };

  const handleIncrement = () => {
    // if (getQtys < totalgetQtys) {
    setQtys(Number(getQtys) + 1);
    console.log("grt===?", getQtys);
    // };
  };

  // console.log("getproid", getProId);
  // console.log("setExsizeshow", getexsizeshow);

  // console.log("selected", getProId);
  const ExchangePostApi = async () => {
    const tokens = JSON.parse(localStorage.getItem("token"));
    const formData = new FormData();
    formData.append("product_id", getProId);

    if (getProId == "") {
      createNotification("error", "Error!", "Please select  getProId!");
      return;
    }

    const response = await axios
      .post(get_exchangeproduct, formData, {
        headers: {
          Accept: "application/x.uniform.v1+json",

          Authorization: "Bearer " + tokens,
        },
      })

      .catch((error) => console.error(`Error: ${error}`));
    if (response.data.success == 1) {
      setExsizedata(response.data.data.sizes);
      setExsizeshow(true);
      // setProId("");

      console.log("response  ", response.data.success);
      createNotification("success", "Success!", response.data.message);
      return;
    } else {
      createNotification("error", "Error!", "please enter valid data!");
      return;
    }
  };
  const getProductSize = async (id, id2) => {
    const tokens = JSON.parse(localStorage.getItem("token"));

    const formData = new FormData();
    await formData.append("size_id", id2);
    await formData.append("product_id", id);

    if (getSize == "") {
      createNotification("error", "Error!", "Please select  size!");
      return;
    }

    const response = await axios
      .post(getexchangeproductsize, formData, {
        headers: {
          Accept: "application/x.uniform.v1+json",

          Authorization: "Bearer " + tokens,
        },
      })

      .catch((error) => console.error(`Error: ${error}`));
    if (response.data.success == 1) {
      // setExsizedata(response.data.data.sizes);
      // setExsizeshow(true);
      // setProId("");
      setInventry(response.data.data.inventory);

      console.log("response  ", response.data.success);
      createNotification("success", "Success!", response.data.message);
      return;
    } else {
      createNotification("error", "Error!", "please enter valid data!");
      return;
    }
  };

  const finalExchangePostApi = async () => {
    const tokens = JSON.parse(localStorage.getItem("token"));

    const formData = new FormData();
    formData.append("product_id", getProId);
    formData.append("size_id", getSize);
    formData.append("color_id", 1);
    formData.append("order_line", getOrderlineId);
    formData.append("quantity", getQtys);
    formData.append("main_price", getMainPrice);
    formData.append("price", getPrice);

    if (getProId == "") {
      createNotification("error", "Error!", "Please select  getProId!");
      return;
    }

    const response = await axios
      .post(ex_pro_submit, formData, {
        headers: {
          Accept: "application/x.uniform.v1+json",

          Authorization: "Bearer " + tokens,
        },
      })

      .catch((error) => console.error(`Error: ${error}`));
    if (response.data.success == 1) {
      setExsizedata(response.data.data.sizes);
      setExsizeshow(true);
      history.push("/MyProfile");

      // setProId("");

      console.log("response  ", response.data.success);
      createNotification("success", "Success!", response.data.message);
      return;
    } else if (response.data.success == 0) {
      createNotification("error", "Error!", response.data.message);
      history.push("/MyProfile");

      return;
    } else {
      createNotification("error", "Error!", "please enter valid data!");
      return;
    }
  };

  const handleQtyChange = (index, qty, totalqty) => {
    console.log("getInventry", getInventry);
    console.log("totalqty", totalqty);
    if (qty < getInventry) {
      const updatedArray = [...getData];
      updatedArray[index].quantity += 1;

      setData(updatedArray);
      setQtys(updatedArray[index].quantity);
      // setProId(updatedArray[index].id);
    } else {
      console.log("something wrong");
    }
  };

  const handleQtyChange2 = (index, qty, totalqty) => {
    if (qty <= getInventry && qty != 1) {
      const updatedArray = [...getData];
      updatedArray[index].quantity -= 1;

      setData(updatedArray);
      setQtys(updatedArray[index].quantity);
      // setProId(updatedArray[index].id);
    } else {
      console.log("something wrong");
    }
  };

  const returnPostApi = async () => {
    const tokens = JSON.parse(localStorage.getItem("token"));

    const formData = new FormData();
    formData.append("order_lines_id", getProId);
    formData.append("order_number", getOrderId2);
    formData.append("is_return_status", 2);

    if (getProId == "") {
      createNotification("error", "Error!", "Please select  getProId!");
      return;
    }

    const response = await axios
      .post(return_order_url, formData, {
        headers: {
          Accept: "application/x.uniform.v1+json",
          Authorization: "Bearer " + tokens,
        },
      })
      .catch((error) => console.error(`Error: ${error}`));

    if (response.data.success == 1) {
      console.log("response  ", response.data.success);
      createNotification("success", "Success!", response.data.message);
      history.push("/MyProfile");
    } else if (response.data.success == 0) {
      createNotification("error", "Error!", response.data.message);
      history.push("/MyProfile");

      return;
    } else {
      createNotification("error", "Error!", "Please enter valid data");
    }
  };

  return (
    <Wrapper>
      {/* {getData && getData.length <= 0 ? (
        <></>
      ) : (
        <>
          {getData &&
            getData.map((item) => {
              return (
                <>
                  <div>
                    <h4>Product ID: {item.id}</h4>
                  </div>
                </>
              );
            })}
        </>
      )} */}

      {getOrderId ? (
        <>
          <div>
            <h4>
              Order ID:
              {getOrderId && getOrderId && getOrderId.id ? getOrderId.id : ""}
            </h4>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="">
        <div className="order_history">
          <div className="table   table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>
                    Exchange /<br /> Return
                  </th>
                  {getexsizeshow == true ? <th>Select size</th> : <></>}
                  {getexsizeshow == true ? <th>Quantity</th> : <></>}
                  {/* <th>Quantity</th> */}
                  <th>Select</th>
                  <th>Action</th>
                </tr>
              </thead>
              {getData && getData.length <= 0 ? (
                <></>
              ) : (
                <>
                  {getData &&
                    getData.map((item, index) => {
                      return (
                        <>
                          <tbody>
                            <td>{item.product_name}</td>
                            <td>{item.price}</td>
                            <td>{item.size}</td>
                            <td>
                              <div className="input-row" action="#">
                                <select
                                  className="dropdown_career"
                                  name="type"
                                  id="lang"
                                  style={{
                                    background: "transparent",
                                    width: "96%",
                                  }}
                                  onChange={(e) => setStatus(e.target.value)}>
                                  .
                                  <option value="" disabled selected>
                                    Select type
                                  </option>{" "}
                                  {data.map((item, index) => {
                                    return (
                                      <>
                                        <option value={item.id}>
                                          {item.name}
                                        </option>
                                      </>
                                    );
                                  })}
                                </select>
                              </div>
                            </td>

                            {getexsizeshow == true ? (
                              <td>
                                {/* {getexsizedata && getexsizedata.length <= 0 ? <> No size Available. </> : <>
                                  {getexsizedata.map((item, index) => {
                                    return (
                                      <>
                                        <div>{item.name}</div>
                                       
                                      </>
                                    )
                                  })}
                                </>} */}

                                <select
                                  className="dropdown_career"
                                  name="sizes"
                                  id="lang"
                                  style={{
                                    background: "transparent",
                                    width: "96%",
                                  }}
                                  onChange={(e) => {
                                    setSize(e.target.value);
                                    getProductSize(
                                      item.product_id,
                                      e.target.value
                                    );
                                  }}>
                                  <option value="" disabled selected>
                                    Select size
                                  </option>{" "}
                                  {getexsizedata &&
                                    getexsizedata.map((item, index) => {
                                      return (
                                        <>
                                          <option value={item.id}>
                                            {item.name}
                                          </option>
                                        </>
                                      );
                                    })}
                                </select>
                              </td>
                            ) : (
                              <></>
                            )}

                            {/* <input
                                type="number"
                                min="10"
                                max="100"
                                value={item.total_quantity}
                                onChange={() => {
                                    handleCheckboxChange3(item.total_quantity,item.total_quantity);
                                  }}
                              /> */}

                            {/* <QtyBtnExg
                                    getQtys={item.quantity}
                                    totalgetQtys={item.total_quantity}
                                    setQtys={setQtys}
                                    inc={inc}
                                    dec={dec}
                                  /> */}

                            {getexsizeshow == true ? (
                              <>
                                <td>
                                  <div
                                    className="quantity-box"
                                    style={{ padding: "0px" }}>
                                    {/* <b>Quantity</b> */}
                                    <div
                                      className="qty"
                                      style={{
                                        display: "flex",
                                        border: "2px solid",
                                        gap: "10px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      }}>
                                      <button
                                        style={{
                                          background: "white",
                                          border: "0px",
                                          display: "flex",
                                        }}
                                        type="button"
                                        className="qty-btn"
                                        onClick={() => {
                                          handleQtyChange2(
                                            index,
                                            item.quantity,
                                            item.total_quantity
                                          );
                                        }}>
                                        <FaMinus />
                                      </button>
                                      <p
                                        className="qty"
                                        style={{ marginBottom: "0px" }}>
                                        {item.quantity}
                                      </p>
                                      <button
                                        style={{
                                          background: "white",
                                          border: "0px",
                                          display: "flex",
                                        }}
                                        type="button"
                                        className="qty-btn"
                                        onClick={() => {
                                          handleQtyChange(
                                            index,
                                            item.quantity,
                                            item.total_quantity
                                          );
                                        }}>
                                        <FaPlus />
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </>
                            ) : (
                              <></>
                            )}

                            <td>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={item.isChecked}
                                  onChange={() => {
                                    handleCheckboxChange(
                                      item.product_id,
                                      item.id,
                                      item.price,
                                      item.main_price
                                    );
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <button
                                className="btn"
                                onClick={() => {
                                  if (
                                    getexsizeshow == false &&
                                    getStatus == 1
                                  ) {
                                    ExchangePostApi();
                                  } else if (getexsizeshow == true) {
                                    finalExchangePostApi();
                                  } else if (getStatus == 2) {
                                    returnPostApi();
                                  }
                                }}>
                                Submit
                              </button>
                            </td>
                          </tbody>
                        </>
                      );
                    })}
                </>
              )}
            </table>
            {/* <div>
              <button
                className="btn"
                onClick={() => {
                  if (getStatus == 1) {
                    ExchangePostApi();
                  }
                }}>
                Submit
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
  overflow: scroll;
  flex-direction: column;
 
  input {
    padding: "1rem";
    border: "1px solid";
  }
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
          background-color: var(--clr-primary-darkred);
          border: 1px solid black;
        }
        tbody {
          td {
            text-align: center;
            color: #000;
            font-size: 15px;
            line-height: 22px;
            font-weight: 400;
            vertical-align: middle;
            padding: 0.75rem;
            border: 1px solid black;
          }
        }
      }
    }
  }
`;
export default ExchangeReturnDetails;

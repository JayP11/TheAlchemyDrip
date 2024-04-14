import React, { useEffect, useState } from "react";
import IImages from "../constants/IImages";
import styled from "styled-components";
import { useOrderContext } from "../context/place_order_context";
import axios from "axios";
import {
  get_exchangeproduct,
  getexchangeproduct,
  return_order_url,
} from "../utils/constants";
import createNotification from "../utils/Notification";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import AmountButtons from "../components/AmountButtons";
import { useCartContext } from "../context/cart_context";
import QtyBtnExg from "../components/QtyBtnExg";

const ExchangeReturnDetails = () => {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const [getData, setData] = useState([]);
  const [getStatus, setStatus] = useState();
  const [getSize, setSize] = useState();
  const [getCampusinput, setCampusinput] = useState("");
  const [getProId, setProId] = useState();
  const [getOrderId, setOrderId] = useState();
  const [getOrderId2, setOrderId2] = useState();
  const [getexsizeshow, setExsizeshow] = useState(false);
  const [getexsizedata, setExsizedata] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // const increase = (id) => {
  //   toggleAmount(id, "inc");
  // };
  // const decrease = (id) => {
  //   toggleAmount(id, "dec");
  // };

  const [getQtys, setQtys] = useState(1);

  const inc = () => {
    setQtys((oldQty) => {
      let tempQty = oldQty + 1;
      // if (tempQty > getstock) {
      //   tempQty = getstock;
      // }
      return tempQty;
    });
  };

  const dec = () => {
    setQtys((oldQty) => {
      let tempQty = oldQty - 1;
      if (tempQty < 1) {
        tempQty = 1;
      }
      return tempQty;
    });
  };

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

  useEffect(() => {
    setData(single_order_details?.order_lines);
    setOrderId(single_order_details);
    setOrderId2(single_order_details?.order_number);
  }, [single_order_details]);

  console.log("order_lines", single_order_details);

  // useEffect(() => {
  //   setOrderId(single_order_details);
  // }, [single_order_details]);

  const handleCheckboxChange = (id) => {
    setIsChecked(true);
    setIsChecked(!isChecked);
    if (isChecked) {
      setProId(null);
    } else {
      setProId(id);
    }
  };
  // const handleCheckboxChange3 = (qty, qtymax) => {
  //   console.log("qty is",quantity);

  //   if (qty < qtymax) {
  //     setQuantity((prevQuantity) => prevQuantity + 1);
  //   }
  //   console.log("qty is",quantity);
  // };

  // const incrementQuantity = () => {
  //   if (quantity < stock) {
  //     setQuantity((prevQuantity) => prevQuantity + 1);
  //   }
  // };

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity((prevQuantity) => prevQuantity - 1);
  //   }
  // };

  // console.log("getproid", getProId);
  // console.log("setExsizeshow", getexsizeshow);

  // console.log("selected", getProId);
  const ExchangePostApi = async () => {
    console.log("abs");
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
          Authorization: "Bearer" + tokens,
        },
      })

      .catch((error) => console.error(`Error: ${error}`));
    if (response.data.success == 1) {
      // setExsizedata(response.data.data.sizes);
      // setExsizeshow(true);
      setProId("");

      console.log("response  ", response.data.data.sizes);
      createNotification(
        "success",
        "Success!",
        "form has been successfully submitted"
      );
      return;
    } else {
      createNotification("error", "Error!", "please enter valid data!");
      return;
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
      // setExsizedata(response.data.data.sizes);
      // setExsizeshow(true);
      // setProId("");
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
                  {/* <th>scroll</th> */}
                  <th>Product</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>
                    Exchange /<br /> Return
                  </th>
                  {getStatus == 1 ? <th>Select Size</th> : <></>}
                  {getStatus == 1 ? <th>Select Qty</th> : <></>}
                  <th>Quantity</th>
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
                            {getStatus == 1 ? (
                              <>
                                <td>
                                  <div className="input-row" action="#">
                                    <select
                                      className="dropdown_career"
                                      name="size"
                                      // id="lang"
                                      style={{
                                        background: "transparent",
                                        width: "96%",
                                      }}
                                      onChange={(e) =>
                                        setStatus(e.target.value)
                                      }>
                                      <option value="" disabled selected>
                                        Select size
                                      </option>{" "}
                                      <option value="">S</option>
                                      <option value="">M</option>
                                      <option value="">L</option>
                                      {/* {data.map((item, index) => {
                                    return (
                                      <>
                                        <option value={item.id}>
                                          {item.name}
                                        </option>
                                      </>
                                    );
                                  })} */}
                                    </select>
                                  </div>
                                </td>
                              </>
                            ) : (
                              <></>
                            )}

                            {getStatus == 1 ? (
                              <>
                                <td
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}>
                                  <QtyBtnExg
                                    getQtys={getQtys}
                                    inc={inc}
                                    dec={dec}
                                  />
                                </td>
                              </>
                            ) : (
                              <></>
                            )}

                            {getexsizeshow == true ? (
                              <td>
                                <select
                                  className="dropdown_career"
                                  name="sizes"
                                  id="lang"
                                  style={{
                                    background: "transparent",
                                    width: "96%",
                                  }}
                                  onChange={(e) => setSize(e.target.value)}>
                                  <option value="" disabled selected>
                                    Select size
                                  </option>
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
                            <td>
                              <input
                                type="number"
                                min="10"
                                max="100"
                                value={item.total_quantity}
                                // onChange={() => {
                                //     handleCheckboxChange3(item.total_quantity,item.total_quantity);
                                //   }}
                              />
                              {/* <div>
                                <button onClick={decrementQuantity}>-</button>
                                <span>{quantity}</span>
                                <button   onClick={() => {
                                    handleCheckboxChange3(item.total_quantity,item.total_quantity);
                                  }}>+</button>
                              </div> */}
                              {/* <input type="number" va  /> */}
                              {/* <AmountButtons amount={item.price} increase={increase} decrease={decrease} /> */}
                            </td>
                            <td>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={item.isChecked}
                                  onChange={() => {
                                    handleCheckboxChange(item.id);
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <button
                                className="btn"
                                onClick={() => {
                                  if (getStatus == 1) {
                                    ExchangePostApi();
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
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    opacity: 1;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
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

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useOrderContext } from "../context/place_order_context";
import { useUserContext } from "../context/user_context";
import add_ticket from "../assets/add_ticket.png";
import { DatePicker } from "antd";
import Notification from "../utils/Notification";

const OrderIssue = () => {
  const { createStoreIssue, store_ticket_list, viewStoreissueList } =
    useOrderContext();
  const { isLogin, logintoken } = useUserContext();

  const [storename, setStoreName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isActive, setActive] = useState(true);

  // console.log('single_order_details ', store_ticket_list)

  useEffect(() => {
    viewStoreissueList(logintoken);
  }, []);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const createTicket = () => {
    if (storename === "") {
      Notification("error", "Error!", "Please enter store name!");
    } else if (storename.length < 3) {
      Notification("error", "Error!", "Please enter valid store name");
    } else if (date === "") {
      Notification("error", "Error!", "Please select store visited date !");
    } else if (description === "") {
      Notification("error", "Error!", "Please add description");
    } else if (description.length < 3) {
      Notification("error", "Error!", "Please enter valid description");
    } else {
      var params = {
        store_name: storename,
        visit_date: date,
        subject: description,
        problem_description: description,
      };
      // console.log('create order params ', logintoken, params)
      createStoreIssue(params, logintoken);
      toggleClass();
    }
  };
  return (
    <Wrapper>
      <div className="notification issue_inner">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            <div className="notification_head ticket_list">
              <h3>Order Issue</h3>
              <div className="add_ticket">
                <a href="javascript:void(0)" onClick={toggleClass}>
                  <img src={add_ticket} /> Create Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
        {isActive ? (
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            {store_ticket_list &&
              store_ticket_list.map((item, index) => {
                return (
                  <div className="ticket_listing pt-20">
                    <div className="product_issue">
                      <div className="ticket_id">
                        <p>
                          <b>Ticket ID :</b> &nbsp;
                          <span>
                            <a
                              href="javascript:void(0)"
                              className="id_no"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="view details"
                            >
                              {item.ticket_number}
                            </a>
                          </span>
                        </p>
                      </div>
                      <div className="pending_issue">
                        {item.is_active === 1 ? (
                          <span>Answered</span>
                        ) : (
                          <span>Active</span>
                        )}
                        {/* <span>Pending</span> */}
                      </div>
                    </div>
                    <div className="issue_subject">
                      <p>
                        <b>Subject :</b>
                        <span> {item.subject}</span>
                      </p>
                      <p>
                        <b>Store :</b>
                        <span> {item.store_name}</span>
                      </p>
                      {item.is_active === 1 ? <><p className="reply_p">
                        <b>Reply :</b>
                        <span> {item.reply}</span>
                      </p></> : null}
                      
                      <p>
                        <b>Created On : </b>
                        {item.created_at}
                      </p>
                    </div>
                    <div className="issue_date"></div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="my_profile_inside">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control forms_inputs"
                    name="Name"
                    required=""
                    placeholder="Enter store name"
                    value={storename}
                    onChange={(e) => setStoreName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div style={{ width: "100%" }} className="ant-input">
                    <DatePicker
                      style={{ width: "100%" }}
                      placeholder="Select Date"
                      onChange={(a, b) => setDate(b)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control forms_inputs"
                    name="Name"
                    required=""
                    placeholder="Name"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-2"></div>

            <div className="form-footer">
              <div className="form-footer-center edit_profile_f">
                <button
                  type="submit"
                  className="btn btn-primary profile_btn"
                  onClick={() => createTicket()}
                >
                  Submit
                </button>
                <button
                  type="submit"
                  className="btn btn-primary profile_btn"
                  onClick={toggleClass}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
        <hr />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .issue_inner {
    width: 100%;
    display: inline-block;
    background-color: #f4f4f4;
    padding: 0px 20px;
    .row {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-left: -10px;
      margin-right: -10px;
      .col-lg-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
      }
      [className*="col-"] {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
    .notification_head.ticket_list {
      width: 100%;
      display: inline-block;
      border-bottom: 1px solid var(--clr-primary-darkred);

      padding-bottom: 20px;
      h3 {
        width: 50%;
        display: inline-block;
        font-size: 24px;
        line-height: 36px;
        font-weight: 500;
      }
      .add_ticket {
        width: 49%;
        display: inline-block;
        text-align: right;
        a {
          font-size: 16px;
          color: var(--clr-primary-indianred);
          border: 1px solid var(--clr-primary-darkred);
          padding: 7px 20px;
          border-radius: 8px;
          cursor: pointer;
          display: inline-block;
          text-decoration: none;
          margin-top: 24px;
          line-height: 31px;
          img {
            float: left;
            margin-right: 10px;
          }
        }
      }
    }
    hr {
      max-width: 1730px;
      border: 0;
      border-top: none;
      margin: 15px;
    }
    .ticket_listing {
      width: 100%;
      display: inline-block;
      padding: 20px 0px 20px 0px;
      border-bottom: 1px solid var(--clr-primary-indianred);
      .ticket_id,
      .issue_subject {
        width: 100%;
        display: inline-block;
        p {
          font-size: 16px;
          color: #1f1f1f;
          padding-bottom: 10px;
          margin: 0px;
          padding: 0px;
        }
        .id_no {
          font-weight: bold;
          color: #1f1f1f;
        }
      }
      .pending_issue,
      .issue_date {
        width: 100%;
        display: inline-block;
        text-align: right;
        span {
          padding: 6px 15px;
          background-color: var(--clr-primary-darkred);
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
          text-decoration: none;
        }
      }
      .issue_subject span,
      .details_issue_subject span {
        ${"" /* color: #48c0cc; */}
      }
      .pending_success {
        width: 49%;
        display: inline-block;
        text-align: right;
        span {
          padding: 6px 15px;
          background-color: #40c351;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
          text-decoration: none;
        }
      }
    }
    .my_profile_inside {
      .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
        input {
          border: 1px solid;
          background: transparent;
          line-height: 35px;
          border-radius: 5px;
          padding: 0 15px;
          width: 100%;
        }
        .form-group {
          margin: 10px 0;
        }
        .ant-picker {
          padding: 0px !important;
          border: 0px !important;
          border: 1px solid #000;
          background: transparent !important;
        }
        .ant-input {
          padding: 0px;
          border: 1px solid #000;
          background: transparent !important;
          border-radius: 5px;
          input {
            border: none !important;
            border-radius: 0px;
          }
          .ant-picker-suffix {
            margin: 0 20px 0 0px !important;
          }
        }
      }
      .form-footer-center.edit_profile_f {
        justify-content: center;
        text-align: center;
        margin: 15px 0 0 0;
        button {
          margin: 0 5px;
        }
      }
    }
  }

  @media screen and (max-width: 580px) {
    .my_profile_inside {
      .col-md-6 {
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
    .notification_head.ticket_list {
      display: flex !important;
      flex-direction: column;
    }
    .notification_head.ticket_list .add_ticket {
      width: 100% !important;
      text-align: left !important;
    }
    .notification_head.ticket_list h3 {
      margin: 20px 0 0 0;
    }
    .product_issue {
      display: flex;
      flex-direction: column;
      text-align: left;
      justify-content: flex-start;
      .ticket_id {
        width: 100% !important;
      }
      .pending_issue {
        width: 100% !important;
        text-align: left !important;
        padding: 20px 0 6px 0;
      }
    }
  }
`;

export default OrderIssue;
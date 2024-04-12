import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import add_ticket from "../assets/add_ticket.png";

const Notifications = () => {
  const [isActive, setActive] = useState(true);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <Wrapper>
      <div className="notifications_inside">
        <h2>Notifications</h2>
        <div className="notifications_list">
          <ul>
            <li>
              Check Out the new offer Home Care 05% Off
              <span>Sep, 16 ,2020 08:48 PM</span>
            </li>
            <li>
              Check Out the new offer Home Care 05% Off
              <span>Sep, 16 ,2020 08:48 PM</span>
            </li>
            <li>
              Check Out the new offer Home Care 05% Off
              <span>Sep, 16 ,2020 08:48 PM</span>
            </li>
            <li>
              Check Out the new offer Home Care 05% Off
              <span>Sep, 16 ,2020 08:48 PM</span>
            </li>
            <li>
              Check Out the new offer Home Care 05% Off
              <span>Sep, 16 ,2020 08:48 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .notifications_inside {
    width: 100%;
    display: inline-block;
    background-color: #eee;
    padding: 30px;
    min-height: 598px;
    h2 {
      font-size: 2.6rem;
    }
    ul,
    ol {
      margin: 0 0 2.25rem;
      padding: 0;
      list-style: none;
      li {
        border-bottom: 1px solid #929292;
        padding: 30px 0px;
        margin-bottom: 20px;
        position: relative;
        color: #000;
        font-size: 20px;
        line-height: 30px;
        span {
          display: inline-block;
          text-align: right;
          position: absolute;
          right: 0;
          color: #000;
          font-size: 16px;
        }
        :last-child {
          border-bottom: 0px solid #929292;
        }
      }
    }
  }
`;

export default Notifications;

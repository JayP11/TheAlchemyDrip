import React from "react";
import styled from "styled-components";
import {
  FaCheck,
  FaUserCircle,
  FaWallet,
  FaUsers,
  FaTicketAlt,
  FaBell,
} from "react-icons/fa";
import {
  ADDRESS_TAB,
  MY_ORDER_TAB,
  NOTIFICAION_TAB,
  RAISE_TICKET_TAB,
  USER_PROFILE_TAB,
} from "../utils/constants";

const DashboardMenu = (props) => {
  return (
    <Wrapper>
      <div className="dashboardmenu">
        <ul>
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => props.changeTab(USER_PROFILE_TAB)}
              className={props.activeTab == USER_PROFILE_TAB ? "active" : ""}>
              <FaUserCircle /> User Profile
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => props.changeTab(ADDRESS_TAB)}
              className={props.activeTab == ADDRESS_TAB ? "active" : ""}>
              <FaUserCircle /> Address
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => props.changeTab(MY_ORDER_TAB)}
              className={props.activeTab == MY_ORDER_TAB ? "active" : ""}>
              <FaWallet />
              My Order
            </a>
          </li>

          {/* <li>
            <a
              href="javascript:void(0)"
              onClick={() => props.changeTab(RAISE_TICKET_TAB)}
              className={props.activeTab == RAISE_TICKET_TAB ? "active" : ""}>
              <FaTicketAlt /> Raise Ticket
            </a>
          </li> */}
          {/* <li>
            <a
              href="javascript:void(0)"
              onClick={() => props.changeTab(NOTIFICAION_TAB)}
              className={props.activeTab == NOTIFICAION_TAB ? "active" : ""}
            >
              <FaBell /> Notification
            </a>
          </li> */}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .dashboardmenu {
    max-width: 280px;
    ul {
      li {
        line-height: 55px;
        border: 1px solid #eeeeee;
        border-bottom: none;
        :last-child {
          border-bottom: 1px solid #eeeeee;
        }
        a {
          display: flex;
          -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
          font-weight: 500;
          align-items: center;
          color: #000;
          :hover {
            ${"" /* border-left: 5px solid var(--clr-primary-5); */}
            border-left: 5px solid var(--clr-primary-darkred);
            background: #eeeeee;
            transition: all 0.5s ease;
          }
          svg {
            margin-left: 1rem;
            margin-right: 1rem;
          }
        }
        .active {
          ${"" /* border-left: 5px solid var(--clr-primary-5); */}
          border-left: 5px solid var(--clr-primary-darkred);
          background: #eeeeee;
          transition: all 0.5s ease;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .dashboardmenu {
      max-width: 100%;
    }
  }
`;

export default DashboardMenu;

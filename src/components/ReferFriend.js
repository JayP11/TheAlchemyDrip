import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ReferFriend = () => {
  const [isActive, setActive] = useState(true);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <Wrapper>
      <div className="inside_notifications">
        {/* <img src={icon} alt="" /> */}
        <p>
          <span>REFER A FRIEND</span> AND EARN 100 LOYALTY POINTS
        </p>
        <div className="note_area">
          <div className="left_noti">
            {/* <img src={referral_code} alt="" /> */}
            <h4>NAS8068</h4>
          </div>
          <div className="right_noti">
            <a href="javascript:void(0)" id="show_refer">
              Share Referral Code
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .inside_notifications {
    img {
      display: block;
      margin: 0px auto;
    }
    p {
      font-size: 20px;
      text-align: center;
      span {
        color: #bd3042;
      }
    }
    .note_area {
      text-align: center;
      width: 50%;
      margin: 30px auto;
      .left_noti {
        width: 50%;
        display: inline-block;
        position: relative;
        h4 {
          position: absolute;
          top: 10px;
          text-align: center;
          left: 7px;
          right: 0px;
          letter-spacing: 0px;
          font-size: 19px;
        }
      }
      .right_noti {
        width: 49%;
        display: inline-block;
        vertical-align: middle;
        margin-top: -29px;
        a {
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          padding: 10px 30px;
          border-radius: 5px;
          color: #fff;
          background: #bd3042;
          background: -moz-linear-gradient(left, #bd3042 0%, #d64c22 100%);
          background: -webkit-linear-gradient(left, #bd3042 0%, #d64c22 100%);
          background: linear-gradient(to right, #bd3042 0%, #d64c22 100%);
          cursor: pointer;
        }
      }
    }
  }
`;

export default ReferFriend;

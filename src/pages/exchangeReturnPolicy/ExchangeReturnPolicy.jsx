// import React from "react";

// const ExchangeReturnPolicy = () => {
//   return <div>ExchangeReturnPolicy</div>;
// };

// export default ExchangeReturnPolicy;

import React from "react";
import styled from "styled-components";

const ExchangeReturnPolicy = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Wrapper>
        <section className="sec-privacy-policy">
          <div className="con-privacy-policy">
            <h3 className="privacy-policy-heading">RETURNS/EXCHANGE POLICY</h3>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                We offer 7 days hassle-free returns & exchange from the date of
                delivery and a further 5-7 days for the returned product(s) to
                reach us. We also offer reverse pick-up services. A reverse
                shipment fee of Rs 50 will be deducted at the time of refund per
                order, regardless of the number of items within that order. This
                means that if an order contains multiple items, only a single
                deduction of Rs 50 will be made for the entire order, not on
                each individual clothing item.
              </li>
              <li className="privacy-policy-subheading-txt">
                Pick-up will be attempted twice. If the courier company is
                unable to pick up the shipment. You will have to send the
                shipment back to the company address. Reverse Pick Up is subject
                to the availability of the service in your area pin code.
              </li>
              <li className="privacy-policy-subheading-txt">
                Please return your product(s) in the same condition as it was
                shipped. If the products are returned in poor condition or have
                clearly been worn, a refund would not be provided.
              </li>
              <li className="privacy-policy-subheading-txt">
                Kindly allow 7 days for the return to be processed and the
                amount to be shown in your bank account. PLEASE NOTE: REFUND /
                BANK TRANSFER ARE ONLY APPLICABLE FOR PREPAID ORDERS / ONLINE
                PAYMENTS MADE ON OUR WEBSITE.
              </li>
              <li className="privacy-policy-subheading-txt">
                Shipping Charges are Non-Refundable
              </li>
              <li className="privacy-policy-subheading-txt">
                You can get in touch with us about any issues at our customer
                support portal by dropping a direct message on our whatsapp:
                +918296485534. We are available Monday-Sunday between 10 am - 7
                pm. All pending queries will be solved on priority the next day.
              </li>
              <li className="privacy-policy-subheading-txt">
                To maintain strict hygiene standards of our products, we do not
                accept returns on certain product categories, including but not
                limited to full / half leggings and socks. The Alchemy Drip may,
                at its discretion and without prior notice, change the products
                or categories to which this policy would apply.
              </li>
            </ul>

            <h4>SELF-SHIPPING OF ORDERS FOR RETURNS:</h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                In case your pincode is non-serviceable for a reverse pick up,
                you’ll have courier the product(s) to the following address:{" "}
                <span style={{ fontWeight: "600" }}>
                  The Alchemy Drip office, 174, 4th cross, opp. Bhwaneshwari
                  Nagar park, Bhuwaneshwarinagar, Kathriguppe, Bangalore,
                  Karnataka 560085
                </span>
              </li>
              <li className="privacy-policy-subheading-txt">
                Please ensure the items are packed securely to prevent any loss
                or damage during transit and the ORDER ID and registered mobile
                number is mentioned on the packaging. All items must be in
                unused condition with all original tags attached and packaging
                intact. Within 48 hours of receiving the product(s), the
                complete amount - INR 50 (in lieu of courier charges) will be
                refunded to your bank account in case of prepaid orders.
              </li>
            </ul>
            <br />
            <div style={{ fontStyle: "italic" }}>
              <h5>PLEASE NOTE:</h5>
              <p>
                We request that you do not use The Professional Couriers for
                self return as they are not reliable and the package will not be
                accepted at the warehouse. Please make sure your courier costs
                do not exceed the amount stipulated above. We recommend using
                ‘Speed Post’ or DTDC as your courier service. Speed Post is a
                Government of India owned entity and has the most widely
                distributed postal network in India.
              </p>
            </div>
            {/* <h4 className="privacy-policy-subheading">
              The use of this website is subject to the following terms of use:
            </h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                The content of the pages of this website is for your general
                information and use only. It is subject to change without
                notice.
              </li>
              <li className="privacy-policy-subheading-txt">
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                found or offered on this website for any particular purpose. You
                acknowledge that such information and materials may contain
                inaccuracies or errors and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.
              </li>
              <li className="privacy-policy-subheading-txt">
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be liable. It
                shall be your own responsibility to ensure that any products,
                services or information available through this website meet your
                specific requirements.
              </li>
              <li className="privacy-policy-subheading-txt">
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance and graphics. Reproduction is
                prohibited other than in accordance with the copyright notice,
                which forms part of these terms and conditions.
              </li>
              <li className="privacy-policy-subheading-txt">
                All trademarks reproduced in this website which are not the
                property of, or licensed to, the operator are acknowledged on
                the website.
              </li>
              <li className="privacy-policy-subheading-txt">
                Unauthorized use of this website may give rise to a claim for
                damages and/or be a criminal offense.
              </li>
              <li className="privacy-policy-subheading-txt">
                From time to time this website may also include links to other
                websites. These links are provided for your convenience to
                provide further information.
              </li>
              <li className="privacy-policy-subheading-txt">
                You may not create a link to this website from another website
                or document without The Alchemy Drip’s prior written consent.
              </li>
              <li className="privacy-policy-subheading-txt">
                Your use of this website and any dispute arising out of such use
                of the website is subject to the laws of India or other
                regulatory authority.
              </li>
            </ul>
            <p className="privacy-policy-txt">
              We as a merchant shall be under no liability whatsoever in respect
              of any loss or damage arising directly or indirectly out of the
              decline of authorization for any Transaction, on Account of the
              Cardholder having exceeded the preset limit mutually agreed by us
              with our acquiring bank from time to time
            </p> */}
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .sec-privacy-policy {
    width: 100%;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .con-privacy-policy {
    max-width: 1140px;
    margin: 0 auto;
    text-align: start;
  }

  .privacy-policy-heading {
    color: var(--clr-heading-main);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 28px;
  }

  .privacy-policy-subheading-txt {
    font-size: 16px;
    color: var(--color-gray);
  }

  .privacy-policy-subheading {
    font-size: 22px;
    font-weight: 600;
    color: #000;
    line-height: 1.6rem;
  }

  .privacy-policy-txt {
    font-size: 16px;
    line-height: 1.3;
    color: var(--color-gray);
  }

  .privacy-policy-txt-lineheight {
    line-height: 1.5;
  }

  .privacy-policy-subheading-list-flex {
    font-size: 20px;
    color: #000;
    line-height: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: disc;
    padding-left: 15px;
  }
  @media screen and (max-width: 1140px) {
    .con-privacy-policy {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export default ExchangeReturnPolicy;

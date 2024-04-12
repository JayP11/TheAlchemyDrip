import React from "react";
import styled from "styled-components";

const ShippingDeliveryPolicy = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Wrapper>
        <section className="sec-privacy-policy">
          <div className="con-privacy-policy">
            <h3 className="privacy-policy-heading">
              Shipping & Delivery Policy
            </h3>
            <p className="privacy-policy-subheading-txt">
              For International buyers, orders are shipped and delivered through
              registered international courier companies and/or International
              speed post only. For domestic buyers, orders are shipped through
              registered domestic courier companies and /or speed post only.
              Orders are shipped within 6-8 days or as per the delivery date
              agreed at the time of order confirmation and delivering of the
              shipment subject to Courier Company / post office norms. AMEE
              TRADE is not liable for any delay in delivery by the courier
              company / postal authorities and only guarantees to hand over the
              consignment to the courier company or postal authorities within
              6-8 days from the date of the order and payment or as per the
              delivery date agreed at the time of order confirmation. Delivery
              of all orders will be to the address provided by the buyer.
              Delivery of our services will be confirmed on your mail ID as
              specified during registration. For any issues in utilizing our
              services you may contact our helpdesk on or
              Info@TheAlchemydrip.com
            </p>
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
    margin-bottom: 168px;
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

export default ShippingDeliveryPolicy;

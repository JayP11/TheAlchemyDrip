import React from "react";
import styled from "styled-components";

const TermsCondition = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Wrapper>
        <section className="sec-privacy-policy">
          <div className="con-privacy-policy">
            <h3 className="privacy-policy-heading">Terms & Condition</h3>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Bank account details provided by the customer would be final and
                any error in the details provided by the customer would not be
                the responsibility of the brand.
              </li>
              <li className="privacy-policy-subheading-txt">
                If you have received an SMS or EMAIL of order delivered status
                and if it's not received by you, please contact us within 24
                hours.
              </li>
              <li className="privacy-policy-subheading-txt">
                The customer will be under an obligation to take utmost care of
                the product(s) whilst the products are in their possession. This
                includes all of the product(s) instructions, documents and
                wrappings while returning the product(s) in the same condition
                as received.
              </li>
              <li className="privacy-policy-subheading-txt">
                In circumstances where the customer feels that the product does
                not conform to the standards at the time of delivery, they shall
                promptly contact us via on Whatsapp: +91 8296485534 with details
                of the product and its damage within 1 day of receiving the
                products; whereon, the customer will receive instructions from
                us.
              </li>
              <li className="privacy-policy-subheading-txt">
                Upon return of the product, we will fully examine it and notify
                the customer of their right to a refund (if any) via
                e-mail/whatsapp within a reasonable period of time. We aim to
                process the refund as soon as possible and, in any case, within
                30 working days from the day, we confirmed to the customer via
                e-mail that they are entitled to a refund.
              </li>
            </ul>

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

export default TermsCondition;

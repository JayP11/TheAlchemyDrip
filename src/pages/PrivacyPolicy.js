import React from "react";
import styled from "styled-components";

const PrivacyPolicy = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Wrapper>
        <section className="sec-privacy-policy">
          <div className="con-privacy-policy">
            <h3 className="privacy-policy-heading">Privacy Policy</h3>
            <p className="privacy-policy-subheading-txt">
              This privacy policy sets out how The Alchemy Drip uses the website
              www.TheAlchemyDrip.com and protects any information that you give
              The Alchemy Drip when you use this website.
            </p>
            <p className="privacy-policy-subheading-txt">
              The Alchemy Drip is committed to ensuring that your privacy is
              protected. Should we ask you to provide certain information by
              which you can be identified when using this website, and then you
              can be assured that it will only be used in accordance with this
              privacy statement.
            </p>
            <p className="privacy-policy-subheading-txt">
              The Alchemy Drip may change this policy from time to time by
              updating this page. You should check this page from time to time
              to ensure that you are happy with any changes.
            </p>
            <h4 className="privacy-policy-subheading">
              We may collect the following information:
            </h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Name and job title
              </li>
              <li className="privacy-policy-subheading-txt">
                Contact information including email address
              </li>
              <li className="privacy-policy-subheading-txt">
                Demographic information such as postcode, preferences and
                interests
              </li>
              <li className="privacy-policy-subheading-txt">
                Other information relevant to customer surveys and/or offers
              </li>
            </ul>
            <h4 className="privacy-policy-subheading">
              What we do with the information we gather
            </h4>
            <p className="privacy-policy-txt">
              We require this information to understand your needs and provide
              you with a better service, and in particular for the following
              reasons:
            </p>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Internal record keeping.
              </li>
              <li className="privacy-policy-subheading-txt">
                We may use the information to improve our products and services.
              </li>
              <li className="privacy-policy-subheading-txt">
                We may periodically send promotional emails about new products,
                special offers or other information which we think you may find
                interesting using the email address which you have provided.
              </li>
              <li className="privacy-policy-subheading-txt">
                From time to time, we may also use your information to contact
                you for market research purposes. We may contact you by email,
                phone, fax or mail. We may use the information to customise the
                website according to your interests.
              </li>
            </ul>
            <p className="privacy-policy-txt">
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorised access or disclosure we have put in
              suitable measures.
            </p>
            <h4 className="privacy-policy-subheading">How we use cookies</h4>
            <p className="privacy-policy-txt">
              A cookie is a small file which asks permission to be placed on
              your computer's hard drive. Once you agree, the file is added and
              the cookie helps analyses web traffic or lets you know when you
              visit a particular site. Cookies allow web applications to respond
              to you as an individual. The web application can tailor its
              operations to your needs, likes and dislikes by gathering and
              remembering information about your preferences.
            </p>

            <p className="privacy-policy-txt">
              We use traffic log cookies to identify which pages are being used.
              This helps us analyses data about webpage traffic and improve our
              website in order to tailor it to customer needs. We only use this
              information for statistical analysis purposes and then the data is
              removed from the system.
            </p>
            <p className="privacy-policy-txt">
              Overall, cookies help us provide you with a better website, by
              enabling us to monitor which pages you find useful and which you
              do not. A cookie in no way gives us access to your computer or any
              information about you, other than the data you choose to share
              with us.
            </p>
            <p className="privacy-policy-txt">
              You can choose to accept or decline cookies. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser setting to decline cookies if you prefer. This may prevent
              you from taking full advantage of the website.
            </p>
            <h4 className="privacy-policy-subheading">
              Controlling your personal information
            </h4>
            <p className="privacy-policy-txt">
              You may choose to restrict the collection or use of your personal
              information in the following ways:
            </p>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                whenever you are asked to fill in a form on the website, look
                for the box that you can click to indicate that you do not want
                the information to be used by anybody for direct marketing
                purposes
              </li>
              <li className="privacy-policy-subheading-txt">
                if you have previously agreed to us using your personal
                information for direct marketing purposes, you may change your
                mind at any time by writing to or emailing us at
                Info@TheAlchemydrip.com
              </li>
            </ul>
            <p className="privacy-policy-txt">
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so. We may use your personal information to send you
              promotional information about third parties which we think you may
              find interesting if you tell us that you wish this to happen.
            </p>
            <p className="privacy-policy-txt">
              If you believe that any information we are holding on you is
              incorrect or incomplete, please write to or email us as soon as
              possible, at the above address. We will promptly correct any
              information found to be incorrect.
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

export default PrivacyPolicy;

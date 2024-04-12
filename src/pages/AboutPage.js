import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const AboutPage = () => {
  window.scrollTo(0, 0);
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page  section-center">
        <div className="row">
          <div
            style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            <div className="title">
              <h1 style={{ color: "black", marginBottom: "1rem" }}>
                Our Story is Your Story
              </h1>
              <div className="underline"></div>
            </div>
            <div className="title_wrapper">
              Alchemy Drip translates Experimental fashion.
            </div>
          </div>
          <h1 style={{ marginTop: "1rem" }}>
            A Flavorful Journey Around the World Since 1963
          </h1>
          <p>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
            {/* The Alchemy Drip is a subsidiary of Deepak Readymade House, Rajkot,
            Gujarat. We are pioneers in manufacturing and retail of readymade
            school uniforms since 1963. We have 2 retail showrooms and one
            manufacturing facility in Rajkot, Gujarat. By expanding business, we
            are starting our operations in Bangalore in 2022 with the name The
            Alchemy Drip. */}
          </p>
          <p>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  */}
            Our experimental clothing line has unique and tailor-made pieces. We
            specialize in making school uniforms and customized apparel that’s
            made to order. Our garments are designed to nail the perfect fit.
          </p>
          <p>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
            The Alchemy Drip started in 2022, but our roots are much deeper. Our
            humble beginnings date back to 1963. It all started in the town of
            Rajkot, Gujarat as Deepak Readymade House; an established garments
            manufacturer, primarily dealing with school uniforms. And now in
            2022, 6 decades later; we have 2 retail showrooms and a state of an
            art manufacturing facility that caters to 350+ academic institutes
            across the Saurashtra region and multiple corporate companies.
          </p>
          <p>
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
            At the Alchemy drip, we carefully curate high quality clothing and
            customise them as per your requirement. With our decades of
            experience you know the job is done right. We are known for our top
            notch service, as excellent customer service and customer
            satisfaction is our highest priority. We have gained the respect of
            thousands of happy customers. Do reach out to us with your queries.
            We are waiting to hear from you. We guarantee you the best quality
            with the best service.
          </p>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .row {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 -15px 35px;
    text-align: center;
    h1 {
      color: var(--clr-primary-darkred);
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      text-transform: capitalize !important;
      text-align: justify;
    }
  }

  .title_wrapper {
    font-size: 20px;
    color: gray;
  }
  @media screen and (max-width: 767px) {
    .page.section.section-center {
      min-height: unset !important;
      padding: 30px 0;
    }
    .row {
      .col-md-6 {
        flex: 0 0 100%;
        max-width: 100%;
        p {
          text-align: left !important;
          font-size: 18px !important;
          letter-spacing: normal;
          margin: 15px 0 0 0;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    .row h1 {
      font-size: 1.5rem;
    }

    .title_wrapper {
      font-size: 18px;
    }

    .row p{font-size:18px;  }
`;
// const Service = styled.section`
//   .page.section.section-center {
//     background: #f3ece6;
//     height: unset;
//     min-height: unset;
//   }
//   .row {
//     display: flex;
//     flex-wrap: wrap;
//     margin: 0 -15px;
//     .col-md-4 {
//       flex: 0 0 33.33%;
//       max-width: 33.33%;
//       padding: 0 15px;
//     }
//   }
//   .service-box {
//     text-align: center;
//     .icon-img {
//       max-width: 140px;
//       border-radius: 100px;
//       background-color: #86430f;
//       margin: 0 auto 20px;
//     }
//     .service-content {
//       padding: 0 15px;
//       span {
//         font-size: 26px;
//         text-transform: uppercase;
//         color: #864310;
//         font-weight: 600;
//         margin: 0 0 10px 0;
//         display: inline-block;
//       }
//       p {
//         font-size: 18px;
//         letter-spacing: 0.2em;
//       }
//     }
//   }
//   @media screen and (max-width: 767px) {
//     .row {
//       .col-md-4 {
//         flex: 0 0 100%;
//         max-width: 100%;
//         padding: 0 15px;
//       }
//     }
//   }
// `;

// const VideoSection = styled.section`
//   .page.section.section-center {
//     min-height: unset !important;
//     padding: 40px 0;
//   }
//   iframe {
//     width: 100%;
//     height: 450px;
//     display: inline-block;
//   }
//   @media screen and (max-width: 767px) {
//     .page.section.section-center {
//       min-height: unset !important;
//       padding: 30px 0;
//     }
//     iframe {
//       height: unset;
//     }
//   }
// `;

// const Socialshare = styled.section`
//   .section-center {
//     background-color: #f3ece6;
//     text-align: center;
//     height: unset;
//     min-height: unset;
//   }
//   h2 {
//     font-size: 32px;
//     margin: 0 0 15px 0;
//     font-weight: 400;
//   }
//   ul.social-icon {
//     justify-content: center;
//     li {
//       display: inline-block !important;
//       margin: 0 10px;
//     }
//     a {
//       font-size: 29px;
//       color: #864310;
//     }
//   }
//   @media screen and (max-width: 767px) {
//     .page.section.section-center {
//       min-height: unset !important;
//       padding: 30px 0;
//     }
//   }
// `;

export default AboutPage;

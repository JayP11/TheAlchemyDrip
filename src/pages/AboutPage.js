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
import IImages from "../constants/IImages";
import TimeLine from "../components/timeline/TimeLine";
import DemoTimeline from "../components/demoTimeline/DemoTimeline";

const AboutPage = () => {
  // window.scrollTo(0, 0);
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page">
        <div>
          <img
            style={{ height: "100%", width: "100%" }}
            // src="https://thealchemydrip.com/wp-content/uploads/2021/04/about-img1.jpg"
            src={IImages.AboutUs}
            alt=""
          />
        </div>
        <div className="row abt_margin" style={{ paddingTop: "3rem" }}>
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
          <p style={{ textAlign: "center" }}>
            Our experimental clothing line has unique and tailor-made pieces. We
            specialize in making school uniforms and customized apparel that’s
            made to order. Our garments are designed to nail the perfect fit.
          </p>
          {/* <p style={{ textAlign: "center" }}>
            The Alchemy Drip started in 2022, but our roots are much deeper. Our
            humble beginnings date back to 1963. It all started in the town of
            Rajkot, Gujarat as Deepak Readymade House; an established garments
            manufacturer, primarily dealing with school uniforms. And now in
            2022, 6 decades later; we have 2 retail showrooms and a state of an
            art manufacturing facility that caters to 350+ academic institutes
            across the Saurashtra region and multiple corporate companies.
          </p>
          <p style={{ textAlign: "center" }}>
            At the Alchemy drip, we carefully curate high quality clothing and
            customise them as per your requirement. With our decades of
            experience you know the job is done right. We are known for our top
            notch service, as excellent customer service and customer
            satisfaction is our highest priority. We have gained the respect of
            thousands of happy customers. Do reach out to us with your queries.
            We are waiting to hear from you. We guarantee you the best quality
            with the best service.
          </p> */}
        </div>
        <div className="block2_main abt_margin">
          <div className="block2_part1_main">
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={IImages.aboutDeepak}
              // src="https://thealchemydrip.com/wp-content/uploads/2022/12/Hoodie.jpg"
              alt=""
            />
          </div>
          <div className="block2_part2_main">
            <h4
              style={{
                fontWeight: "400",
                // borderBottom: "2px solid",
                paddingBottom: "0.5rem",
              }}>
              WE ARE A LIFESTYLE BRAND
              <div className="underline1"></div>
            </h4>

            <div>
              <p
                style={{
                  fontSize: "18px",
                }}>
                The Alchemy Drip started in 2022, but our roots are much deeper.
                Our humble beginnings date back to 1963. It all started in the
                town of Rajkot, Gujarat as Deepak Readymade House; an
                established garments manufacturer, primarily dealing with school
                uniforms.
              </p>
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "0px",
                }}>
                And now in 2022, 6 decades later; we have 2 retail showrooms and
                a state of an art manufacturing facility that caters to 350+
                academic institutes across the Saurashtra region and multiple
                corporate companies.
              </p>
            </div>
            <div>
              <button className="btn_brand">CUSTOMIZE YOUR OWN</button>
            </div>
          </div>
        </div>
        <div className="block3_main abt_margin">
          <div className="block2_part2_main">
            <h4
              style={{
                fontWeight: "400",
                paddingBottom: "0.5rem",
              }}>
              WE ARE A LIFESTYLE BRAND
              <div className="underline1"></div>
            </h4>

            <div>
              <p
                style={{
                  fontSize: "18px",
                }}>
                At the Alchemy drip, we carefully curate high quality clothing
                and customise them as per your requirement. With our decades of
                experience you know the job is done right.
              </p>
              <p
                style={{
                  fontSize: "18px",
                }}>
                We are known for our top notch service, as excellent customer
                service and customer satisfaction is our highest priority.
              </p>
              <p
                style={{
                  fontSize: "18px",
                }}>
                We have gained the respect of thousands of happy customers.
              </p>
              <p
                style={{
                  fontSize: "18px",
                }}>
                Do reach out to us with your queries. We are waiting to hear
                from you. We guarantee you the best quality with the best
                service.
              </p>
            </div>
            <div>
              <button className="btn_brand">SHOP NOW</button>
            </div>
          </div>
          <div className="block2_part1_main">
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={IImages.aboutDeepak1}
              // src="https://thealchemydrip.com/wp-content/uploads/2022/12/t-shirt.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          className="block4_main"
          style={{
            backgroundImage: `url(${IImages.aboutDeepak2})`,
            WebkitBackdropFilter: "revert-layer",
            filter: "grayscale(1)",
          }}>
          <div className="block4_inner">
            <div className="block4_box_main">
              <div style={{ height: "55px" }}>
                <img
                  src={IImages.shippingIcon}
                  alt="shippingIcon"
                  style={{ height: "100%" }}
                />{" "}
              </div>
              <div>
                <h4 style={{ color: "white", marginBottom: "0px" }}>
                  Shipping Countrywide
                </h4>
              </div>
              <div>
                <p style={{ color: "white" }}>We ship throughout the country</p>
              </div>
            </div>
            <div className="block4_box_main">
              <div style={{ height: "55px" }}>
                <img
                  src={IImages.return_order}
                  alt="shippingIcon"
                  style={{ height: "100%" }}
                />
              </div>
              <div>
                <h4 style={{ color: "white", marginBottom: "0px" }}>
                  14 Days Return
                </h4>
              </div>
              <div>
                <p style={{ color: "white" }}>14-days free return policy.</p>
              </div>
            </div>
            <div className="block4_box_main">
              <div style={{ height: "55px" }}>
                <img
                  src={IImages.secure_pay}
                  alt="shippingIcon"
                  style={{ height: "100%" }}
                />
              </div>
              <div>
                <h4 style={{ color: "white", marginBottom: "0px" }}>
                  Security Payment
                </h4>
              </div>
              <div>
                <p style={{ color: "white" }}>
                  We accept all major credit cards.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <TimeLine /> */}
        <DemoTimeline />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .abt_margin {
    margin: 0 auto;
    max-width: 1140px;
  }
  .row {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* margin: 0 -15px 35px; */
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

  .block2_main {
    display: flex;
  }
  .block3_main {
    display: flex;
    padding-top: 4rem;
  }

  .block4_main {
    display: flex;
    align-items: center;
    margin-top: 4rem;
    background-attachment: fixed;
    justify-content: space-around;
    background-position: center;
    background-attachment: center;
    backdrop-filter: blur(2px);
    background-size: cover;
    height: 400px;
  }

  .block4_box_main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .block4_inner {
    display: flex;
    justify-content: space-around;
    gap: 3rem;
    flex-wrap: wrap;
  }
  .block2_part1_main {
    width: 50%;
  }
  .block2_part2_main {
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .title_wrapper {
    font-size: 20px;
    color: gray;
  }
  @media screen and (max-width: 767px) {
    .block2_main {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
    .block3_main {
      flex-direction: column-reverse;
      gap: 1rem;
      align-items: center;
    }

    .block2_part2_main {
      width: 100%;
    }

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
  @media screen and (max-width: 900px) {
    .block2_part1_main {
      height: 400px;
      width: 350px;
    }
  }
  @media screen and (max-width: 400px) {
    .row h1 {
      font-size: 1.5rem;
    }

    .title_wrapper {
      font-size: 18px;
    }

    .row p {
      font-size: 18px;
    }
    .block4_main {
      height: fit-content;
    }
    .block4_box_main {
      gap: 0.5rem;
    }

    .block2_part2_main {
      padding: 0 2rem;
    }
    .block2_part1_main {
      padding: 0 1rem;
    }
  }
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

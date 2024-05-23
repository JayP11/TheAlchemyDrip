// import React from "react";
// const data = [
//   {
//     company: "Twitter Inc",
//     ticker: "TWTR",
//     stockPrice: "22.76 USD",
//     timeElapsed: "5 sec ago",
//   },
// ];
// const DemoTimeline = ({ data }) => {
//   return (
//     <div className="timeline-item">
//       <div className="timeline-item-content">
//         <span className="tag" style={{ background: data.category.color }}>
//           {data.category.tag}
//         </span>
//         <time>{data.date}</time>
//         <p>{data.text}</p>
//         {data.link && (
//           <a href={data.link.url} target="_blank" rel="noopener noreferrer">
//             {data.link.text}
//           </a>
//         )}
//         <span className="circle" />
//       </div>
//     </div>
//   );
// };

// export default DemoTimeline;

import React from "react";
import { FaClock, FaFacebookSquare } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const DemoTimeline = () => {
  return (
    <div style={{ background: "lightgray", padding: "4rem 2rem" }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="1963 Introduced"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaClock />}
        >
          {/* <h3 className="vertical-timeline-element-title">Creative Director</h3> */}
          <h4 className="vertical-timeline-element-subtitle">Introduced</h4>
          <p>
            Established a readymade garment store with the name 'Deepak
            Readymade House' selling all types of fancy garments and School
            Uniforms fabric in Rajkot, Gujarat.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1991 Expanded"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h4 className="vertical-timeline-element-subtitle">Expanded </h4>
          <p>
            Tried and Tested various business models. Stopped retailing of the
            fancy garments and started selling readymade School uniforms along
            with setting up in house manufacturing facility.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1999 Expanded"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h4 className="vertical-timeline-element-subtitle">Expanded</h4>
          <p>
            {" "}
            Expanded the retail store to 1800 Sq. Ft store with a capacity to
            serve 25 customers at a time.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2009 Expanded"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h4 className="vertical-timeline-element-subtitle">Expanded</h4>
          <p>
            Expanded and opened 2nd retail showroom of 4500 Sq. ft and a
            facility to cater 60 customers at a time. First exclusive school
            uniform store to have second branch for school uniforms.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 Digitalization"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h4 className="vertical-timeline-element-subtitle">Digitalization</h4>
          <p>
            Entered into a completely digital method for smooth store management
            and operations.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 Digitalization"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h4 className="vertical-timeline-element-subtitle">Digitalization</h4>

          <p>
            Developed an E-commerce app for all the parents to shop online and
            developed necessary infrastructure.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 Digitalization"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h4 className="vertical-timeline-element-subtitle">Digitalization</h4>
          <p>
            Expansion of the same business in Bangalore under the name of The
            Alchemy Drip.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FaClock />}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          date="2023 Growth"
        >
          <h4 className="vertical-timeline-element-subtitle">Growth</h4>
          <p>
            Expanding the chain of retail outlets by adding 3rd showroom in
            Rajkot of 6000 Sq ft having the capacity to serve 90+ customers at a
            time. Expansion of The Alchemy Drip, with entry in retail business.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default DemoTimeline;

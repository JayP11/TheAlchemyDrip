import React from "react";
import "./hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHomeContext } from "../../context/home_context";

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const { home_slider } = useHomeContext();
  // console.log("home_slider", home_slider);
  return (
    <div className="section-centerrrr">
      <Slider {...settings}>
        {home_slider.map((image, personIndex) => {
          const { id, image_full_path } = image;
          return (
            <div key={id} className="personn_img_main">
              <img src={image_full_path} alt="images" className="personn-img" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;

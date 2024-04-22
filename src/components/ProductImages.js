import React, { useEffect, useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
import styled from "styled-components";
import IImages from "../constants/IImages";
import Modal from "react-modal";
import {
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoMdCloseCircleOutline,
} from "react-icons/io";

const ProductImages = ({ images = [{ image: "" }] }) => {
  const [main, setMain] = useState(
    images.length <= 0 ? IImages.ImageComingSoon : images[0]
  );
  const [getMain, setMani] = useState(
    images.length <= 0 ? IImages.ImageComingSoon : main.image
  );

  const [getModal, setModal] = useState(false);
  function closeModal() {
    setModal(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  useEffect(() => {
    setMani(images.length <= 0 ? IImages.ImageComingSoon : main.image);
  }, [main]);

  return (
    <>
      <Wrapper>
        <div className="gallery">
          {images.map((imagee, index) => {
            return (
              <img
                src={
                  images.length <= 0 ? IImages.ImageComingSoon : imagee.image
                }
                alt={imagee.image_type}
                key={index}
                onClick={() => {
                  setMain(images[index]);
                }}
                className={`${imagee.image == main.image ? "active" : null}`}
              />
            );
          })}
        </div>
        <div
          style={{ height: "400px", width: "350px" }}
          onClick={() => {
            setModal(true);
          }}>
          <img
            style={{ cursor: "pointer" }}
            src={images.length <= 0 ? IImages.ImageComingSoon : main.image}
            alt=""
          />
        </div>
        {/* <SideBySideMagnifier
        alwaysInPlace={true}
        imageSrc={images.length <= 0 ? IImages.ImageComingSoon : main.image}
        interactionSettings={{ tapDurationInMs: 300 }}
        className="main-image"
      /> */}
      </Wrapper>
      <Modal
        isOpen={getModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}>
          <div>
            <img
              className="zoom_image"
              src={images.length <= 0 ? IImages.ImageComingSoon : main.image}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "3rem",
              position: "absolute",
              bottom: "2.5rem",
            }}>
            {/* <IoIosArrowDropleft
              style={{
                fontSize: "40px",
                background: "white",
                borderRadius: "50%",
                 cursor: "pointer",
              }}
            /> */}
            <IoMdCloseCircleOutline
              onClick={() => {
                closeModal();
              }}
              style={{
                fontSize: "40px",
                background: "white",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
            {/* <IoIosArrowDropright
              style={{
                fontSize: "40px",
                background: "white",
                borderRadius: "50%",
                 cursor: "pointer",
              }}
            /> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;

  .main-image {
    height: 500px;
    max-width: calc(100% - 200px);
    display: flex;
    width: unset !important;
    object-fit: contain;
    margin-top: 15px;
    border-radius: var(--radius);
  }

  img {
    width: 340px;
    ${"" /* width: 100%; */}
    height: 100%;
    display: block;
    border: 2px solid;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 40px;
    max-height: 670px;
    overflow-y: scroll;
    padding: 5px 20px 0 5px;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--clr-primary-5);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--clr-primary-5);
    }
    img {
      height: 100px;
      width: 90px;
      cursor: pointer;
      margin-bottom: 20px;
      object-fit: cover;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }

  @media (max-width: 576px) {
    .main-image {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main-image {
      /* height: 750px; */
    }
    .gallery {
      img {
        /* height: 175px; */
      }
    }
  }

  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    min-width: 30%;
    flex: 0 0 50%;
    .main-image {
      width: 340px !important;
      max-width: 100%;
      height: 600px;
    }
    .gallery {
      flex-direction: unset !important;
      overflow: hidden !important;
      overflow-x: scroll !important;
      max-height: unset;
      max-width: 100%;
      ${"" /* gap: 3rem; */}
      img {
        height: 150px !important;
        margin: 10px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 100%;
    flex: 0 0 100%;
    .main-image {
      height: 440px;
      object-position: top;
    }
  }

  @media screen and (max-width: 1540px) {
    .main-image {
      margin-top: 0px;
      height: 450px;
    }
  }

  @media screen and (max-width: 2560px) {
    .main-image {
      height: 830px;
    }
  }

  @media screen and (max-width: 2260px) {
    .main-image {
      height: 715px;
    }
  }

  @media screen and (max-width: 1920px) {
    .main-image {
      height: 480px;
    }
  }

  @media screen and (max-width: 450px) {
    .main-image {
      ${"" /* height: 400px; */}
    }
  }
`;

export default ProductImages;

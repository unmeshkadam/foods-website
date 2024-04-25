import React, { useState, useCallback } from "react";
import "./../../assets/styles/gallary.css";
import Gallery from "react-photo-gallery";
import Modal from "@mui/material/Modal";
import { Carousel } from "react-responsive-carousel";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import gallaryImg1 from "../../assets/img/gallary-img1.jpg";
import gallaryImg2 from "../../assets/img/gallary-img2.jpg";
import gallaryImg3 from "../../assets/img/gallary-img3.jpg";
import gallaryImg4 from "../../assets/img/gallary-img4.jpg";
import gallaryImg5 from "../../assets/img/gallary-img5.jpg";

type GallaryImgProps = {
  photo: any;
};
const GallaryImg = (props: GallaryImgProps) => {
  return (
    <div className="gallary-img-box">
      <div className="img-box-wrapper">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `url(${props.photo.src}) no-repeat center / cover`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default function PhotoGallarySection() {
  const photos = [
    {
      src: gallaryImg1,
      width: 800,
      height: 533,
    },
    {
      src: gallaryImg2,
      width: 2043,
      height: 1460,
    },
    {
      src: gallaryImg3,
      width: 1200,
      height: 800,
    },
    {
      src: gallaryImg4,
      width: 4480,
      height: 4480,
    },
    {
      src: gallaryImg5,
      width: 3024,
      height: 4032,
    },
    {
      src: gallaryImg3,
      width: 1200,
      height: 800,
    },
    {
      src: gallaryImg4,
      width: 4480,
      height: 4480,
    },
    {
      src: gallaryImg5,
      width: 3024,
      height: 4032,
    },
    {
      src: gallaryImg1,
      width: 800,
      height: 533,
    },
    {
      src: gallaryImg2,
      width: 2043,
      height: 1460,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const closeLightbox = () => {
    setOpenModal(false);
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const openLightbox = useCallback((event: any, { photo, index }: any) => {
    setOpenModal(true);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  return (
    <>
      <div className="gallary-main-container">
        <div className="gallary-heading">
          <p>Restaurant Gallary</p>
        </div>
        <div className="gallary-box-container">
          <Gallery photos={photos} onClick={openLightbox} />
          {viewerIsOpen ? (
            <Modal
              open={openModal}
              onClose={closeLightbox}
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="gallary-container">
                <div className="carousal-close-btn-box">
                  <CloseIcon
                    onClick={closeLightbox}
                    className="carousal-close-btn"
                  />
                </div>{" "}
                <div className="gallary-carousal-container">
                  <Carousel
                    selectedItem={currentImage}
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={false}
                    interval={5000}
                    showIndicators={false}
                    renderArrowPrev={(
                      clickHandler: () => void,
                      hasPrev: boolean,
                      label: string
                    ) =>
                      hasPrev && (
                        <div className="carousal-arrow-wrapper">
                          <ArrowBackIosIcon
                            className="carousal-arrow-left"
                            onClick={clickHandler}
                            fontSize="large"
                          />
                        </div>
                      )
                    }
                    renderArrowNext={(
                      clickHandler: () => void,
                      hasNext: boolean,
                      label: string
                    ) =>
                      hasNext && (
                        <div className="carousal-arrow-wrapper">
                          <ArrowForwardIosIcon
                            className="carousal-arrow-right"
                            onClick={clickHandler}
                            fontSize="large"
                          />
                        </div>
                      )
                    }
                  >
                    {photos.map((photo) => (
                      <GallaryImg photo={photo} />
                    ))}
                  </Carousel>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    </>
  );
}

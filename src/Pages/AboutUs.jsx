import { useState } from "react";
import AppNav from "../Components/AppNav/AppNav";
import Container from "../Components/AboutUs/Container";
import styles from "./AboutUs.module.css";
import Slideshow from "../Components/AboutUs/Slideshow";
import Mission from "../Components/AboutUs/Mission";
import Team from "../Components/AboutUs/Team";
import ChooseUs from "../Components/AboutUs/ChooseUs";
import imgF1 from "../images/filler.jpg";
import imgF2 from "../images/filler2.jpg";
import imgF3 from "../images/filler3.jpg";

function AboutUs() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const closeModal = () => setModalOpen(false);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };
  const images = [imgF1, imgF2, imgF3];

  const plusDivs = (n) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + n + images.length) % images.length
    );
  };

  const currentDiv = (n) => {
    setCurrentSlide(n - 1);
  };

  return (
    <div>
      <AppNav />
      <p className={styles.title}>About Us</p>
      <div className={styles.contDiv} style={{ marginRight: "2%" }}>
        <div style={{ marginRight: "30px", width: "fit-content" }}>
          <Mission />
        </div>
        <div style={{ marginRight: "30px" }}>
          <Container isImg={true} style={{ padding: "0px" }}>
            <Slideshow
              images={images}
              currentSlide={currentSlide}
              plusDivs={plusDivs}
              currentDiv={currentDiv}
            />
          </Container>
          <Team />
        </div>
      </div>

      <div style={{ marginLeft: "1%", marginRight: "40px" }}>
        <ChooseUs
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalContent={modalContent}
          openModal={openModal}
        />
      </div>
    </div>
  );
}

export default AboutUs;

import React, { useEffect, useState } from "react";
import Button from "../Button";
import styles from "./Welcome.module.css";
import slogani from "../../images/slogani2.jpg";
import sloganismall from "../../images/slogani2small.jpg";
import SpinnerFullPage from "../SpinnerFullPage";

function Welcome() {
  const [currentImage, setCurrentImage] = useState(slogani);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setCurrentImage(sloganismall);
      } else {
        setCurrentImage(slogani);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      {loading && <SpinnerFullPage />}
      <img
        className={styles.slogani}
        src={currentImage}
        alt="Slogan"
        onLoad={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
      />
      <Button to={"/Services"} loading={loading}>
        What We Offer
      </Button>
    </div>
  );
}

export default Welcome;

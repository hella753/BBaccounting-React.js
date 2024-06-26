import { useEffect } from "react";
import styles from "./Slideshow.module.css";

function Slideshow({ images, currentSlide, plusDivs, currentDiv }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        plusDivs(-1);
      } else if (event.key === "ArrowRight") {
        plusDivs(1);
      }
    };
    const timer = setInterval(() => {
      plusDivs(1);
    }, 4000);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, plusDivs]);

  return (
    <div className="w3-content w3-display-container">
      {images.map((src, index) => (
        <img
          key={index}
          className={`mySlides ${styles.imageStyle}`}
          src={src}
          style={{
            display: currentSlide === index ? "block" : "none",
            transition: "opacity 10s ease-in-out",
            opacity: currentSlide === index ? 0.8 : 0,
          }}
          alt={`Slide ${index + 1}`}
        />
      ))}
      <div
        className="w3-center w3-display-bottommiddle"
        style={{ width: "100%" }}
      >
        <div
          className="w3-left"
          onClick={() => plusDivs(-1)}
          style={{ color: "black", cursor: "pointer", margin: "20px" }}
        >
          &#10094;
        </div>
        <div
          className="w3-right"
          onClick={() => plusDivs(1)}
          style={{ color: "black", cursor: "pointer", margin: "20px" }}
        >
          &#10095;
        </div>
        <div className={styles.cont}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`w3-badge demo w3-border ${styles.arr} ${
                currentSlide === index ? "w3-gray" : ""
              }`}
              onClick={() => currentDiv(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Slideshow;

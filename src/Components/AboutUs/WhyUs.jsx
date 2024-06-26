import Container from "./Container";
import styles from "./WhyUs.module.css";
import img1 from "../../images/expertise.png";
import img2 from "../../images/commitment.png";
import img3 from "../../images/innovation.png";
import img4 from "../../images/centric.png";
function WhyUs({ source, onClick, children }) {
  if (source == "expertise") {
    source = img1;
  } else if (source == "commitment") {
    source = img2;
  } else if (source == "innovation") {
    source = img3;
  } else if (source == "centric") {
    source = img4;
  }
  return (
    <Container color="#45523e" bgcolor="rgba(255, 255, 255, 0.6)">
      <div className={styles.divC} onClick={onClick}>
        <p className={styles.formatP}>{children}</p>
        <img src={source} className={styles.qual} />
      </div>
    </Container>
  );
}

export default WhyUs;

import Container from "../AboutUs/Container";
import styles from "./Card.module.css";
function Card({ title, children }) {
  return (
    <Container className={styles.contDiv}>
      <div className={styles.heightRegulator}>
        <p
          className={styles.titArticle}
          style={{ paddingTop: "10px", paddingBottom: "15px" }}
        >
          {title}
        </p>
        <p className={styles.formatAnotherP} style={{ color: "#45523e" }}>
          {children}
        </p>
      </div>
    </Container>
  );
}

export default Card;

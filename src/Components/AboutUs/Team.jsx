import styles from "./Team.module.css";
import Container from "./Container";
function Team() {
  return (
    <Container>
      <>
        <p className={styles.titArticle} style={{ padding: "0" }}>
          Our Team
        </p>
        <p
          style={{
            padding: "0",
            paddingBottom: "15px",
            fontSize: "23px",
            color: "#45523e",
          }}
          className={styles.formatAnotherP}
        >
          Behind every success story at BB Accounting is a dedicated team of
          professionals who are passionate about finance and committed to your
          success. Our team combines technical proficiency with a proactive
          approach to deliver exceptional service.
        </p>
      </>
    </Container>
  );
}

export default Team;

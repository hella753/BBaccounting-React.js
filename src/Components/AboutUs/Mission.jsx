import Container from "./Container";
import styles from "./Mission.module.css";

function Mission() {
  return (
    <Container>
      <p
        className={styles.titArticle}
        style={{ paddingTop: "10px", paddingBottom: "15px" }}
      >
        Leading the Way in Business Accounting and Financial Advisory
      </p>
      <p className={styles.formatAnotherP}>
        Welcome to BB Accounting, where expertise meets excellence in business
        accounting and financial advisory services. Established with a
        commitment to empower businesses with insightful financial strategies
        and meticulous accounting practices, we have been a trusted partner for
        countless enterprises across diverse industries.
      </p>
      <p
        className={styles.titArticle}
        style={{ paddingTop: "0", paddingBottom: "15px" }}
      >
        Our Mission
      </p>
      <p className={styles.formatAnotherP}>
        At BB Accounting, our mission is clear: to provide unparalleled
        financial clarity and strategic guidance that empowers businesses to
        thrive. We aim to be more than just service providers; we strive to be
        strategic partners who are deeply invested in the success and growth of
        our clients.
      </p>
    </Container>
  );
}

export default Mission;

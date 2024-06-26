import ContainerServ from "./ContainerServ";
import styles from "./ChooseUs.module.css";
function ChooseUs() {
  return (
    <ContainerServ className={styles.bigContainer}>
      <div
        className={styles.cont}
        style={{
          paddingBottom: "10px",
          marginTop: "1%",
          marginBottom: "20px",
        }}
      >
        <p className={styles.titArticle2}>Expertise</p>
        <p className={styles.formatP}>
          Our team consists of seasoned professionals with extensive experience
          across various industries.
        </p>
        <p className={styles.titArticle2}>Client-Centric Approach</p>
        <p className={styles.formatP}>
          We prioritize understanding your unique challenges and goals to tailor
          solutions that deliver tangible results.
        </p>
        <p className={styles.titArticle2}>Commitment to Excellence</p>
        <p className={styles.formatP}>
          We uphold the highest standards of integrity, accuracy, and
          confidentiality in all our engagements.
        </p>
        <p className={styles.titArticle2}>Innovation</p>
        <p className={styles.formatP}>
          Embracing technology and industry best practices, we continuously
          innovate to deliver efficient and effective solutions.
        </p>
      </div>
    </ContainerServ>
  );
}

export default ChooseUs;

import styles from "./ContactTypes.module.css";
import img1 from "../../images/email.png";
import img2 from "../../images/linkedin.png";
import img3 from "../../images/facebook.png";
function ContactTypes({ source, children }) {
  if (source == "email") {
    source = img1;
  } else if (source == "linkedin") {
    source = img2;
  } else if (source == "facebook") {
    source = img3;
  }
  return (
    <div className={styles.divs}>
      <img src={source} className={styles.qual} />
      <p className={styles.formatP}>{children}</p>
    </div>
  );
}

export default ContactTypes;

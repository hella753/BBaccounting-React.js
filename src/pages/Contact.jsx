import AppNav from "../Components/AppNav/AppNav";
import Container from "../Components/AboutUs/Container";
import styles from "./Contact.module.css";
import ButtonMailto from "../Components/Contact/ButtonMailto";
import ContactTypes from "../Components/Contact/ContactTypes";
function Contact() {
  return (
    <div>
      <AppNav />
      <div className={styles.centerDiv}>
        <div className={styles.title}>Get in Touch</div>
        <div className={styles.formatAnotherP}>
          Whether you are looking for expert financial advice, reliable
          accounting services, or strategic business consulting, BB Accounting
          is here to help. Contact us today to discover how we can support your
          business goals and drive sustainable growth in Georgia. At BB
          Accounting we are not just about numbers; we are about building
          lasting partnerships and creating a brighter financial future for your
          business.
        </div>
        <div className={styles.contDiv} style={{ marginRight: "2%" }}>
          <Container>
            <div>
              <div
                style={{
                  padding: "0",
                  paddingBottom: "15px",
                  fontSize: "23px",
                  color: "#45523e",
                }}
                className={styles.contDiv}
              >
                <ButtonMailto mailto="mailto:advisory.bbcompany@gmail.com">
                  <ContactTypes source={"email"}>
                    advisory.bbcompany@gmail.com
                  </ContactTypes>
                </ButtonMailto>
                <a
                  href="https://www.linkedin.com/company/bbaccountingadvisory/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ContactTypes source={"linkedin"}>
                    Linkedin:&nbsp; BB Accounting
                  </ContactTypes>
                </a>
                <a
                  href="https://www.facebook.com/share/r25HYs82Sx9nmtPA/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ContactTypes source={"facebook"}>
                    Facebook: BB Accounting
                  </ContactTypes>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Contact;

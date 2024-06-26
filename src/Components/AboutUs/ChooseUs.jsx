import styles from "./ChooseUs.module.css";
import Container from "./Container";
import Modal from "./Modal";
import WhyUs from "./WhyUs";
function ChooseUs({ isModalOpen, closeModal, modalContent, openModal }) {
  return (
    <Container>
      <p
        className={styles.titArticle}
        style={{ textAlign: "center", marginBottom: "10px" }}
      >
        Why Us?
      </p>
      <div>
        <div className={styles.contDiv}>
          <Modal show={isModalOpen} onClose={closeModal}>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.text}</p>
          </Modal>

          <WhyUs
            source={"expertise"}
            onClick={() =>
              openModal({
                title: "Expertise",
                text: "Our team consists of seasoned professionals with extensive experience across various industries.",
              })
            }
          >
            Expertise
          </WhyUs>
          <WhyUs
            source={"centric"}
            onClick={() =>
              openModal({
                title: "Client-Centric Approach",
                text: "We prioritize understanding your unique challenges and goals to tailor solutions that deliver tangible results.",
              })
            }
          >
            Client-Centric Approach
          </WhyUs>
          <WhyUs
            source={"commitment"}
            onClick={() =>
              openModal({
                title: "Commitment to Excellence",
                text: "We uphold the highest standards of integrity, accuracy, and confidentiality in all our engagements.",
              })
            }
          >
            Commitment to Excellence
          </WhyUs>
          <WhyUs
            source={"innovation"}
            onClick={() =>
              openModal({
                title: "Innovation",
                text: "Embracing technology and industry best practices, we continuously innovate to deliver efficient and effective solutions.",
              })
            }
          >
            Innovation
          </WhyUs>
        </div>
      </div>
    </Container>
  );
}

export default ChooseUs;

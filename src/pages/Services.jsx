import AppNav from "../Components/AppNav/AppNav";
import styles from "./Services.module.css";
import Card from "../Components/ServicesPage/Card";
import ChooseUs from "../Components/ServicesPage/ChooseUs";
function Services() {
  return (
    <div>
      <AppNav />
      <p className={styles.title}>What We Offer</p>
      <div>
        <div>
          <p
            className={styles.titArticle}
            style={{
              paddingTop: "10px",
              paddingBottom: "15px",
              color: " rgba(255, 255, 255, 0.6)",
            }}
          >
            Our comprehensive suite of services is designed to cater to the
            unique needs of each client:
          </p>
          <div className={styles.bigContainer}>
            <Card title={"Business Accounting"}>
              Precision and accuracy define our approach to business accounting.
              Whether it&apos;s bookkeeping, payroll management, or tax
              compliance, we ensure your financial records are immaculate and
              compliant.
            </Card>

            <Card title={"Taxation Services"}>
              Navigating the complexities of taxation is made easier with our
              expert guidance. We help minimize tax liabilities while ensuring
              compliance with regulatory requirements.
            </Card>
            <Card title={"Consulting and Special Projects"}>
              Beyond routine services, we offer strategic consulting and support
              for special projects, mergers, acquisitions, and more.
            </Card>
          </div>
        </div>
      </div>
      <div style={{ marginRight: "1.5%" }}>
        <p className={styles.title}>Why Choose Us?</p>
        <ChooseUs />
      </div>
    </div>
  );
}

export default Services;

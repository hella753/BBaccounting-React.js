import styles from "./PageNotFound.module.css";
import Button from "../Components/Button";

function PageNotFound() {
  return (
    <div className={styles.center}>
      <div className={styles.cont}>
        <p className={styles.title}>OOPS!</p>
        <p className={styles.notF}>PAGE NOT FOUND</p>
        <p className={styles.text}>
          The page you are looking for does not exit or an other error occurred,
        </p>
        <p className={styles.text}>Go back to home page</p>
      </div>
      <Button to={"/"}>GO BACK</Button>
    </div>
  );
}

export default PageNotFound;

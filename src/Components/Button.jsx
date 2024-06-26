import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";
function Button({ to, loading, children }) {
  return (
    <NavLink to={to}>
      <button
        style={{ display: loading ? "none" : "block" }}
        className={styles.gilaki}
      >
        {children}
      </button>
    </NavLink>
  );
}

export default Button;

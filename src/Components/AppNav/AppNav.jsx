import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { useState } from "react";
import imgL from "../../images/logoForHome.jpg";

function AppNav() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ul
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.nav}
    >
      <li className={styles.logoContainer}>
        <NavLink to="/">
          <img className={styles.logo} src={imgL} alt="Logo" />
        </NavLink>
      </li>
      <div className={styles.navLinks}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/Services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </div>
    </ul>
  );
}

export default AppNav;

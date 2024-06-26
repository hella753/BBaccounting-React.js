import styles from "./Container.module.css";
function Container({
  // bgcolor = " rgb(173, 173, 173)",
  bgcolor = "#bebab3",
  color = "white",
  isImg = false,
  children,
}) {
  return (
    <div
      className={isImg === true ? styles.contImg : styles.container}
      style={{ backgroundColor: bgcolor, color: color }}
    >
      {children}
    </div>
  );
}

export default Container;

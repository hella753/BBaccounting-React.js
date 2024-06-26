import styles from "./ContainerServ.module.css";
function Container({
  // bgcolor = " rgb(173, 173, 173)",
  bgcolor = "#bebab3",
  color = "white",
  children,
}) {
  return (
    <div
      className={styles.containerServ}
      style={{ backgroundColor: bgcolor, color: color }}
    >
      {children}
    </div>
  );
}

export default Container;

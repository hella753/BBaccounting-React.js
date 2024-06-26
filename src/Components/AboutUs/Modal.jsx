import styles from "./Modal.module.css";

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.closeButton} onClick={onClose}>
          &times;
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
}

export default Modal;

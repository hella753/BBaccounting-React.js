import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, children }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {children}
    </Link>
  );
};

export default ButtonMailto;

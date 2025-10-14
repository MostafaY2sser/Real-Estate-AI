import classNames from "classnames";
import { Link } from "react-router-dom";


const ButtonFill = ({ children, href = "#", className }) => {

  return (
    <Link
      to={href}
      className={classNames(
        "inline-block bg-[#e67e22] hover:bg-[#cf711f] text-white font-semibold text-[1.2rem] py-3 px-6 rounded-lg transition-all duration-300",
        className
      )}
    >
      {children}
    </Link>
  );
};


export default ButtonFill;

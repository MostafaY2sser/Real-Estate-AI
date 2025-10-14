
import classNames from "classnames";


const ButtonOutline = ({ children, href = "#", className }) => {

  return (
    <a
      href={href}
      className={classNames(
        "inline-block bg-white hover:bg-[#fdf2e9] text-[#555] font-semibold text-[1.2rem] py-3 px-6 rounded-lg border border-transparent hover:shadow-inner transition-all duration-300",
        className
      )}
    >
      {children}
    </a>
  );
};


export default ButtonOutline;

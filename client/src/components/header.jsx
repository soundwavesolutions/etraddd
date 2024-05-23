import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="mx-auto w-full p-4 md:border-b md:border-b-[#e4e4e4]">
      <Link
        to="/"
        className="max-md:hidden"
      >
        <img
          src="/images/Logo.svg"
          alt="E*TRADE"
          width={150}
        />
      </Link>
      <div className="md:hidden flex items-center justify-center relative">
        <span className="absolute left-0 top-0">
          <FaBars
            size={22}
            fill="#5627d8"
          />
        </span>
        <Link
          to="/"
          className="md:hidden"
        >
          <img
            src="/images/Logo.svg"
            alt="E*TRADE"
            width={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;

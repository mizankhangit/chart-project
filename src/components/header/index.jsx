import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import navData from "./../../data/nav.json";

const Header = () => {
  const location = useLocation();

  return (
    <header className="py-4 bg-slate-100 sticky top-0 z-50">
      <div className="container ">
        <ul className="flex items-center justify-center gap-5">
          {navData?.map((nav, i) => {
            return (
              <li key={i}>
                <Link
                  to={nav?.link}
                  className={`${
                    location.pathname === nav.link ? "text-blue-600" : ""
                  } hover:text-blue-600`}
                >
                  {nav?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;

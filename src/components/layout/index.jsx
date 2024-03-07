import { Outlet } from "react-router-dom";
import Header from "../header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="max-w-[900px] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;

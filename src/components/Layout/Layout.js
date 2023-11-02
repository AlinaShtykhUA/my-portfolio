import { Outlet } from "react-router-dom";

import "./layout.scss";
import { Header, Footer } from "../index";

const Layout = () => {
  return (
    <>
      <div className="header-wrapper">
        <Header />
      </div>

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export { Layout };

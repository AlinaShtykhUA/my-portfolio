import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";
import "./layout.scss";

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

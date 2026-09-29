import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="layout__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
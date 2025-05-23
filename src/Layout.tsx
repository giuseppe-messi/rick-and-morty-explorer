import { Footer } from "./components/Footer/Footer";
import { MainNav } from "./components/MainNav/MainNav";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <>
    <MainNav />
    <main className="main">
      <Outlet />
    </main>
    <Footer />
  </>
);

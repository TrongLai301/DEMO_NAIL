import { Outlet } from "react-router-dom";
import Sidebar from "../components/Genreral/Sidebar/Sidebar";
import Navbar from "../components/Genreral/Navbar/Navbar";
import Footer from "../components/Genreral/Footer/Footer";

export default function Layout() {
  return (
    <div className="layout">
        <Sidebar />
        <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
}

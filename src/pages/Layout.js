import styles from "./Layout.module.css";
import { Outlet } from "react-router";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

export default function Layout() {
  
    return (
      <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  }
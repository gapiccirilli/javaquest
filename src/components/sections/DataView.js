import Map from "./Map";
import styles from "./DataView.module.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function DataView() {

    return (
      <div className={`${styles.viewContainer} sections`}>
        <ViewToolBar />
        <Outlet />
      </div>
    );
  }

  function ViewToolBar() {
    return (
      <div className={styles.viewToolBar}>
        <div className={styles.toolBarLeft}>
        </div>
        <div className={styles.toolBarNav}>
          <NavLink to="map-view"><span>Map</span></NavLink>
          <NavLink to="chart-view"><span>Chart</span></NavLink>
        </div>
        <div className={styles.toolBarFilter}>
          Filter
        </div>
      </div>
    );
  }
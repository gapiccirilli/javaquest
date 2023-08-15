import styles from "./Home.module.css";
import CafeList from "../components/sections/CafeList";
import DataView from "../components/sections/DataView";
import Favorites from "../components/sections/Favorites";

export default function Home() {
  
    return (
      <main className={styles.home}>
        <CafeList />
        <DataView />
        <Favorites />
      </main>
    );
  }
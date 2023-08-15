import styles from "./Home.module.css";
import CafeList from "../components/sections/CafeList";
import Map from "../components/sections/Map";
import Favorites from "../components/sections/Favorites";

export default function Home() {
  
    return (
      <main className={styles.home}>
        <CafeList />
        <Map />
        <Favorites />
      </main>
    );
  }
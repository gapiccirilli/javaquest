import AccountButton from "../buttons/AccountButton";
import Logo from "../logo/Logo";
import CoffeeSearchBar from "../search/CoffeeSearchBar";
import styles from "./NavBar.module.css";


export default function NavBar() {
  
    return (
      <nav className={styles.nav}>
        <div className={styles.navBarLeft}>
          <Logo />
        </div>
        <div className={styles.navBarCenter}>
          <CoffeeSearchBar />
        </div>
        <div className={styles.navBarRight}>
          <AccountButton />
        </div>
      </nav>
    );
  }
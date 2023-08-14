import styles from "./CoffeeSearchBar.module.css";

export default function CoffeeSearchBar() {
  
    return (
      <form>
        <input className={styles.coffeeSearch} type="text" placeholder="Seek your fix..." />
      </form>
    );
  }
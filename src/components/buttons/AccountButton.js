import styles from "./AccountButton.module.css";

export default function AccountButton({ name="Guest" }) {
  
    return (
      <button className={styles.btn}>{name}</button>
    );
  }
import { History, Home, Settings, Sun } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <a href="#" className={styles.menuLink}>
          <Home size={30} />
        </a>
        <a href="#" className={styles.menuLink}>
          <History size={30} />
        </a>
        <a href="#" className={styles.menuLink}>
          <Settings size={30} />
        </a>
        <a href="#" className={styles.menuLink}>
          <Sun size={30} />
        </a>
      </div>
    </>
  );
}

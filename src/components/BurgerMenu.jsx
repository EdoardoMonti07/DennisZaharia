import { useState } from "react";
import styles from "./BurgerMenu.module.css";

function BurgerMenu({ children }) {
  const [burgerClass, setBurgerClass] = useState(
    `${styles.burgerBar} ${styles.unclicked}`
  );
  const [menuClass, setMenuClass] = useState(`${styles.menu} ${styles.hidden}`);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(`${styles.burgerBar} ${styles.clicked}`);
      setMenuClass(`${styles.menu}`);
    } else {
      setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`);
      setMenuClass(`${styles.menu} ${styles.hidden}`);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className={styles.burgerMenu} onClick={updateMenu}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>
      <div className={menuClass}>{children}</div>
    </>
  );
}

export default BurgerMenu;

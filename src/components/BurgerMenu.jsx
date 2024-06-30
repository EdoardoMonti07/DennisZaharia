import { useState } from "react";
import styles from "./BurgerMenu.module.css";

function BurgerMenu({ children }) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };

  return (
    <>
      <div className={styles.burgerMenu} onClick={updateMenu}>
        <div
          className={`${styles.burgerBar} ${
            isMenuClicked ? styles.clicked : styles.unclicked
          }`}
        ></div>
        <div
          className={`${styles.burgerBar} ${
            isMenuClicked ? styles.clicked : styles.unclicked
          }`}
        ></div>
        <div
          className={`${styles.burgerBar} ${
            isMenuClicked ? styles.clicked : styles.unclicked
          }`}
        ></div>
      </div>
      <div
        className={`${styles.menu} ${
          isMenuClicked ? styles.visible : styles.hidden
        }`}
      >
        {children}
      </div>
    </>
  );
}

export default BurgerMenu;

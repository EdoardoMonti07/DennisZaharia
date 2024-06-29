import { useEffect, useState, useRef } from "react";
import BurgerMenu from "./BurgerMenu";
import styles from "./Home.module.css";

function Home({ homeRef, aboutRef, agencyRef, actionRef }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const isMobile = windowSize < 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowSize(window.innerWidth)
      );
    };
  }, []);

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <section className={styles.homeContainer} ref={homeRef}>
      <nav className={styles.navContainer}>
        {isMobile ? (
          <BurgerMenu
            className={styles.burgerMenu}
            isMenuClicked={isMenuClicked}
            setIsMenuClicked={setIsMenuClicked}
          >
            {/* Menu items */}
            <button
              className={styles.navItem}
              onClick={() => {
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                setIsMenuClicked(false); // Close menu on click
              }}
            >
              CHI SONO
            </button>
            <button
              className={styles.navItem}
              onClick={() => {
                agencyRef.current?.scrollIntoView({ behavior: "smooth" });
                setIsMenuClicked(false); // Close menu on click
              }}
            >
              MOVIMENTO
            </button>
            <button
              className={styles.navItem}
              onClick={() => {
                actionRef.current?.scrollIntoView({ behavior: "smooth" });
                setIsMenuClicked(false); // Close menu on click
              }}
            >
              INIZIA CON NOI
            </button>
            <button
              className={styles.navItem}
              onClick={() => {
                actionRef.current?.scrollIntoView({ behavior: "smooth" });
                setIsMenuClicked(false); // Close menu on click
              }}
            >
              SOCIAL
            </button>
          </BurgerMenu>
        ) : (
          <>
            {/* Non-mobile navigation */}
            <button
              className={styles.navItem}
              onClick={() => {
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CHI SONO
            </button>
            <button
              className={styles.navItem}
              onClick={() => {
                agencyRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              MOVIMENTO
            </button>
            <button
              className={styles.navItem}
              onClick={() => {
                actionRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              INIZIA CON NOI
            </button>
            <button
              className={styles.navItem}
              onClick={() => {
                actionRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              SOCIAL
            </button>
          </>
        )}
      </nav>
      <div className={styles.heading}>
        <h1>DENNIS ZAHARIA</h1>
      </div>
      <div className={styles.pageEnd}>
        <div className={styles.scrollAnimation}></div>
      </div>
    </section>
  );
}

export default Home;

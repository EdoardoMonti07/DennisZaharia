import React, { useState, useEffect } from "react";
import styles from "./Social.module.css";

function Social({ homeRef, aboutRef, agencyRef, actionRef }) {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      setShowFooter(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`${styles.footerContainer} ${
        showFooter ? styles.show : styles.hide
      }`}
    >
      <div className={styles.socialIcons}>
        <a
          href="https://www.instagram.com/dennis.zaharia?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
          target="_blank"
        >
          <img src="instagram.png" className={styles.icons}></img>
        </a>
        <a href="https://www.tiktok.com/@dennis15zaharia" target="_blank">
          <img src="tiktok.png" className={styles.icons}></img>
        </a>
      </div>
      <div className={styles.footerNav}>
        <ul>
          <li>
            <button
              onClick={() => {
                homeRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Chi sono
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                agencyRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Movement
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                actionRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Inizia con noi
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Social;

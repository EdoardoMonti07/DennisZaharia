import React, { useEffect, useRef, useState } from "react";
import styles from "./Action.module.css";

function Action({ actionRef }) {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className={styles.actionContainer} ref={actionRef}>
      <form
        className={styles.form}
        action="https://docs.google.com/forms/d/e/1FAIpQLSe8Fv9L4bDiGU0N2wAoo6iXaFtxXzd0hz--RKSn--WzxER2Xw/viewform"
        target="_blank"
      >
        <h2
          className={`${styles.heading} ${
            isVisible ? styles.visible : styles.hidden
          }`}
          ref={headingRef}
        >
          Vorresti entrare a far parte della nostra community?
        </h2>
        <button
          className={`${styles.btn} ${
            isVisible ? styles.visible : styles.hidden
          }`}
          ref={buttonRef}
          value="Go to form"
        >
          COMPILA IL MODULO!
        </button>
      </form>
    </section>
  );
}

export default Action;

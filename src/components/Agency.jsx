import React, { useEffect, useRef } from "react";
import styles from "./Agency.module.css";

function Agency({ agencyRef }) {
  const contentSection1Ref = useRef(null);
  const contentSection2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentSection1Ref.current) {
              entry.target.classList.add(styles.visible);
              setTimeout(() => {
                if (contentSection2Ref.current) {
                  contentSection2Ref.current.classList.add(styles.visible);
                }
              }, 500); // Delay for the second section
            }
          }
        });
      },
      { threshold: 0.1 } // Adjust as necessary
    );

    if (contentSection1Ref.current) {
      observer.observe(contentSection1Ref.current);
    }

    if (contentSection2Ref.current) {
      observer.observe(contentSection2Ref.current);
    }

    return () => {
      if (contentSection1Ref.current) {
        observer.unobserve(contentSection1Ref.current);
      }

      if (contentSection2Ref.current) {
        observer.unobserve(contentSection2Ref.current);
      }
    };
  }, []);

  return (
    <section className={styles.agencyContainer} ref={agencyRef}>
      <div className={styles.pageStart}></div>
      <div className={styles.content}>
        <div className={styles.contentSection1} ref={contentSection1Ref}>
          <h2 className={styles.heading}>DI COSA MI OCCUPO?</h2>
          <p className={styles.text}>
            Faccio parte di{" "}
            <a
              className={styles.logo}
              href={"https://move-ment.it/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="movement-logo.png"
                alt="movement logo"
                className={styles.logo}
              />
            </a>
            , una famiglia che unisce persone con background diversi per
            costruire carriere 2.0 nel digital business. Offriamo strumenti,
            formazione e supporto, guidati da fondatori che hanno generato oltre
            10 milioni di dollari in vendite e aiutato migliaia di persone a
            realizzare le proprie carriere nella nuova economia digitale.
          </p>
        </div>
        <div className={styles.contentSection2} ref={contentSection2Ref}>
          <h2 className={styles.heading}>I NOSTRI OBIETTIVI</h2>
          <p className={styles.text}>
            <a
              className={styles.logo}
              href={"https://move-ment.it/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="movement-logo.png"
                alt="movement logo"
                className={styles.logo}
              />
            </a>{" "}
            sfrutta il network nel digital business, collaborando con
            multinazionali stabili. Crediamo nel lavoro duro, nella dedizione e
            nell’apprendimento continuo. Organizziamo retreat ed eventi per
            insegnare competenze di vendita, comunicazione, digital marketing e
            leadership, offrendo supporto e formazione di alta qualità per
            raggiungere i propri obiettivi senza promesse e illusioni.
          </p>
        </div>
      </div>
      <div className={styles.pageEnd}></div>
    </section>
  );
}

export default Agency;

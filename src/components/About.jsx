import styles from "./About.module.css";

function About({ aboutRef }) {
  return (
    <section className={styles.aboutContainer} ref={aboutRef}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Sono Dennis, ho 18 anni e qua sotto racconto un po’ di me!
        </h2>
        <p className={styles.text}>
          So come ti senti.
          <br /> Non è facile trovare il proprio posto nel mondo. Anche io, fino
          a non molto tempo fa, provavo paura nel pensare al mio futuro. Ma
          lascia che ti racconti la mia storia!
          <span className={styles.emoji}>📖</span>
          <br /> Fin da quando ero piccolo, ho sempre trovato affascinante il
          mondo delle persone che hanno avuto successo nella vita. La mia
          famiglia non era certo ricca, anzi, ma credo proprio che sia per
          questo motivo che fin da quando ho memoria sono stato molto attento a
          gestire i miei pochi risparmi. Vivere in un appartamento nella
          provincia di Padova sembrava lontanissimo dal sogno di un bambino,
          anche se non mi sono mai mancati il pane e i beni essenziali. Come
          ogni ragazzino di 12 anni, avevo le mie passioni: passavo le giornate
          a giocare ai videogiochi, a giocare a calcio con i miei amici o a
          comportarmi disubbidendo alle regole dei miei genitori.
          <br /> Ma la mia passione per il raggiungimento del successo non
          smetteva di ardere. <span className={styles.emoji}>🔥</span>
          <br /> Ad un certo punto, la monotonia delle mie giornate, le
          pressioni scolastiche, e la responsabilità che sentivo addosso nei
          confronti della mia famiglia mi hanno portato a prendere una
          decisione.
          <br /> Sentivo il bisogno di cambiare qualcosa, di dare una svolta
          alla mia vita. <span className={styles.emoji}>📈</span>
          <br /> Un giorno scrollando su Tik Tok trovai un ragazzo di Milano che
          raccontava di come aveva lanciato la propria attività online.
          Incuriosito gli scrissi, mi informai bene e presi la decisione di
          intraprendere questa strada.
          <br /> Tutti mi criticavano, persi moltissime persone. Gli unici amici
          rimasti seriamente al mio fianco si contano sulle dita di una mano.
          <br /> Ma fortunatamente trovai delle persone fantastiche con cui ho
          legato moltissimo.
          <span className={styles.emoji}>🤝🏻</span> <br />
          Ad oggi facciamo tantissimi viaggi ed eventi insieme oltre a
          divertirci e a lavorare per la nostra crescita sia economica che
          personale.
          <span className={styles.emoji}>👀</span> <br />
          Tutta quella monotonia che mi distruggeva, ora è solo un lontano
          ricordo. Sono felice, felice delle mie scelte, felice dei miei
          traguardi, felice di aiutare le persone con ciò che ho imparato,
          puntando tutti al raggiungimento della nostra libertà finanziaria.
          <span className={styles.emoji}>❤️‍🔥💸</span> <br />
          Auguro anche a te di compiere cambiamenti nella tua vita, di tenere la
          mente aperta, gli occhi puntati sul tuo obiettivo, ed il cuore “con la
          valigia in mano”, pronto per una nuova avventura!
          <span className={styles.emoji}>✈️</span>
        </p>
      </div>
      <div className={styles.image}>
        <img src="image1.png" alt="Image Description" />
      </div>
    </section>
  );
}

export default About;

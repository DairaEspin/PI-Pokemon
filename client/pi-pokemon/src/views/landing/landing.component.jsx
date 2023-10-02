import styles from "./landing.module.css";
import landingTitulo from "../../components/img/pokemons4.png";

function Landing() {
  return (
    <div className={styles.landingHome}>
      <div className={styles.buttonContainer}>
        <div>
          <img
            src={landingTitulo}
            alt="landingTitulo"
            className={styles.landingtitulo}
          />
        </div>
        <a href="/home">
          <button className={styles.buttonDetalle}>Home</button>
        </a>
        <div className={styles.imagenesDeAbajo}>
        </div>
      </div>
    </div>
  );
}

export default Landing;

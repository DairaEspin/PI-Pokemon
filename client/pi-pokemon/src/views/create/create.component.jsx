import styles from "./create.module.css";
import Searchbar from "../../components/searchbar/searchbar.component";
import FormaCreacion from "../../components/formscreate/formscreate.component";

function Create() {
  return (
    <div className={styles.createPadre}>
      <Searchbar />
      <div className={styles.formuPadre}>
      <FormaCreacion />
      </div>
    </div>
  );
}

export default Create;
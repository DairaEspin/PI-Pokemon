import styles from "./formscreate.module.css";
import { useState } from "react";
import axios from "axios";

const FormaCreacion = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [speed, setSpeed] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [nameError, setNameError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hpError, setHpError] = useState(false)
  const [attackError, SetAttackError] = useState(false);
  const [speedError, setSpeedError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [weightError, setWeightError] = useState(false);

  const handleSubmit = async (event) => {
    const data = {
      name: name,
      image: image,
      hp: hp,
      attack: attack,
      speed: speed,
      height: height,
      weight: weight,
      type: selectedTypes,
    };

    console.log(data);

    
    event.preventDefault();
    if(nameError || imageError || hpError || attackError || speedError || heightError || weightError){
      alert("No puedes enviar el formulario si contiene errores");
    } else { 
      try {
      const response = await axios.post("http://localhost:3001/post", data);
      alert('Pokemon agregado exitosamente')
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }}
    

  };
  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    if (selectedTypes.includes(selectedType)) {
      setSelectedTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((type) => type !== selectedType)
      );
    } else {
      setSelectedTypes((prevSelectedTypes) => [
        ...prevSelectedTypes,
        selectedType,
      ]);
    }
  };

  return (
    <div className={styles.formupadre}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Nombre:
          <input
            className={`${styles.input} ${nameError ? styles.error : ""}`}
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              if (/\d/.test(event.target.value)) {
                setNameError(true);
              } else {
                setNameError(false);
              }
            }}
          />
        </label>
        <br />
        <label className={styles.label}>
          image URL:
          <input
            className={`${styles.input} ${imageError ? styles.error : ""}`}
            type="text"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
              if (image.length > 70) {
                setImageError(true);
              } else {
                setImageError(false);
              }
            }}
          />
        </label>
        <br />
        <label className={styles.label}>
          hp:
          <input
            className={`${styles.input} ${hpError ? styles.error : ""}`}
            type="number"
            value={hp}
            onChange={(event) => {
              setHp(event.target.value);
              if (event.target.value > 300) {
                setHpError(true);
              } else {
                setHpError(false);
              }
            }}
          />
        </label>
        <br />
        <label className={styles.label}>
          attack:
          <input
            className={`${styles.input} ${attackError ? styles.error : ""}`}
            type="number"
            value={attack}
            onChange={(event) => {
              setAttack(event.target.value);
              if (event.target.value > 300) {
                SetAttackError(true);
              } else {
                SetAttackError(false);
              }
            }}
          />
        </label>
        <br />
        <label className={styles.label}>
          speed:
          <input
            className={`${styles.input} ${speedError ? styles.error : ""}`}
            type="number"
            value={speed}
            onChange={(event) => {
              setSpeed(event.target.value);
              if (event.target.value > 300) {
                setSpeedError(true);
              } else {
                setSpeedError(false);
              }
            }}
          />
        </label>
        <br />
        <label className={styles.label}>
          height:
          <input
            className={`${styles.input} ${heightError ? styles.error : ""}`}
            type="number"
            value={height}
            onChange={(event) => {
              setHeight(event.target.value);
              if (event.target.value > 300) {
                setHeightError(true);
              } else {
                setHeightError(false);
              }
            }}
          />
        </label>
        <br />
        <label className={styles.label}>
          weight:
          <input
            className={`${styles.input} ${weightError ? styles.error : ""}`}
            type="number"
            value={weight}
            onChange={(event) => {
              setWeight(event.target.value);
              if (event.target.value > 300) {
                setWeightError(true);
              } else {
                setWeightError(false);
              }
            }}
          />
        </label>
        <label className={styles.label}>
          Pokemon Types:
          <select
            multiple
            className={styles.select}
            onChange={handleTypeChange}
          >
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
            <option value="unknown">Unknown</option>
            <option value="shadow">Shadow</option>
          </select>
        </label>
        <br />
        <button className={styles.button} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormaCreacion;
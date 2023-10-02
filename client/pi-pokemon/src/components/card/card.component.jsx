import styles from "./card.module.css";


function Card(props) {

 const handleClickOnTarjeta = () => {  //pasada por props del componente padre Cards
   props.handleSearchClick(props.name);
 };
 
  return (
    <div onClick={handleClickOnTarjeta} className={styles.tarjetita}>
      <h2>{props.name}</h2>
      <img className={styles.img} src={props.image} alt={props.name} />
      {props.types && <h3>Tipos: {props.types}</h3>}
      {props.hp && <h2>{props.hp}</h2>}
      {props.speed && <h2>{props.speed}</h2>}
      {props.attack && <h2>{props.attack}</h2>}
      {props.weight && <h2>{props.weight}</h2>}
      {props.height && <h2>{props.height}</h2>}
    </div>
  );
}

export default Card;
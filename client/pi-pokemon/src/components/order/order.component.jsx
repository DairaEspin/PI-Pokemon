import styles from "./order.module.css";

const OrdenaCard = ({ name, image, attack }) => {
  return (
    <div className={styles.tarjetita}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h2>Attack: {attack}</h2>
    </div>
  );
};


export default OrdenaCard;

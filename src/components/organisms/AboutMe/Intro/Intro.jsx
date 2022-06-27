import { RAW_IMAGES } from "helpers/Constant";
import styles from "./Intro.module.scss";

export default function Intro(props) {
  const { desc, image } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        <img
          src={`${RAW_IMAGES}${image}`}
          alt="Profile"
          height={80}
          width={80}
        />
      </div>
      <p className={styles.desc}>{desc}</p>
      <hr />
    </div>
  );
}

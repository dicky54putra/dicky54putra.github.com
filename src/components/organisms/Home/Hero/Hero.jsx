import Button from "components/atoms/Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.iam}>I am</span>
        <h1 className={styles.dicky}>Dicky Saputra</h1>
        <h2 className={styles.role}>a Frontend Developer</h2>
      </div>
      <div className={styles.body}>
        <p>
          Hello, My Name is Dicky Saputra and I'm from Jepara, Indonesia. I'm a
          Frontend Web Developer and Currently a Frontend Web Developer in
          Madeindonesia. I like Learning a new Something and making it a new
          Experience in My Life. My portfolio can check at
          https://dicky54putra.github.io
        </p>
      </div>
      <div className={styles.cta}>
        <Button>Email Me</Button>
        <Button>Email Me</Button>
      </div>
    </div>
  );
};

export default Hero;

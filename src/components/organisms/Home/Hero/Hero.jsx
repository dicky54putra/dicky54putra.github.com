import Button from "components/atoms/Button";
import { getAbout, getConfig } from "helpers/GlobalState/ContentSlice";
import { useSelector } from "react-redux";
import styles from "./Hero.module.scss";

const Hero = () => {
  const about = useSelector(getAbout);
  const config = useSelector(getConfig);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.iam}>I am</span>
        <div className={styles.wrapperNameRole}>
          <h1 className={styles.dicky}>{about?.name}</h1>
          <h2 className={styles.role}>a {config?.role}</h2>
        </div>
      </div>
      <div className={styles.body}>
        <p>{about?.short_desc}</p>
      </div>
      <div className={styles.cta}>
        <Button variant="secondary">Email Me</Button>
        <Button isLink to="/asdf">
          Email Me
        </Button>
      </div>
    </div>
  );
};

export default Hero;

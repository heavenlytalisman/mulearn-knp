import styles from "./About.module.css";
import data from "../../../data.json";

const About = () => {
  return (
    <div className={styles.AboutWrapper} id="about">
      <h1>About Us</h1>
      <div className={styles.aboutContent}>
        <div className={styles.section}>
          <p>{data.about.introduction}</p>
        </div>
        
        <div className={styles.section}>
          <h2>Our Mission</h2>
          <p>{data.about.mission}</p>
        </div>

        <div className={styles.section}>
          <h2>About µLearn</h2>
          <p>{data.about.mulearn}</p>
        </div>
      </div>
    </div>
  );
};

export default About;

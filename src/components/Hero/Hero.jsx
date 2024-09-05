import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <br />
          <TypeAnimation
        sequence={['Chandaan Balakrishna', 100]}
        speed={-40}
        repeat={1}
      />
        </h1>
        <p className={styles.description}>
        As an experienced Software Developer, 
        I specialize in React Native, React.js, Node.js, and the MERN Stack, alongside a strong background in .NET Full Stack development. 
        I have a proven track record of leading and executing successful projects, consistently delivering high-quality software solutions within tight deadlines. 
        My commitment to excellence and innovation drives me to push technological boundaries and achieve exceptional results.
        </p>
        <a href="mailto:chandaanbalakrishna@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Chan.jpeg")}
        alt="Chandaan Balakrishna"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

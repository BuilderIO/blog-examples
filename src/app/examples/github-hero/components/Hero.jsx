"use client";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div
      className={`${styles.heroSection} hero-container`}
      aria-labelledby="main-heading"
    >
      <div className="hero-text">
        <div className={styles.heroContent}>
          <h1 id="main-heading" className={styles.heroTitle} tabIndex={0}>
            Scroll-driven animations rock!
          </h1>
          <p className={styles.heroSubtitle} tabIndex={0}>
            There's some nice CSS magic going on here. Isn't it?
          </p>
        </div>
      </div>
      <div
        className={`${styles.previewBox} hero-image`}
        role="presentation"
        aria-hidden="true"
      />
    </div>
  );
};

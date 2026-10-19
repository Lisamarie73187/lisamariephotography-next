import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright © Lisa Marie Photography {new Date().getFullYear()} | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.appFooter}>
    <p>
      &copy; {new Date().getFullYear()} Giuseppe's take home assignment for Deel
    </p>
  </footer>
);

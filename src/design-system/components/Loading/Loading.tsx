import React from "react";
import styles from "./Loading.module.css";

export const Loading: React.FC = () => (
  <div className={styles.spinner} role="status" aria-label="Loading">
    <div className={styles.spinnerCircle} />
  </div>
);

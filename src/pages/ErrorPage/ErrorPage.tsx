import React from "react";
import styles from "./ErrorPage.module.css";
import { Button } from "../../design-system/components/Button/Button";

type Props = {
  onClearError?: () => void;
};

export const ErrorPage: React.FC<Props> = ({ onClearError }) => {
  const handleBackHome = () => {
    onClearError?.();
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <h2>Something is not right!</h2>
      <Button text="Go Back Home" onClick={handleBackHome} />
    </div>
  );
};

import React from "react";
import styles from "./NotFound.module.css";
import { Button } from "../../design-system/components/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className="titleH2">We can’t find that page!</h2>

      <Button onClick={() => navigate("/")} text="Go Back Home" />
    </div>
  );
};

export default NotFound;

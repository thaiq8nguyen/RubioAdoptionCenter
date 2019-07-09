import React from "react";
import styles from "./Image.module.less";

const Image = ({ src }) => {
  return (
    <div>
      <img src={src} alt="true" className={styles.image} />
    </div>
  );
};

export default Image;

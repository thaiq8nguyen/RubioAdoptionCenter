import React from "react";
import styles from "./Card.module.less";

const Card = ({ flat, roundedBorder, children }) => {
  console.log(children);
  let boxShadow = `0px 3px 1px -2px rgba(0,0,0,0.2), 
  0px 2px 2px 0px rgba(0,0,0,0.14), 
  0px 1px 5px 0px rgba(0,0,0,0.12)`;

  let borderRadius = `0`;

  if (flat) {
    boxShadow = "none";
  }

  if (roundedBorder) {
    borderRadius = `0.5rem`;
  }

  const propsStyles = {
    boxShadow: boxShadow,
    borderRadius: borderRadius
  };

  return (
    <div className={styles.card} style={propsStyles}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  flat: false,
  roundedBorder: false
};

export default Card;

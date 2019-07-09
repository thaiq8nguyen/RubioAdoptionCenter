import React from "react";
import cx from "classnames";
import styles from "./Button.module.less";

const Button = ({ className, name, onClick }) => {
  const handleOnClick = () => {
    onClick();
  };
  return (
    <button className={cx(styles.button, className)} onClick={handleOnClick}>
      {name}
    </button>
  );
};
Button.defaultProps = {
  className: ""
};
export default Button;

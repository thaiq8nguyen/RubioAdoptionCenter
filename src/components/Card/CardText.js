import React from "react";
import cx from "classnames";
import styles from "./CardText.module.less";

const CardText = ({ className, children }) => {
  return <div className={cx(styles.cardText, className)}>{children}</div>;
};
CardText.defaultProps = {
  className: ""
};
export default CardText;

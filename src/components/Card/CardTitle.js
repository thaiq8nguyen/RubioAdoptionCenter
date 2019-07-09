import React from "react";
import cx from "classnames";
import styles from "./CardTitle.module.less";

const CardTitle = ({ className, children }) => {
  return <div className={cx(styles.cardTitle, className)}>{children}</div>;
};

CardTitle.defaultProps = {
  className: ""
};
export default CardTitle;

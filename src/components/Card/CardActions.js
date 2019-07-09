import React from "react";
import cx from "classnames";
import styles from "./CardActions.module.less";

const CardActions = ({ className, children }) => {
  return <div className={cx(styles.cardActions, className)}>{children}</div>;
};
CardActions.defaultProps = {
  className: ""
};
export default CardActions;

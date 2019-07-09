import React from "react";
import styles from "./Layout.module.less";

const Layout = ({ column, wrap, children }) => {
  let direction = "row";
  let flexWrap = "nowrap";

  if (column) {
    direction = "column";
  }

  if (wrap) {
    flexWrap = "wrap";
  }

  const propsStyles = {
    flexDirection: direction,
    flexWrap: flexWrap
  };

  return (
    <div className={styles.layout} style={propsStyles}>
      {children}
    </div>
  );
};

export default Layout;

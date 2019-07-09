import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-container">
        <FontAwesomeIcon icon="spinner" size="2x" />
      </div>

      <span className="loading-text">Loading...Please wait</span>
    </div>
  );
};

export default Loading;

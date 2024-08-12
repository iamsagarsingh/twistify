import React from "react";
import PropTypes from "prop-types";
import "./BasicLoader.css";

const BasicLoader = ({ size, bgColor='gray', spinnerColor='orange' }) => {
  const styles = {
    padding:
      size === "large"
        ? "30px 30px"
        : size === "medium"
        ? "20px 20px"
        : "10px 10px",
    borderWidth:
      size === "large" ? "10px" : size === "medium" ? "8px" : "5px",
    borderStyle: "solid",
    borderColor: `${spinnerColor} ${bgColor} ${bgColor} ${bgColor}`,
    borderRadius: "50%",
  };

  return <div style={styles} className="basic-loader"></div>;
};

BasicLoader.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  spinnerColor: PropTypes.string,
};

export default BasicLoader;

import React from "react";

export default function header() {
  return <div style={containerStyles}></div>;
}

const containerStyles = () => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    height: "3rem",
    backgroundColor: "#000",
    color: "#fff",
  };
};

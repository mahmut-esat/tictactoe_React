import React from "react";

export default function Box({ value, onClick, disabled }) {
  return (
    <button
      className="box"
      style={styles.container}
      disabled={disabled}
      onClick={onClick}
    >
      <div disabled={disabled} style={styles.text}>
        {value}
      </div>
    </button>
  );
}

const styles = {
  container: {
    aspectRatio: 1,
    borderRadius: 5,
    margin: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 45,
    color: "black",
    fontWeight: "500",
    textAlign: "center"
  }
};
export default function MyButton({ onClick, title }) {
    return (
      <button id="option" onClick={onClick} style={styles.container}>
        {title}
      </button>
    );
  }
  
  const styles = {
    container: {
      backgroundColor: "steelblue",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center"
    }
  };
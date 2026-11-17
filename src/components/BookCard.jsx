function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  const styleCarte = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    margin: "12px 0",
    backgroundColor: "#fff",
    color: "#222",
    textAlign: "left",
  };

  const styleBouton = {
    marginTop: "10px",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: estDisponible ? "#2e7d32" : "#c62828",
  };

  return (
    <div style={styleCarte}>
      <h3 style={{ margin: "0 0 6px" }}>{titre}</h3>
      <p style={{ margin: "0 0 10px" }}>Auteur : {auteur}</p>

      <p style={{ margin: 0 }}>
        {estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}
      </p>

      <button style={styleBouton} onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  );
}

export default BookCard;
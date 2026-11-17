import { useState } from "react";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", estDisponible: true },
    { id: 2, titre: "Une si longue lettre", auteur: "Mariama Bâ", estDisponible: true },
    { id: 3, titre: "L'Étranger", auteur: "Albert Camus", estDisponible: false },
    { id: 4, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: true },
  ]);

  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  const nbDisponibles = books.filter((book) => book.estDisponible).length;

  const onClickEmprunt = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? { ...book, estDisponible: !book.estDisponible }
          : book
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (titre.trim() === "" || auteur.trim() === "") return;

    const nouveauLivre = {
      id: Date.now(),
      titre: titre.trim(),
      auteur: auteur.trim(),
      estDisponible: true, 
    };

    setBooks([...books, nouveauLivre]);
    setTitre("");
    setAuteur("");
  };

  const styleChamp = {
    padding: "8px",
    marginRight: "8px",
    marginBottom: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "1.8rem", lineHeight: 1.3 }}>
  📚 Livres disponibles :{" "}
         <span style={{ whiteSpace: "nowrap" }}>
    {nbDisponibles} / {books.length}
         </span>
       </h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          style={styleChamp}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          style={styleChamp}
        />
        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
          Ajouter
        </button>
      </form>

      {books.map((book) => (
        <BookCard
          key={book.id}
          titre={book.titre}
          auteur={book.auteur}
          estDisponible={book.estDisponible}
          onClickEmprunt={() => onClickEmprunt(book.id)}
        />
      ))}
    </div>
  );
}

export default App;
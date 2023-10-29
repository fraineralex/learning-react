import "./App.css";
import { useCatImage } from "./services/hooks/useCatImage";
import { useCatFact } from "./services/hooks/useCatFact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact })


  const handleGetNewFact = async () => {
    refreshFact()
  };

  return (
    <main>
      <Header />
      <button onClick={handleGetNewFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image extracted using the first three words for ${fact}`}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: 500,
            maxHeight: 500,
            objectFit: "contain",
          }}
        />
      )}
      <Footer />
    </main>
  );
}

import "./App.css";
import { useCatImage } from "./services/hooks/useCatImage";
import { useCatFact } from "./services/hooks/useCatFact";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact })


  const handleGetNewFact = async () => {
    refreshFact()
  };

  return (
    <main>
      <h1>Cats App</h1>
      <button onClick={handleGetNewFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}

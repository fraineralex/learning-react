const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage ({ fact }) {
  if (!fact) return { imageUrl: null };

  const threeFirstWords = fact.split(" ", 3).join(" ");
  const imageUrl = `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red`
  
  return { imageUrl }
}
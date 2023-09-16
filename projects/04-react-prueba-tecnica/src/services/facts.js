const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  if (!response.ok) throw new Error("Error fetching cat fact");
  const data = await response.json();
  const { fact } = data;
  return fact;
}

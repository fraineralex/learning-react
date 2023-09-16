import { useEffect, useState } from "react";
import { getRandomFact } from "../facts";

export function useCatFact () {
  const [fact, setFact] = useState();

  const refreshFact = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  }

  useEffect(() => {
    (async () => {
      await refreshFact();
    })()
  }, []);

  return { fact, refreshFact }
}

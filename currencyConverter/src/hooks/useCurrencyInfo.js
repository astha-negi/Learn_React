import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.rates); 
      })
      .catch((err) => console.error("API Fetch Error:", err));
  }, [currency]);

  return data;
}

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      );

      const res = await data.json();
      setData(res[currency]);
    }

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

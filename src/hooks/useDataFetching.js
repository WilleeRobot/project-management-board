import { useEffect, useState } from "react";

const useDataFetching = (dataSource) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(dataSource);
        const results = await data.json();
        if (results) {
          setData(results);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    };

    getData();
  }, [dataSource]);
  return [loading, error, data];
};

export default useDataFetching;

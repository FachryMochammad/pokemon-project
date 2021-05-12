import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (fetchUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [url] = useState(fetchUrl);
  const [requestData, setRequestData] = useState(new Date());

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => setError(err))
      .finally((_) => setLoading(false));
  }, [url, requestData]);

  return {
    loading,
    error,
    data,
    setRequestData,
  };
};

export default useFetch;

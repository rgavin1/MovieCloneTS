import React, { useState } from "react";
import { useEffect } from "react";

// API
import { resquestTrendingMedia, MediaTypes } from "../api/API";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      resquestTrendingMedia(MediaTypes.ALL)
        .then((res) => res.json())
        .then((data) => setList(data.results));

      setLoading(false);
    }, 5000);
  }, []);

  console.log("list ", list);

  return <>{loading ? <h1>Loading...</h1> : <>List</>}</>;
};

export default Home;

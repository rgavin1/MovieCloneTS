import React, { useState } from "react";
import { useEffect } from "react";

// API
import { trendingMedia, MediaTypes } from "../api/API";

const Home: React.FC = () => {
  // const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    // setLoading(true);
    trendingMedia(MediaTypes.ALL)
      .then((res) => res.json())
      .then((data) => setList(data.results));
    // setLoading(false);
  }, []);

  console.log("list ", list);

  return (
    <div>
      <h1>Home</h1>
      {/* {loading && "List"} */}
    </div>
  );
};

export default Home;

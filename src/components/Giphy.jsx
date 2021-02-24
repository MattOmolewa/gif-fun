import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getGifs() {
    try {
      const result = await axios.get("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "V43NFKCMq3I1DObR3NbMXyUOj2Qe8mBU",
        },
      });
      setGifs(result.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getGifs();
    // console.log(gifs);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="card-columns">
        {gifs.map(gif => (
          <div className="card" key={gif.id}>
            <img
              className="card-img-top"
              src={gif.images.fixed_height.url}
              alt="gif"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Giphy;

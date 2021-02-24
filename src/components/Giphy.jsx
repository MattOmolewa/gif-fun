import React, { useState, useEffect } from "react";
import axios from "axios";

const Giphy = () => {
  const [gifs, setGifs] = useState([]);

  async function getGifs() {
    try {
      const result = await axios.get("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "V43NFKCMq3I1DObR3NbMXyUOj2Qe8mBU",
        },
      });
      setGifs(result.data.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getGifs();
    console.log(gifs);
  }, []);

  return (
    <div>
      <span>hello wro</span>
    </div>
  );
};

export default Giphy;

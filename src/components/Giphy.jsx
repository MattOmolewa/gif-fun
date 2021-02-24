import { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Giphy = () => {
  const [gifs, setGifs] = useState([]);

  async function getGifs() {
    try {
      axios.get("api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "V43NFKCMq3I1DObR3NbMXyUOj2Qe8mBU",
        },
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <span></span>
    </div>
  );
};

export default Giphy;

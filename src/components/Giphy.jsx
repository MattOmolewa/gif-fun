import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Pagination from "./Pagination";
import Input from "./Input";

const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState("");
  //input state
  const [text, setText] = useState("");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = gifs.slice(indexOfFirstItem, indexOfLastItem);

  async function getGifs() {
    try {
      const result = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "JP1OvUHMi2m0g8X77qCvq1bG2tMA3qkf",
          q: text || "great",
          limit: 100,
        },
      });
      setGifs(result.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // console.error(error.message);
      setIsError(error.message);
    }
  }

  useEffect(() => {
    getGifs();
    // console.log(gifs);
  }, []);

  function pageSelected(pgNumber) {
    setCurrentPage(pgNumber);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getGifs();
  }

  if (loading) {
    // console.log(gifs.length);
    return <Loader />;
  }
  if (gifs.length == 0) {
    return <p>{isError}, please refresh after a moment</p>;
  }

  return (
    <div className="container">
      <Input text={text} setText={setText} handleSubmit={handleSubmit} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={gifs.length}
        pageSelected={pageSelected}
      />
      <div className="card-columns">
        {/* {console.log(gifs.length)} */}
        {currentItems.map(gif => (
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Pagination from "./Pagination";

const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState("");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = gifs.slice(indexOfFirstItem, indexOfLastItem);

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

  if (loading) {
    // console.log(gifs.length);
    return <Loader />;
  }
  if (gifs.length == 0) {
    return <p>{isError}, please refresh after a moment</p>;
  }

  return (
    <div className="container">
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

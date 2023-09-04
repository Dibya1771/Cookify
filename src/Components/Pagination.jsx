import React, { useState, useEffect } from "react";
import MealItem from "./Card";
import Typewriter from "typewriter-effect";
import SearchIcon from "@mui/icons-material/Search";


const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const pageNumbers = [];

  // Calculate total pages based on filtered data length
  // const newData = data.reverse();
  const filteredData = data.filter((item) => {
    if (item && item.title) {
      const itemValue = item.title.toLowerCase();
      return itemValue.includes(searchQuery.toLowerCase());
    }
    return false;
  });
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Slice data based on current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = filteredData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search query change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="search-container">
        <div className="ss_ss_ss">
          <input
            id="n_search"
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
          />

          <SearchIcon id="n_icon" />
        </div>
        <p className="ss_typing-animation">
          <Typewriter
            options={{
              strings: [
                "Welcome to Cookify, your ultimate culinary destination! ",
                "Where you can indulge in the art of cooking and create delicious memories together!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>

      <h2 id="n_header">
        <u style={{ marginTop: "1rem" }}>Meal Details</u>
      </h2>

      <div className="container">
        {filteredData.length === 0 ? (
          <p style={{ marginLeft: "0rem", color: "red", textShadow: "0 0.2px 1px yellow", fontSize: "1.5rem" }}>Data Not Found</p>
        ) : (
          <MealItem data={slicedData} />
        )}
      </div>

      {/* Render pagination buttons */}
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            disabled={currentPage === number}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;

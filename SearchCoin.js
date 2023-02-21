import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SearchCoin = () => {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data.coins);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const results = coins.filter((coin) =>
      coin.item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  }, [query, coins]);

  return (
    <div>
      <div className="position">
        <ul>
          <NavLink className="btn btn-outline-secondary" to="/CoinInfo">
            Coin Info
          </NavLink>
        </ul>
        <Outlet />
      </div>

      <input type="text" value={query} onChange={handleSearch} />
      <button>Search</button>
      {searchResults.length > 0 ? (
        searchResults.map((coin) => (
          <div key={coin.item.id} className="container-fluid card text-center">
            <h3>{coin.item.name}</h3>
            <p>{coin.item.symbol}</p>
            <p>{coin.item.market_cap_rank}</p>
          </div>
        ))
      ) : (
        <div>No Results Found</div>
      )}
    </div>
  );
};

export default SearchCoin;

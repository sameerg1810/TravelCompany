import React, { useState, useEffect } from "react";
import axios from "axios";

const CoinInfo = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.coingecko.com/api/v3/search?query=all"
      );
      setCoinData(result.data.coins);
      console.log("data is displayed", result.data.coins);
    };
    fetchData();
  }, []);

  return (
    <div>
      {coinData.map((coin) => (
        <div key={coin.id}>
          <h2>{coin.name}</h2>
          <p>API Symbol: {coin.api_symbol}</p>
          <p>Symbol: {coin.symbol}</p>
          <p>Market Cap Rank: {coin.market_cap_rank}</p>
          <img src={coin.thumb} alt={coin.name} />
        </div>
      ))}
    </div>
  );
};

export default CoinInfo;

import React from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";
import "./bootstrap.css";
import "./index.css";
import "./style.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import FlightApi from "./Components/FlightApi";
import SearchCoin from "./Components/SearchCoin";
import Muscleinfo from "./Components/Muscleinfo";
import Recipe from "./Components/Recipe";
import Product from "./Product/Product";
import RecipeInformation from "./Components/RecipeInfo";
import CoinInfo from "./Components/CoinInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/exercise" element={<Muscleinfo />} />
          <Route path="/flight" element={<FlightApi />} />
          <Route path="/SearchCoin" element={<SearchCoin />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/RecipeInfo" element={<RecipeInformation />} />
          <Route path="/CoinInfo" element={<CoinInfo />} />
        </Routes>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;

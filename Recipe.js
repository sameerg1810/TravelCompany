import React, { useState, useEffect } from "react";
import axios from "axios";
import "../bootstrap.min.css";

const API_KEY = "057cc990c9ee4f9c802964027acd9c98";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [queryIngredients, setQueryIngredients] = useState("");
  const [queryTitle, setQueryTitle] = useState("");

  const handleIngredientsSearch = (event) => {
    setQueryIngredients(event.target.value);
  };

  const handleTitleSearch = (event) => {
    setQueryTitle(event.target.value);
  };

  const searchIngredientsRecipes = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryIngredients}&apiKey=${API_KEY}`
    );
    setRecipes(response.data);
  };

  const searchTitleRecipes = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${queryTitle}&apiKey=${API_KEY}`
    );
    setRecipes(response.data.results);
  };

  return (
    <div className=" card ">
      <div className="container-fluid d-flex justify-content-around  position-fixed">
        <div className="card w-25 container">
          <input
            type="text"
            value={queryIngredients}
            onChange={handleIngredientsSearch}
            placeholder="Search by Ingredients"
          />
          <button onClick={searchIngredientsRecipes}>
            Search by Ingredients
          </button>
        </div>
        <div className="card w-25 container">
          <input
            type="text"
            value={queryTitle}
            onChange={handleTitleSearch}
            placeholder="Search by Title"
          />
          <button onClick={searchTitleRecipes}>Search by Title</button>
        </div>
      </div>
      {recipes.map((recipe) => (
        <div className="card w-25 top-50 container-fluid" key={recipe.id}>
          <div className="card-body">
            <h3 className="card-title">{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p className="card-text">ID: {recipe.id}</p>
            <p className="card-text">Servings: {recipe.servings}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;

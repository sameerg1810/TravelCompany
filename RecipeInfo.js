import React, { useState } from "react";
import axios from "axios";

const RecipeInformation = () => {
  const [recipeId, setRecipeId] = useState("");
  const [recipeData, setRecipeData] = useState([]);

  const handleChange = (e) => {
    setRecipeId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeId}&apiKey=057cc990c9ee4f9c802964027acd9c98`
      )
      .then((response) => {
        setRecipeData(response.data);
      });
  };

  return (
    <div>
      <div className="card container-fluid">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={recipeId}
            onChange={handleChange}
            placeholder="Enter Recipe ID"
          />
          <button type="submit">Search</button>
        </form>
        {recipeData.length !== 0 && (
          <div>
            <h2>Recipe Information</h2>
            <div className="card container-fluid">
              {recipeData.map((data) => (
                <div key={data.id}>
                  <p>
                    <b>ID:</b> {data.id}
                  </p>
                  <p>
                    <b>Title:</b> {data.title}
                  </p>
                  <p>
                    <b>Ready In Minutes:</b> {data.readyInMinutes}
                  </p>
                  <p>
                    <b>Image URL:</b> {data.image}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeInformation;

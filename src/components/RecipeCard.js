import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Recipecard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        <Link to="/recipes" className="recipe-link">
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;

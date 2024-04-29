// Recipes.js

import React from 'react';
import "../CSS/Recipes.css"; // Ensure this CSS file contains the necessary styles with the new class names

// Sample recipe data, replace with actual data and import images as needed
const recipeData = [
  {
    title: "Spaghetti Carbonara",
    description: "",
    image: "/path-to-your-image/spaghetti-carbonara.jpg" // Replace with the path to your image
  },
  {
    title: "Chicken Tikka Masala",
    description: "Chunks of grilled chicken in a creamy tomato sauce with spices.",
    image: "/path-to-your-image/chicken-tikka-masala.jpg" // Replace with the path to your image
  },
  // ...more recipes
];

const Recipes = () => {
  return (
    <div className="recipe-gallery">
      {recipeData.map((recipe, index) => (
        <div key={index} className="recipe-gallery__card">
          <img className="recipe-gallery__image" src={recipe.image} alt={recipe.title} />
          <div className="recipe-gallery__info">
            <h3 className="recipe-gallery__title">{recipe.title}</h3>
            <p className="recipe-gallery__description">{recipe.description}</p>
            {/* Add more details as required */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
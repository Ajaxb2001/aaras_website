// Recipes.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../CSS/Recipes.css";

import chickenBiryani from "../images/chicken_Biryani.jpg";

// Sample recipe data, replace with actual data and import images as needed
const recipeData = [
  {
    id: 1, // Add a unique identifier for each recipe
    title: "Chicken Biryani Recipe",
    description: "A flavorful rice dish made with spices, rice, and chicken.",
    image: chickenBiryani,
    detailUrl: "/recipes/chicken-biryani", // Replace with the path to the detail page
    sourceUrl: "https://www.example.com/chicken-biryani-recipe", // Replace with the actual URL
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    description:
      "Chunks of grilled chicken in a creamy tomato sauce with spices.",
    image: "/path-to-your-image/chicken-tikka-masala.jpg",
    detailUrl: "/recipes/chicken-tikka-masala",
    sourceUrl: "https://www.example.com/chicken-tikka-masala-recipe",
  },
  // ...more recipes
];

const Recipes = () => {
  return (
    <div className="recipe-gallery">
      {recipeData.map((recipe) => (
        <div key={recipe.id} className="recipe-gallery__card">
          <img
            className="recipe-gallery__image"
            src={recipe.image}
            alt={recipe.title}
          />
          <div className="recipe-gallery__info">
            <h3 className="recipe-gallery__title">{recipe.title}</h3>
            <div className="recipe-gallery__actions">
              <Link to={recipe.detailUrl} className="recipe-gallery__button">
                <FontAwesomeIcon icon={faYoutube} /> Youtube
              </Link>
              <a
                href={recipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-gallery__button"
              >
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

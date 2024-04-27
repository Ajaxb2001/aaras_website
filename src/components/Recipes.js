import React, { useEffect } from "react";
import "../CSS/Recipes.css";
import instagramEmbedCodes from "./instagramEmbeddedCodes";
// Function to load Instagram's embed script and reinitialize it
const loadInstagramEmbedScript = () => {
  const existingScript = document.getElementById("instagram-embed-script");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.id = "instagram-embed-script";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
  } else {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }
};

// Array of recipes with their details and Instagram embed code
const recipes = [
  {
    title: "Refresh Nirvana🥤⛱️⛅",
    instagramEmbedCode: instagramEmbedCodes.recipeTitle1,
  },
  {
    title: "Tim Hortins ☕🍵",
    instagramEmbedCode: instagramEmbedCodes.recipeTitle2,
  },
  // ... more recipe objects
];

const Recipes = () => {
  // Load Instagram embed script when the component mounts
  useEffect(() => {
    loadInstagramEmbedScript();
  }, []);

  return (
    <div className="recipes-gallery">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-item">
          {/* Instagram Reel Embed */}
          <div
            className="recipe-instagram"
            dangerouslySetInnerHTML={{ __html: recipe.instagramEmbedCode }}
          />
          {/* Recipe Title */}
          <div className="recipe-info">
            <h3 className="recipe-name">{recipe.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

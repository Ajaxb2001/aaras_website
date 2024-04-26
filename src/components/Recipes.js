// Recipes.js

import React from "react";
import "../CSS/Recipes.css"; // Make sure to create a corresponding CSS file for styling

// Dummy array of YouTube Shorts video IDs
// Replace these with actual video IDs you want to display
const videoIds = [
  "https://youtube.com/shorts/bzYttrxG4eg?si=kmVNeEM3AZaD6mTj",
  "video_id_2",
  "video_id_3",
  "video_id_3",
  "video_id_3",
  "video_id_3",
  // ... more video IDs
];
const videoDescriptions = [
  "Description for video 1",
  "Description for video 2",
  "Description for video 3",
  "Description for video 4",
  "Description for video 5",
  "Description for video 6",

  // ... more descriptions
];
const Recipes = () => {
  return (
    <div className="recipes-container">
      {videoIds.map((videoId, index) => (
        <div key={videoId} className="card">
          <iframe
            title={`YouTube Short ${index + 1}`} // Unique title for each iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          ></iframe>
          <div className="video-description">
            {videoDescriptions[index]} {/* Display the description text */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

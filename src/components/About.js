// About.js
import React from "react";
import "../CSS/About.css"; // Make sure to create an About.css file in the same directory



function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About AARA's</h1>
      <div className="about-slogan">
        <p>Let's talk travel and eat</p>
      </div>
      <div className="about-asterisks">
        {/* Series of asterisks as a visual divider */}
        <p>********</p>
      </div>
      <div className="about-content">
        <p>
          At AARA's, our passion for food is as vast as the journeys we take to
          discover it. It's more than just about savoring delicious flavors;
          it's about the adventures that lead us there. Our blog is a
          celebration of the intersection where culinary delight meets the open
          road. Here, every meal is a story, and every destination is a taste
          waiting to be explored.
        </p>
        {/* More asterisks for visual separation, if desired */}
        <p className="about-asterisks">********</p>
        <p>
          We believe that food is the universal language that brings people
          together, creating memories and forging connections across cultures.
          Through AARA's, we invite you to embark on a gastronomic voyage with
          us-discovering hidden gems, local favorites, and dishes that tell the
          tale of their origins. Whether it's a street food vendor's spicy
          delicacy or a fine-dining experience with panoramic views, our goal is
          to share these moments and inspire your next culinary adventure.
        </p>
        <p className="about-asterisks">********</p>
        <p>
          So, join us as we talk, travel, and eat our way around the globe.
          Share in our stories, recipes, and experiences that will surely whet
          your appetite for both food and wanderlust. Because at AARA's, every
          bite is a journey, and every journey is delicious.
        </p>
      </div>
    </div>
  );
}

export default About;

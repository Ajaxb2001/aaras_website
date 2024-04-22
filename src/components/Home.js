import React from "react";
import RecipeCard from "./RecipeCard";
import strawberryIceLatte from "../images/strawberry ice latte.jpg"; // Adjust the path if necessary
import sbcheesecake from "../images/sb_cheeze_cake.jpg"; // Adjust the path if necessary
import misal from "../images/misal.jpg"; // Adjust the path if necessary
import cb from "../images/chicken_Biryani.jpg"; // Adjust the path if necessary
import choleKulche from "../images/chole_kulche.jpg"; // Adjust the path if necessary
import seekhKabab from "../images/seekh_kabab.jpg"; // Adjust the path if necessary

import "../CSS/Home.css";

const recipes = [
  {
    title: "Strawberry Ice Latte",
    description:
      "Indulge in the refreshing fusion of creamy richness and fruity delight with our Strawberry Ice Latte. Crafted with care, each sip is a harmonious blend of smooth espresso, velvety milk, and the vibrant essence of ripe strawberries. Whether you're seeking a cool companion on a sunny day or a flavorful pick-me-up anytime, our Strawberry Ice Latte promises to awaken your senses and elevate your day. Treat yourself to a delightful escape with every sip.",
    image: strawberryIceLatte,
  },
  {
    title: "Strawberry Cheese Cake",
    description:
      "Strawberry cheesecake is a delightful dessert that combines the rich, creamy texture of cheesecake with the vibrant flavor of fresh strawberries. The classic recipe typically features a graham cracker crust, a smooth and creamy cheesecake filling, and a topping of fresh strawberries or strawberry sauce.",
    image: sbcheesecake,
  },
  {
    title: "Misal Pav",
    description:
      "Misal Pav is a popular and flavorful Maharashtrian dish that consists of two main components: misal (spicy sprouted lentil curry) and pav (soft bread rolls). It's a quintessential street food in Maharashtra, India, loved for its robust flavors and spicy kick.",
    image: misal,
  },
  {
    title: "Chicken Biryani",
    description:
      "A fragrant and flavorful dish, Chicken Biryani is a classic Indian delicacy. Tender chicken marinated in aromatic spices, layered with long-grain Basmati rice, and slow-cooked to perfection. Each bite offers a burst of savory spices and tender meat, making it a beloved dish for special occasions and everyday indulgence alike.",
    image: cb,
  },
  {
    title: "Amritsari Chole Kulche",
    description:
      "A quintessential Punjabi dish featuring spicy chickpeas (chole) cooked in a rich tomato-based gravy, served alongside soft, fluffy kulchas, a type of leavened Indian bread. This flavorful and hearty combination embodies the vibrant culinary heritage of Amritsar, Punjab, delivering a satisfying taste of North Indian cuisine.",
    image: choleKulche,
  },
  {
    title: "Seekh Kabab",
    description:
      "Succulent skewered meat, seasoned with aromatic spices and grilled to perfection, offering a tantalizing blend of flavors and textures.",
    image: seekhKabab,
  },
];

function Home() {
  return (
    <div className="home-container">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default Home;

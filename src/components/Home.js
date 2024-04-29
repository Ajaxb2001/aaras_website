import React from "react";
import RecipeCard from "./RecipeCard";
import strawberryIceLatte from "../images/strawberry ice latte.jpg"; // Adjust the path if necessary
import sbcheesecake from "../images/sb_cheeze_cake.jpg"; // Adjust the path if necessary
import misal from "../images/misal.jpg"; // Adjust the path if necessary
import cb from "../images/chicken_Biryani.jpg"; // Adjust the path if necessary
import choleKulche from "../images/chole_kulche.jpg"; // Adjust the path if necessary
import seekhKabab from "../images/seekh_kabab.jpg";
import { Parallax } from "react-parallax";
import parallaxImage from "../images/parallax-2.jpg";
import "../CSS/Home.css";

const recipes = [
  {
    title: "Strawberry Ice Latte",
    description:
      "Indulge in the refreshing fusion of creamy richness and fruity delight with our Strawberry Ice Latte. Crafted with care, each sip is a harmonious blend of smooth espresso, velvety milk, and the vibrant essence of ripe strawberries. Whether you're seeking a cool companion on a sunny day or a flavorful pick-me-up anytime.",
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
      "A fragrant and flavorful dish, Chicken Biryani is a classic Indian delicacy. Tender chicken marinated in aromatic spices, layered with long-grain Basmati rice, and slow-cooked to perfection.",
    image: cb,
  },
  {
    title: "Amritsari Chole Kulche",
    description:
      "A quintessential Punjabi dish featuring spicy chickpeas (chole) cooked in a rich tomato-based gravy, served alongside soft, fluffy kulchas, a type of leavened Indian bread. This flavorful and hearty combination embodies the vibrant culinary heritage of Amritsar, Punjab.",
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
    <div>
      <Parallax
        bgImage={parallaxImage} // Use the imported image variable here
        strength={500}
        bgClassName="parallax"
      >
        <div style={{ height: "450px" }}>
          <div className="parallax-content">
            {/* Content inside parallax */}
            <div>
              <h1>Welcome to Delicious Recipes</h1>
              <p>Explore the taste of authentic cuisines</p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="home-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;

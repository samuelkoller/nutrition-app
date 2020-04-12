import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ReactDOM = require("react-dom");
import { Carousel } from "react-responsive-carousel";
import RecipeCard from "./RecipeCard";
import Axios from "axios";

export default function RecipeCarousel(props) {
  // for each object in recipes array, return a div containing the recipe image and title and id
  function fetchRecipes(searchResult) {
    axios.get(
      `https://api.edamam.com/search?q=${searchResult}&app_id=${recipeApiId}&app_key=${recipeApiKey}`
    )
    .then((result) => {
      const recipeCardsArray = result.data.hits.map((recipe, index) => {
        const label = `${recipe.label}`;
        const image = `${recipe.image}`;
        const url = `${recipe.url}`
        const ingredientsArray = `${recipe.ingredientLines}`
        
        return (
          <RecipeCard key={index} label={label} image={image} url={url} ingredientsArray={ingredientsArray} />
        )
      })
      .catch((error) => console.error(error))
  });

  return (
    <div class="carousel-wrapper">
      <Carousel fetchRecipes={fetchRecipes}
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
      >
        <div id="7">
          <img src="https://i.ytimg.com/vi/OFjlF7zQF_g/maxresdefault.jpg" />
          <h4 className="legend">Cat</h4>
        </div>
      </Carousel>
    </div>
  );
}

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls

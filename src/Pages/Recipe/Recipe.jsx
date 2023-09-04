
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../CSS/Recipe.css";
import Rater from "react-rater";

import "react-rater/lib/react-rater.css";
import Button from "@mui/material/Button";
import swal from "sweetalert";
const Recipe = () => {


  const { id } = useParams();
  const [recipeData, setRecipeData] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:3000/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.items[id]); // Console log the received data object
        setRecipeData(data);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, [id]);

  const addToFavorites = () => {
    // Assuming you have a user ID available
    const userId = localStorage.getItem('token'); // Getting the actual user ID
    const favoriteItem = {
      userId,
      itemId: id,
      name: recipeData.title,
      image: recipeData.image,
    };

    fetch("http://localhost:3000/fav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Item added to favorites:", data);
        swal("Success!", "Item added to favourites.", "success"); // Display the SweetAlert message

        // Optionally, you can show a success message or update the UI
      })
      .catch((error) => {
        console.error("Error adding item to favorites:", error);
        // Optionally, you can show an error message or handle the error
      });
  };

  if (!recipeData) {
    return <div>Loading...</div>; // Render loading state while fetching data
  }

  const { title, ingredients, recipe, image, video } = recipeData;

  return (
    <div className="ss_card">
      <div className="ss_video">
        <iframe id="ss_iframe" src={video}></iframe>
        <p >
          if the above video doesn't play <a style={{ color: 'black' }} href={video}>Click here</a>
        </p>
        <Button id="ss_add" variant="contained" onClick={addToFavorites}>
          Add to favorites
        </Button>
      </div>
      <div className="ss_data">
        <div className="ss_data-child">
          <h2 className="ss_item" style={{ marginTop: '4rem', display: 'flex' }}>{title}</h2>
          <Rater total={5} rating={2} style={{ fontSize: '1.875rem', marginTop: "-2rem" }} className="starss" />
          <div className="ss_ingredients">
            <h3>Ingredients</h3>
            <div className="ss_ingredient_child">
              {ingredients.map((el, index) => (
                <span key={index}>
                  <ul>
                    <li>{el}</li>
                  </ul>
                </span>
              ))}
            </div>
          </div>
          <div className="ss_recipe">
            <h3>Recipe</h3>

            <div className="ss_recipe_child"></div>
            <p>{recipe}</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Recipe;

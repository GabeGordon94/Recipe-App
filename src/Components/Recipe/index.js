import React from 'react';
import './style.css';

const Recipe = (prop) => {
    const { title, image, usedIngredients, missedIngredients } = prop.recipe;
    return (
        <div className="d-flex border border-secondary">
            <div className="d-flex flex-column m-2">
                <h4>{title}</h4>
                <img src={image}></img>
            </div>
            <div className="ingredients-container">
                <div className="used-ingredients">
                    <h3 className="used-ingredients-title">Used Ingredients</h3>
                    {usedIngredients.map(ingredient => <span>{ingredient.name}</span>)}
                </div>
                <div className="missed-ingredients">
                <h3 className="missed-ingredients-title">Missing Ingredients</h3>
                    {missedIngredients.map(ingredient => <span>{ingredient.name}</span>)}
                </div>
            </div>
        </div>
    );
}
export default Recipe;
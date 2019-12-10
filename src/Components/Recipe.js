import React from 'react';

const Recipe = (prop) => {
    debugger
    const { title, image, usedIngredients } = prop.recipe;
    return (
        <div className="d-flex">
            <div className="d-flex flex-column">
                <h4>{title}</h4>
                <img src={image}></img>
            </div>
            <span>{usedIngredients}</span>
        </div>
    );
}
export default Recipe;
import React from 'react';

const Recipe = (prop) => {
    const title = prop.recipe.title;
    const image = prop.recipe.image;
    const usedIngredients = prop.recipe.usedIngredients;
    return (
        <div className="d-flex border border-secondary">
            <div className="d-flex flex-column m-2">
                <h4>{title}</h4>
                <img src={image}></img>
            </div>
            <div>{usedIngredients.map((ingredient)=>{
                return (<span key={ingredient.id}>{ingredient.name}</span>);
            })}</div>
        </div>
    );
}
export default Recipe;
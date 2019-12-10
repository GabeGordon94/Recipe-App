import React from 'react';

const Recipe = (prop) => {
    const { title, link, photo, ingredients } = prop;
    return (
        <div className="d-flex">
            <div className="d-flex flex-column">
                <h4>{title}</h4>
                <img src={photo}></img>
            </div>
            <input value={link} />
            <span>{ingredients}</span>
        </div>
    );
}
export default Recipe;
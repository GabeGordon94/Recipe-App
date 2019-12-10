import React from 'react';

const Recipe =(prop)=>{
    const {title,link,photo,ingredients} = prop;
    return(
        <div>
            <h4>{title}</h4>
            <img src={photo}></img>
            <input value={link}/>
            <span>{ingredients}</span>
        </div>
    );
}
export default Recipe;
import React from 'react';
import RecipeInstructions from '../RecipeInstructions'
import './style.css';


class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopUp: false
        }
    }

    showInstructions(id) {
        this.setState({ showPopUp: true })
    }

    render() {
        const {id, title, image, usedIngredients, missedIngredients } = this.props.recipe;

        if (this.state.showPopUp) {
            return (
                <div id="instructionsPopUp">
                    <RecipeInstructions recipeID={id} />
                </div>
            );
        } else {
            return (
                <div className="d-flex border border-secondary">
                    <div className="d-flex flex-column m-2">
                        <h4>{title}</h4>
                        <img src={image}></img>
                    </div>
                    <div className="ingredients-container">
                        <div className="used-ingredients">
                            <h3 className="used-ingredients-title">Used Ingredients</h3>
                            {usedIngredients.map(ingredient => <span key={ingredient.id}>{ingredient.name}</span>)}
                        </div>
                        <div className="missed-ingredients">
                            <h3 className="missed-ingredients-title">Missing Ingredients</h3>
                            {missedIngredients.map(ingredient => <span key={ingredient.id}>{ingredient.name}</span>)}
                        </div>
                    </div>
                    <button onClick={() =>{ this.showInstructions()}}>
                        Show Recipe Instructions
                    </button>
                </div>
            );
        }
    }
}
export default Recipe;
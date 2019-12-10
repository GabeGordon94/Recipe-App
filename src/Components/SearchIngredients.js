import React from 'react';
import Recipe from './Recipe'

class SearchIngredients extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            ingredientsList: [],
            showMainPage: true
        }
        this.recipeObjArray = [];
    }

    added(ingredient) {
        if (ingredient.value === "") {
            return;
        }
        let newArr = this.state.ingredientsList;
        newArr.push(ingredient.value);
        this.setState({ ingredientsList: newArr })
        ingredient.value = '';
    }

    remove(event) {
        let selector = event.target.id;
        let newArr = this.state.ingredientsList;
        debugger
        newArr.splice(selector - 1, 1);
        this.setState({ ingredientsList: newArr })
    }

    async printRecipes() {
        this.recipeObjArray = await this.getRecipesFromAPI();
        this.setState({ showMainPage: false });
        return null;
    }

    async getRecipesFromAPI() {
        console.log('got here');
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=a3a214ea83184a19990692c16b8bfc42&ingredients=${this.state.ingredientsList}&ranking=1&ignorePantry=true`);
        console.log(response);
        return await response.json();

    }

    render() {
        const { ingredientsList, showMainPage } = this.state;
        let counter = 0;
        if (showMainPage) {

            return (
                <div>
                    <input type="text" placeholder="Add Ingredients" id='addedIngredient'></input>
                    <button onClick={() => {
                        this.added(document.getElementById('addedIngredient'));
                    }}>Add</button>
                    <div className="ingredientsList my-3 border border-light">
                        <h4>Ingredients List</h4>
                        {ingredientsList.map((ingredient, i) => {
                            counter++;
                            return (
                                <div key={i} className={'d-flex justify-content-between border-dark border'}>
                                    <div>
                                        {ingredient}
                                    </div>
                                    <button id={counter} onClick={(event) => { this.remove(event); }} className="btn btn-danger">
                                        Delete</button>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => { this.printRecipes() }}>Search</button>
                    </div>
                </div>
            );

             } else {
                 console.log(this.recipeObjArray)
                return (
                    <div>
                        {this.recipeObjArray.map((recipe,i) => {
                            return (
                                <div key={i}>
                                    <Recipe recipe={recipe} />
                                </div>
                            );
                        })}
                    </div>
                );
        }
    }
}

export default SearchIngredients;
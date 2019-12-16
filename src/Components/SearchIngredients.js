import React from 'react';
import Recipe from './Recipe/index'
import AutoComplete from './AutoComplete';

class SearchIngredients extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            ingredientsList: [],
            showMainPage: true,
            autoCompleteArr: []

        }
        this.input = '';
        this.recipeObjArray = [];
        this.key = 'a3a214ea83184a19990692c16b8bfc42';

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
        newArr.splice(selector - 1, 1);
        this.setState({ ingredientsList: newArr })
    }

    async printRecipes() {
        this.recipeObjArray = await this.getRecipesFromAPI();
        this.setState({ showMainPage: false });
        return null;
    }

    async getRecipesFromAPI() {
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${this.key}&ingredients=${this.state.ingredientsList}&ranking=1&ignorePantry=true&limitLicense=true`);
        return await response.json();

    }
    async getAutoCompleteFromAPI() {
        const response = await fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${this.key}&query=${this.input}l&number=5`);
        return await response.json();
    }
    async handleAutoComplete() {
        this.input = document.getElementById('addedIngredient').value;
        let response = await this.getAutoCompleteFromAPI();
        console.log("Response After Json");
        console.log(response)
        let arr = [];
        response.map(word => arr.push(word.name));
        this.setState({ autoCompleteArr: arr });
        return null;
    }

    render() {
        const { ingredientsList, showMainPage, autoCompleteArr } = this.state;
        let counter = 0;
        if (showMainPage) {

            return (
                <div>
                    <input type="text" placeholder="Add Ingredients" id='addedIngredient' onChange={() => this.handleAutoComplete()}></input>
                    <button onClick={() => this.added(document.getElementById('addedIngredient'))}>Add</button>
                    {autoCompleteArr.map((ingredient, i) => <AutoComplete key={i} ingredient={ingredient} />)}
                    <div className="ingredientsList my-3 border border-light">
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
            console.log(this.recipeObjArray);
            return (
                <div>
                    {this.recipeObjArray.map((recipe) => {
                        return (
                            <div key={recipe.id}>
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
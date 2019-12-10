import React from 'react';
import Recipe from './Recipe'

class SearchIngredients extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            ingredientsList: [],
            showMainPage: true
        }
        this.recipeObjArray = {};
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

    printRecipes() {
        this.getRecipesFromAPI().then((data) => {
            this.recipeObjArray = data;
            this.setState({ showMainPage: false })
        });

    }

    async getRecipesFromAPI() {
        console.log('got here');
        const response = await fetch(`http://www.recipepuppy.com/api/?i=${this.state.ingredientsList}`,
            { mode: 'no-cors' });
       

        debugger
        /* const response = await fetch('https://dog.ceo/api/breeds/image/random'); */
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
            /*     } else {
                    { debugger }
                    return (
                        <div>
                            {this.recipeObjArray.map((recipe) => {
                                return (
                                    <div>
                                        <Recipe title={recipe.title} ingredients={recipe.ingredients} link={recipe.href} photo={recipe.thumbnail} />
                                    </div>
                                );
                            })}
                        </div>
                    );*/
        }
    }
}


export default SearchIngredients;
import React from 'react';
import SearchButton from './SearchButton'

class SearchIngredients extends React.Component {
    constructor(prop) {
        super(prop);
        this.status = {
            ingredientsList: []
        }
    }

    added(ingredient) {
        if (ingredient.value == "") {
            return;
        }
        let newArr = this.status.ingredientsList;
        newArr.push(ingredient.value);
        this.setState({ ingredientsList: newArr })
        ingredient.value = '';
    }

    remove(event) {
        let selector = event.target.id;
        let newArr = this.status.ingredientsList;
        debugger
        newArr.splice(selector - 1, 1);
        this.setState({ ingredientsList: newArr })
    }

    render() {
        const { ingredientsList } = this.status;
        let counter = 0;
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
                    <SearchButton />
            </div>
        );
    }
}


export default SearchIngredients;
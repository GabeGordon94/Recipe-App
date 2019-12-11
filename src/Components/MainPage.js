import React from 'react';
import Title from './Title'
import SearchIngredients from './SearchIngredients';


class MainPage extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            mainPage: true,
            recipeList: false
        }
    }

    searchForRecipes() {
        this.setState({ mainPage: false, recipeList: true });
    }

    render() {
        const { mainPage, recipeList } = this.state;
        if (mainPage && !recipeList) {
            return (
                <div>
                    <Title title="WYFT" />
                    <SearchIngredients />
                </div>
            );
        } else if (!mainPage && recipeList) {
            return (
                <div>Return List of Recipes</div>
            );
        } else {
            return (
                <div>
                    {alert("wow")}
                </div>
            )
        }
    }
}
export default MainPage;
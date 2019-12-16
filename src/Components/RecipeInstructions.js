import React from 'react';

class RecipeInstructions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instructionsList: [],
            loaded: false
        }

    }

    async componentDidMount() {
        const response = await fetch(`https://api.spoonacular.com/recipes/${this.props.recipeID}/analyzedInstructions?apiKey=a3a214ea83184a19990692c16b8bfc42`);
        let list = await response.json();
        console.log("LIST=" + list)
        this.setState({ instructionsList: list, loaded: true });
    }

    render() {
        debugger
        return (
            <div>
                {this.state.loaded &&
                    <div className="border border-dark">
                        {console.log(this.state.instructionsList)}
                        {this.state.instructionsList[0].steps.map((instruct) => {
                            return (
                                <div key={instruct.number}>
                                    {instruct.number}: {instruct.step}
                                </div>
                            );
                        })}
                    </div>
                }
                {!this.state.loaded && <div>Loading</div>}
            </div>
        );
    }


}

export default RecipeInstructions;


import React from 'react';

class SearchButton extends React.Component{
    constructor(prop){
        super(prop);
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary">Search</button>
            </div>
        );
    }
}

export default SearchButton;
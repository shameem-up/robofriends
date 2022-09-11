import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
            className="pa3 mb2 ba b--green bg-light-yellow tc" 
            type='search' 
            placeholder="Search Robos"
            onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;
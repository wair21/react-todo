import React from "react";

const SearchPanel = () => {
    const searchText = 'need search?';
    const searchStyle = {
        fontSize: '25px',
        border: '1px solid red'
    };

    return (
        <input
            style={ searchStyle }
            placeholder={ searchText }/>
    );
};

export default SearchPanel;
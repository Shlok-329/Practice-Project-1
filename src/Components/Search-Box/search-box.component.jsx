import React from 'react';

import './search-box.styles.css';

export const SearchBox = (props) => {
    return (
        <input class='search' type='search' placeholder={props.placeholder} onChange={props.func}></input>
    )
};
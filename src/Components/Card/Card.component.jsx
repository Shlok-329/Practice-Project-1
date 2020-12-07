/* eslint-disable no-template-curly-in-string */
import React from 'react';
import './Card.style.css'

export const Card = (props) => {
    var temp1=props.y.id;
    var temp=temp1.toString();
    return (<div className='card-container'>
        <img alt='monster' src={'https://robohash.org/' + temp + '?set=set2&size=180x180'} />
        <h2>{props.y.name}</h2>
        <p>{props.y.email}</p>
    </div>
)};
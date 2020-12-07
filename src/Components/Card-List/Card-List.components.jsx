import React from 'react';
import {Card} from '../Card/Card.component.jsx';

import './Card-List.styles.css'

export const CardList = (props) => (<div className='card-list'>
        {props.monsters.map(x => {
            return <Card key={x.id} y={x} />
        })}
    </div>
);
import React from 'react';
import './card-field.component.style.css';
import {Card} from "../card/card.component";

export const CardField = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
)
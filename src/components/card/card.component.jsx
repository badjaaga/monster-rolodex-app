import React from "react";
import './card.style.css';

export const Card = props => (
    <div className="card">
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt={props.monster.name}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)

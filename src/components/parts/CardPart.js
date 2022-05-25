import React from "react";

import "./CardPart.css";

const CardPart = (props)=> {
    return (
        <div className = "card">
            <div className ="card-header">
                <h1>{props.props.heading}</h1>
            </div>
            <div className = "card-body">
                <ul>
                    {props.props.itemlist.map((item)=>(<li>{item}</li>))}
                </ul>
            </div>

        </div>
    );
}

export default CardPart;
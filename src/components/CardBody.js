import React from "react";
import "./CardBody.css";
import CardPart from "./parts/CardPart";

const CardBody = ()=> {
    const attribute  = {
        heading :"Lanuages",
        itemlist : [
            "C/C++",
            "Java",
            "JavaScript",
            "Python",
            "Php",
            "Lua",
            "Go"
        ]
    };
    return(
        <div className="card-body-container">
            <CardPart props = {attribute}/>
            <CardPart props = {attribute}/>
            <CardPart props = {attribute}/>
            <CardPart props = {attribute}/>
            <CardPart props = {attribute}/>
            <CardPart props = {attribute}/>

        </div>
    );
}

export default CardBody;
import React from "react";
import "./CardBody.scss";
import CardPart from "./parts/CardPart";

const CardBody = ()=> {
    const lang  = {
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

    const back  = {
        heading :"Backend",
        itemlist : [
            "Spring",
            "Django",
            "Flask",
            "Laravel",
            "Play Framework",
            "Express js (nodejs)",
        ]
    };

    const front  = {
        heading :"Frontend",
        itemlist : [
            "Html",
            "Css",
            "Reactjs",
            "Sass/Less",
            "Ui/Ux",
        ]
    };

    const other  = {
        heading :"Other",
        itemlist : [
            "SDL",
            "OpenGl",
            "OpenCV",
            "Gtk",
            "QT5",
        ]
    };
    
    const interests  = {
        heading :"Interests",
        itemlist : [
            "Machine Learning",
            "Embedded System",
            "Art(Comical art",
        ]
    };
    return(
        <div className="card-body-container">
            <CardPart props = {lang}/>
            <CardPart props = {back}/>
            <CardPart props = {front}/>
            <CardPart props = {other}/>
            <CardPart props = {interests}/>

        </div>
    );
}

export default CardBody;
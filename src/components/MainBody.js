import React from "react";
import "./MainBody.css";

import BackgroundSvg from "../asset/svg/Path 1.svg";
import upworkIcon from "../asset/svg/Group 19.svg";
import iconCoffe from "../asset/svg/coffe.svg";


import profileImg from "../asset/image/profile.jpg";
import CardPart from "./parts/CardPart";
import CardBody from "./CardBody";

const MainBody = ()=> {
    return (
    <div className = "root-container">
        <div className = "link-bg">
            <div style = {{height:"20px",width:"20px",backgroundColor:"red"}}></div>
            <div style = {{height:"20px",width:"20px",backgroundColor:"red"}}></div>

        </div>
        <div className = "body-container">
            <div className = "profile-aboutme-container">
                <div className = "aboutme">
                    <h3>About me</h3>
                    <p>I am a full-stack web developer
                        dedicated myself to the greater version
                        of myself. Always eager to seek the sacred
                        knowledge of the programming realm. Always try
                        to be hungry and foolish for the knowledge.</p>
                </div>
                    <div className= "profile-container">
                        <img src = {BackgroundSvg} alt = "something went wrong" className = "profile-img-background"/>
                        <div className = "profile-image-name-bundle">
                            <div style = {{textAlign:"right"}}>
                                <h1>Md Masud karim</h1>
                                <span style = {{display:"flex",gap:"15px",float:"right",alignItems:"center"}}>
                                    <img src = {iconCoffe} alt = "something went wrong" className= "coffe-icon"/>
                                    <p>Software engineer</p>
                                </span>
                            </div>

                            <img src = {profileImg} alt = "something went wrong" className = "profile-image"/>
                            
                            
                            <button className = "hireme-btn"><img className = "upwork-icon" src ={upworkIcon}  alt = "something went wrong"/>Hire Me</button>

                        </div>

                    </div>
            </div>

            <CardBody/>



        </div>
        
    </div>
    );
}

export default MainBody;
import React from "react";
// import "./MainBody.css";
import "./MainBody.scss";

import BackgroundSvg from "../asset/svg/Path 1.svg";
import upworkIcon from "../asset/svg/Group 19.svg";
import iconCoffe from "../asset/svg/coffe.svg";


import profileImg from "../asset/image/profile.jpg";
import CardBody from "./CardBody";
import AboutMePart from "./parts/AboutMePart";
import ProfileContainerPart from "./parts/ProfileContainerPart";

const MainBody = ()=> {
    return (
    <div className = "root-container">

        <div className = "root-container__link-bg">
            <div className = "root-container__link-bg__link-item"></div>
            <div className = "root-container__link-bg__link-item"></div>
        </div>

        <div className = "root-container__body-container">

            <div className = "root-container__body-container__profile-aboutme-container">
                <AboutMePart/>
                <ProfileContainerPart/>
            </div>

            <CardBody/>

        </div>
        
    </div>
    );
}

export default MainBody;
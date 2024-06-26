import React from "react";

import { motion } from "framer-motion";

import BackgroundSvg from "../../asset/svg/Path 1.svg";
import upworkIcon from "../../asset/svg/Group 19.svg";
import iconCoffe from "../../asset/svg/coffe.svg";
import profileImg from "../../asset/image/profile.jpg";


import "./ProfileContainerPart.scss";

const ProfileContainerPart = ()=> {
    return (
        <motion.div animate={{ y: [-1900, 0] }} transition = {{duration:1.2}} className= "profile-container">
                       <div className = "backg">
                            <img src = {BackgroundSvg} alt = "something went wrong" className = "profile-container__profile-img-background"/>
                            <div className = "profile-container__profile-image-name-bundle">
                                <div className = "profile-container__profile-image-name-bundle__mobile-name">
                                    <h1>Md Masud karim</h1>
                                    <span>
                                        <img src = {iconCoffe} alt = "something went wrong" className= "profile-container__profile-image-name-bundle__coffe-icon"/>
                                        <p>Software engineer</p>
                                    </span>
                                </div>

                                <img src = {profileImg} alt = "something went wrong" className = "profile-container__profile-image-name-bundle__profile-image"/>
                                
                                
                                

                            </div>
                            <a href= "https://www.upwork.com/freelancers/~010ff2b8a4a7a47d08" target = "_blank" className = "profile-container__profile-image-name-bundle__hireme-btn"><img className = "profile-container__profile-image-name-bundle__upwork-icon" src ={upworkIcon}  alt = "something went wrong"/>Hire Me</a>
                       </div>

                    </motion.div>
    );
}

export default ProfileContainerPart;
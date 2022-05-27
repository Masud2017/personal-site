import React from "react";


import BackgroundSvg from "../../asset/svg/Path 1.svg";
import upworkIcon from "../../asset/svg/Group 19.svg";
import iconCoffe from "../../asset/svg/coffe.svg";
import profileImg from "../../asset/image/profile.jpg";


import "./ProfileContainerPart.scss";

const ProfileContainerPart = ()=> {
    return (
        <div className= "profile-container">
                       <div>
                            <img src = {BackgroundSvg} alt = "something went wrong" className = "profile-container__profile-img-background"/>
                            <div className = "profile-container__profile-image-name-bundle">
                                <div>
                                    <h1>Md Masud karim</h1>
                                    <span style = {{display:"flex",gap:"15px",float:"right",alignItems:"center"}}>
                                        <img src = {iconCoffe} alt = "something went wrong" className= "profile-container__profile-image-name-bundle__coffe-icon"/>
                                        <p>Software engineer</p>
                                    </span>
                                </div>

                                <img src = {profileImg} alt = "something went wrong" className = "profile-container__profile-image-name-bundle__profile-image"/>
                                
                                
                                <button className = "profile-container__profile-image-name-bundle__hireme-btn"><img className = "profile-container__profile-image-name-bundle__upwork-icon" src ={upworkIcon}  alt = "something went wrong"/>Hire Me</button>

                            </div>
                       </div>

                    </div>
    );
}

export default ProfileContainerPart;
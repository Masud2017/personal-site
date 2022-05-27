import React from "react";
import "./MainBody.scss";

import CardBody from "./CardBody";
import AboutMePart from "./parts/AboutMePart";
import ProfileContainerPart from "./parts/ProfileContainerPart";

import { BrowserRouter as Router,
    Link,
    Route,
    Routes,
    Switch } from "react-router-dom";
import RepositoryBody from "./parts/RepositoryBody";

import fbIcon from "../asset/svg/fb.svg";
import githubIcon from "../asset/svg/github.svg";
import linkedinIcon from "../asset/svg/linkedin.svg";
import twitterIcon from "../asset/svg/twitter.svg";

import { motion } from "framer-motion";


const MainBody = ()=> {
    return (
    <div className = "root-container">

        <motion.div animate={{ x: [-100, 0] }} transition = {{duration:1.2}} className = "root-container__link-bg">
            <img src = {fbIcon} alt = "something wentwrong" className = "root-container__link-bg__link-item"/>
            <img src = {githubIcon} alt = "something wentwrong" className = "root-container__link-bg__link-item"/>
            <img src = {linkedinIcon} alt = "something wentwrong" className = "root-container__link-bg__link-item"/>
            <img src = {twitterIcon} alt = "something wentwrong" className = "root-container__link-bg__link-item"/>

        </motion.div>

        <div className = "root-container__body-container">

            <div className = "root-container__body-container__profile-aboutme-container">
                <AboutMePart/>
                <ProfileContainerPart/>
            </div>

            <Router>
                

                <Routes>
                    <Route path = "/" element = {<CardBody/>}/>
                    <Route path = "/repositories" element = {<RepositoryBody/>}/>
                </Routes>
            </Router>

        </div>
        
    </div>
    );
}

export default MainBody;
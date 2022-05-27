import { domAnimation } from "framer-motion";
import React from "react";

import "./AboutMePart.scss";
import { BrowserRouter as Router,
    Link,
    Route,
    Routes,
    Switch } from "react-router-dom";

import skillIcon from  "../../asset/svg/skill.svg";
import projectIcon from "../../asset/svg/projects.svg";
import { motion } from "framer-motion";

const AboutMePart = ()=> {
    return (
        <motion.div animate={{ y: [-1900, 0] }} transition = {{duration:1.2}} className = "aboutme">
        <h3 className = "aboutme__heading">About me</h3>
        <p className ="aboutme__description">I am a full-stack web developer
            dedicated myself to the greater version
            of myself. Always eager to seek the sacred
            knowledge of the programming realm. Always try
            to be hungry and foolish for the knowledge.</p>
            <div className = "aboutme__showcasetab">
                    <div className = "aboutme__showcasetab__center">
                        <Router>
                            <Link to = '/'><img src = {skillIcon} className = "aboutme__showcasetab__center__icon" alt = "something went wrong"/> Skills</Link>
                            <Link to = '/repositories'><img src=  {projectIcon} className = "aboutme__showcasetab__center__icon" alt = "something went wrong" /> Projects</Link>
                        </Router>
                    </div>
            </div>
    </motion.div>
    );
}

export default AboutMePart;
import React from "react";
import { motion } from "framer-motion";

import "./CardPart.scss";

const CardPart = (props)=> {
    return (
        <motion.div transition = {{duration:1.2}}  animate={{ x: [-1900, 700,0] }} className = "card">
            <div className ="card__card-header">
                <h1>{props.props.heading}</h1>
            </div>
            <div className = "card__card-body">
                <ul>
                    {props.props.itemlist.map((item)=>(<li>{item}</li>))}
                </ul>
            </div>

        </motion.div>
    );
}

export default CardPart;
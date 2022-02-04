import React from "react";
import { Icon } from "semantic-ui-react";
import "./life.css";

const Life = ({lifeCount}) => {
    return(
        <div className="lifeWrapp">
            {
                lifeCount.map((index) => {
                   return <Icon name="heart" color="red" key={index}/>
                })
            }
        </div>
    )
};

export default Life;
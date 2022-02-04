import React from "react";
import Card from "../card/Card";
import "./cardBlock.css";

const CardBlock = ({color, onChoseColor}) => {

    return (
        <div className="cardBlock">
            {
                color.map((item, index) => {
                    return(
                        <Card
                        id={item.id}
                        color={item.id}
                        match={item.match}
                        key={index}
                        handleChoseColor={onChoseColor}
                        />
                    )
                })
            }
        </div>
    )
};

export default CardBlock;
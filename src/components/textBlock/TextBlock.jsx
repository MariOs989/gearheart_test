import React from "react";
import Title from "../title/Title";
import "./textBlock.css"

const TextBlock = ({titles, onChoseTitle}) => {

    return(
        <div className="textWrapp">
            {
                titles.map((item, index) => {
                    return(
                            <Title
                                title={item.name}
                                id={item.id}
                                match={item.match}
                                key={index}
                                handleChoseTitle={onChoseTitle}
                            />
                    )
                })
            }
        </div>
    );
};

export default TextBlock;
import React from "react";
import { Icon } from "semantic-ui-react";

const Title = ({title, id, match, handleChoseTitle}) => {
    return (
        <div onClick={() => handleChoseTitle(id)}>
            {title}
            {match ==="yes" && <Icon name="check" color="green"/>}
            {match === "no" && <Icon name="x" color="red"/>}
        </div>
    );
};

export default Title;
import React from "react";
import {Icon} from "semantic-ui-react";
import "./card.css";

const Card = ({id, color, match, handleChoseColor}) => {

  return (
      <div style={{backgroundColor: color}} className="card" onClick={() => handleChoseColor(id)}>
          {match ==="yes" && <Icon name="check" color="green"/>}
          {match === "no" && <Icon name="x" color="red"/>}
      </div>
  );
};

export default Card;
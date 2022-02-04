import React, {useEffect, useState} from "react";
import './App.css';
import CardBlock from "./components/cardBlock/CardBlock";
import TextBlock from "./components/textBlock/TextBlock";
import Life from "./components/life/Life";
import ModalWindow from "./components/modalWindow/ModalWindow";
import { shuffle, isWasChosen } from "./helpers/helpers";
import {colors} from "./mockData";

const App = () => {
    const color = colors.map((item) => (
        {
            id: item.name,
            name: item.name,
            match: "unset",
        }
    ));

    const [chosenTitle, setChosenTitle] = useState("");
    const [chosenColor, setChosenColor] =useState ("");
    const [lifeCount, setLifeCount] = useState([0,1,2]);
    const [titleState, setTitleState] = useState(color)
    const [colorState, setColorState] = useState(shuffle(color));
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] =useState("");

    useEffect(() => {
        if(chosenColor !== "" && chosenTitle !=="") {
            const colors = newList(colorState);
            const titles = newList(titleState);

            if(chosenColor !== chosenTitle){
                let life = lifeCount;
                life.pop();
                setLifeCount( life)
            };

            if(colorState.filter(item => item.match === "unset").length <=1 && lifeCount.length >= 1){
                setIsOpen(true);
                setStatus("won");
            };

            setColorState(colors);
            setTitleState(titles);
            setChosenColor("");
            setChosenTitle("");
        };

        if(lifeCount.length <= 0) {
            setIsOpen(true);
            setStatus("losing");
        };

    }, [chosenTitle, chosenColor, lifeCount]);

    const newList = (array) => array.map((item) => {
        if((chosenColor === item.id) || (chosenTitle === item.id)){
            return (
                {
                    id: item.id,
                    name: item.name,
                    match: ((chosenColor === item.id) && (item.id === chosenTitle)) ? "yes" : "no",
                }
            )
        }
        else{
            return item;
        }
    });

    const onChosenTitle = (id) => {
        if(isWasChosen({id, colorState})){
            setChosenTitle(id)
        };
    };

    const onChosenColor = (id) => {
        if(isWasChosen({id, colorState})){
            setChosenColor(id)
        };
    };

    const onRestart = () => {
      setColorState(shuffle(color));
      setTitleState(color);
      setStatus("");
      setIsOpen(false);
      setLifeCount([1, 2, 3]);
    };

  return (
    <div className="App">
        <Life lifeCount={lifeCount}/>
          <div className="App-body">
             <TextBlock titles={titleState} onChoseTitle={onChosenTitle}/>
                 <CardBlock color={colorState} onChoseColor={onChosenColor}/>
              <ModalWindow isOpen={isOpen} status={status} handleRestart={onRestart}/>
          </div>
    </div>
  );
}

export default App;

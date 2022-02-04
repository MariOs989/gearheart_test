import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import "./modalWindow.css";

const ModalWindow = ({isOpen, status, handleRestart}) => {
    return(
        <div>
            <Modal open={isOpen} className="modalWrapp">
               <div className="modalTextWrapp">
                   <span className="text">
                       You {status === "won" ? "won" : "lost"}. Try again
                   </span>
                   <Button
                       className="resetButton"
                       icon
                       onClick={handleRestart}
                   >
                       <Icon name="redo" color="green"/>
                   </Button>
               </div>
            </Modal>
        </div>
    );
};

export default ModalWindow;

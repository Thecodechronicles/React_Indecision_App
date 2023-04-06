import React from 'react';
import Modal from 'react-modal';

const OptionalModal = (props) => {
    return (
        <Modal
            // isOpen={!!props.optionPicked}
            isOpen={props.showOption}
            contentLabel='Selected Option'
        >
            <h3>Selected Option</h3>
            {props.optionPicked && <p>{props.optionPicked}</p>}
            <button onClick={props.resetSelection}>Okay</button>
        </Modal>
    )
}

export default OptionalModal
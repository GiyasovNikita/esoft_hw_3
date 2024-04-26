import React from "react"

const CardButton = ({ text, onClick }) => {

    return (
        <button onClick={onClick}>{text}</button>
    );
}

export default CardButton
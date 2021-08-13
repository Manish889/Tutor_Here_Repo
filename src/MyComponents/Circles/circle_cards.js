import React from 'react';
import "./circles.css";

const Circle_cards = (props) => {
    return (
    <div className = "box">
        <div className="count">{props.number}</div>
        <div className ="text">{props.text}</div>
    </div>

    );
};

export default Circle_cards;
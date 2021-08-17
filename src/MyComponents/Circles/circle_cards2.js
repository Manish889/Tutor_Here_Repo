import React from 'react';
import "./circles.css";

const Circle_cards2 = (props) => {
    return (
    <div className = "box2">
        <div className="count2">{props.number}</div>
        <div className ="text2">{props.text}</div>
    </div>

    );
};

export default Circle_cards2;
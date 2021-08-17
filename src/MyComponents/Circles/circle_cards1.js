import React from 'react';
import "./circles.css";

const Circle_cards1 = (props) => {
    return (
    <div className = "box1">
        <div className="count1">{props.number}</div>
        <div className ="text1">{props.text}</div>
    </div>

    );
};

export default Circle_cards1;
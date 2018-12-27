import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
        <div ClassName="img-container">
        <img alt={props.name} src={props.images} />
        </div>
    </div>
);

export default FriendCard;
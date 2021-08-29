import React from "react";

import Card from "../shared/Card";
import Avatar from "../shared/Avatar";

import "./ItemComponent.css";

const ItemComponent = (props) => {
  return (
    <li className="item_list">
      <Card className="item_card">
        <div>
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="item_details">
          <h2>{props.name}</h2>
          <h3>{props.price}</h3>
          <h4>{props.description}</h4>
        </div>
      </Card>
    </li>
  );
};

export default ItemComponent;

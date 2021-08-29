import React from "react";

import Card from "../shared/Card";
import ItemComponent from "./ItemComponent";
import "./ListComponent.css";

const ListComponent = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No products found!</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="list_ul">
      {props.items.map((item) => {
        return (
          <ItemComponent
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </ul>
  );
};

export default ListComponent;

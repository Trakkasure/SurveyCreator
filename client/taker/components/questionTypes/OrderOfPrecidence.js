import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { OoPComponent } from "./";

const OrderOfPrecidence = props => {
  return (
    <div>
      {props.items.map(data => {
        return (
          <div>
            <OoPComponent name={data} items={props.items} />
            <li>{data}</li>
          </div>
        );
      })}
    </div>
  );
};

export default OrderOfPrecidence;

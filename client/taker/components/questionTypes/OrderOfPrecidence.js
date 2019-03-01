import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";

const OrderOfPrecidence = props => {
  const [state, changeState] = useState([{ name: "", value: 0 }]);
  return (
    <div>
      {props.items.map(data => {
        return (
          <div>
            <Select
              value={state}
              onChange={(e, value) => {
                console.log("Value Changed!: ", value, e);
                if (state.findIndex(a => a.name == value.props.name)) {
                  console.log("Found item in state: ", state);
                } else {
                  state.push({
                    name: value.props.name,
                    value: value.props.value
                  });
                }

                // changeState([...state]);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {props.items.map(list => {
                return (
                  <MenuItem name={data} value={props.items.indexOf(list) + 1}>
                    {props.items.indexOf(list) + 1}
                  </MenuItem>
                );
              })}
            </Select>
            <li>{data}</li>
          </div>
        );
      })}
    </div>
  );
};

export default OrderOfPrecidence;

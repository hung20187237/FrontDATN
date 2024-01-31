import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { forwardRef } from "react";
import { useEffect } from "react";

function BasicRating(props, ref) {
  const [value, setValue] = React.useState(4);
  const scores = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  useEffect(() => {
    if (ref) {
        ref[props.type] = value;
    }
  }, [ref]);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        width: props.width || 300,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="simple-controlled"
        value={props.rating ?? value}
        style={{marginBottom: '-5px', fontSize: '2.5rem'}}
        onChange={(event, newValue) => {
          if (!props.rating) {
              ref[props.type] = newValue;
              setValue(newValue);
          }
        }}
      />
      <Box sx={{ ml: 2 }}>{scores[props.rating||value]}</Box>
    </Box>
  );
}

export default forwardRef(BasicRating);

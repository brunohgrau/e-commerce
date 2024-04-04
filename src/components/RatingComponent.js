import React, { useState } from "react";
import Rating from "@mui/material/Rating";
const RatingComponent = ({ value }) => {
  return (
    <>
      <Rating
        name="simple-controlled"
        value={value}
        /*  onChange={(event, newValue) => {
          setValue(newValue);
        }}*/

        sx={{ mt: 2, mb: 2 }}
      />
    </>
  );
};

export default RatingComponent;

import React from "react";
import Button from "@material-ui/core/Button";

export function ContainedButtons({ style, children }) {
  return (
    <div>
      <Button variant="contained" color="primary" style = {style}>
        {children}
      </Button>
    </div>
  );
}

import React from "react";
import Alert from "@material-ui/lab/Alert";

export default function SimpleAlerts({message}) {
  return (
    <div>
      <Alert severity="error"  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{message}</Alert>
    </div>
  );
}

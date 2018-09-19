import React from "react";
import TextField from '@material-ui/core/TextField';


export default ({ name, label }) => {
  return (
        <TextField
          required
          name= {name}
          label={label}
          margin="normal"
        />
    );
}

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function NewGame() {
  const classes = useStyles();

  const [rows, setRows] = useState('');
  const [cols, setCols] = useState('');


  const handleRowChange = (event) => {
    setRows(event.target.value);
  };

  const handleColChange = (event) => {
    setCols(event.target.value);
  };


  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Rows</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={rows}
          onChange={handleRowChange}
          label="Rows"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label-2">Columns</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label-2"
          id="demo-simple-select-outlined-2"
          value={cols}
          onChange={handleColChange}
          label="Columns"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
        </Select>
      </FormControl>

      <Grid>
        <Button variant="contained" color="primary">
          NEW GAME
        </Button>
      </Grid>
    </div>
  );
}

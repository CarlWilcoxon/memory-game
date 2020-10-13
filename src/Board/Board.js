import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '../Card/Card';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Board() {
  const classes = useStyles();

  // const [rows, setRows] = useState('');
  // const [cols, setCols] = useState('');


  // const handleRowChange = (event) => {
  //   setRows(event.target.value);
  // };

  // const handleColChange = (event) => {
  //   setCols(event.target.value);
  // };


  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Card />
      </Grid>
    </Grid>
  );
}

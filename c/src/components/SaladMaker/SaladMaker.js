import React, { useReducer, createContext } from 'react';
import { createUseStyles } from 'react-jss';
import SaladBuilder from '../SaladBuilder/SaladBuilder';
import SaladSummary from '../SaladSummary/SaladSummary';

const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center',
  }
});

export const SaladContext = createContext();

function reducer(state, item) {
  return [...state, item]
}

export default function SaladMaker() {
  const classes = useStyles();
  const [salad, setSalad] = useReducer(reducer, []);
  return(
    <>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">🥗 </span>
          Build Your Custom Salad!
          Avoid trans-fat.
          <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladBuilder />
      <SaladSummary />
    </>
  )
}

import React, { useCallback, useState } from 'react';
import { Grid } from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';
import svg from '../card_back.svg';

export default function Card() {
  // Declare a new state variable, which we'll call "count"
  const [flipped, setFlipped] = useFlipped(false);

  return (
    <Grid item>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <Grid className={'front'} onClick={() => setFlipped(!flipped)} >
          This is the front of the card.
        </Grid>

        <Grid className={'back'} onClick={() => setFlipped(!flipped)} >
          <img src={svg} alt="card back" width={100} />
        </Grid>
      </ReactCardFlip>
      {/* <p hidden={flipped}> VISIBLE </p>
      <Button onClick={() => setFlipped(!flipped)}>
        Click me
      </Button> */}
    </Grid>
  );
}


// it might be a project-level reusable hook
const useFlipped = (initialState) => {
  const [isFlipped, setIsFlipped] = useState(initialState);

  // put [setIsFlipped] into the useCallback's dependencies array
  // this value never changes so the callback is not going to be ever re-created
  const toggle = useCallback(
    () => setIsFlipped(state => !state),
    [setIsFlipped],
  );

  return [isFlipped, toggle];
}
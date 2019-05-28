import React, { useState } from 'react';


export default function MagicLink(props) {
  // make magic link be able to receive a "bold" prop.
  // If it exists, make my anchor tag have bold font weight
  const { url, label, bold } = props;

  // we need a variable to hold state, and a function we
  // can use to update this state (2 things)

  // LET'S CREATE slices of state along with their corresponding updaters
  const [myCount, updateMyCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const myStyle = {
    fontWeight: bold ? 'bold' : 'initial',
    display: 'block',
  };

  const clickHandler = () => {
    setClicked(true);
    updateMyCount(myCount + 1);
  };

  return (
    <a
      onClick={clickHandler}
      style={myStyle}
      href={url}
    >
      {label} (Clicked {myCount} times) {clicked ? null : 'PLEASE CLICK ME NOW'}
    </a>
  );
}

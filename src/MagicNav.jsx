import React from 'react';
import MagicLink from './MagicLink';


export default function MagicNav(props) {
  // how do i know from devtools that MagicNav has the right props ????
  const { links } = props;

  return (
    <>
      {
        links.map((link) => {
          return <MagicLink key={link.id} label={link.label} url={link.url} />;
        })
      }
    </>
  );
}

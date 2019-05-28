import React from 'react';
import ReactDOM from 'react-dom';
import './MySite.less';

// 1- pull in the data from the DOM

// 2- implement a Link component that takes url and label props, and returns an anchor tag.
// Add extra functionality so the Link is not an unnecessary wrapper.

// 3- implement a Section component that takes heading, content and optional imageUrl, and returns:
//   * a section with an h3 with the heading,
//   * a paragraph with the content,
//   * an image if imageUrl exists

// 4- implement a Nav component that takes links and returns a nav

// 5- improve MySite component so it renders
//   * a container div
//   * a header element with an h1 and the Nav
//   * a section container containing our Sections
//   * a button that logs a message to the console

// 6- see the props using react devtools

// 7- Put each component into its own file

// 8- break up the styles so that each component gets its own LESS file.

// 9- use the class syntax for MySite.

function MagicLink(props) {
  // make magic link be able to receive a "bold" prop.
  // If it exists, make my anchor tag have bold font weight
  const { url, label } = props;

  return (
    <a href={url}>{label}</a>
  );
}

const targetElement = document.querySelector('#target1');
const nodeToRender = <MagicLink label="Click Me" url="#" bold />;

ReactDOM.render(nodeToRender, targetElement);

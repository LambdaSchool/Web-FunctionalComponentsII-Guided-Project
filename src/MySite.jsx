import React from 'react';
import ReactDOM from 'react-dom';
import MyNav from './components/MyNav';
import MySection from './components/MySection';
import './MySite.less';


const imageUrl = 'https://media.gettyimages.com/photos/domestic-cat-picture-id172727025?s=612x612';

const links = [
  { id: '1', label: 'About Cats', url: '#' },
  { id: '2', label: 'Blog', url: '#' },
  { id: '3', label: 'Contact', url: '#' },
];

const sections = [
  { heading: 'Section 1', content: 'content 1', imageUrl },
  { heading: 'Section 2', content: 'content 2' },
  { heading: 'Section 3', content: 'content 3' },
];

// 1- implement a MySite component that returns Hello World

// 2- implement a functional component 'Nav' that takes links and returns a nav

// 3- implement a functional component 'Section' that takes a section, and returns:
//   * a section with an h3 with the section.heading,
//   * a paragraph with the section.content,
//   * an image if section.imageUrl exists

// 4 improve MySite component so it renders
//   * a container div
//   * a header element with an h1 and the Nav
//   * a section container containing our Sections
//   * a button that logs a message to the console

// 5- see the props using react devtools

// 6- Put each component into its own file

// 7- break up the styles so that each component gets its own LESS file.

// 8- use the class syntax for MySite.


function MySite({ title }) {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <MyNav links={links}></MyNav>
      {
        sections.map(section => (
          <MySection key={section.heading} section={section} />
        ))
      }
    </div>
  );
}

ReactDOM.render(<MySite title="Cats" />, document.querySelector('#target1'));

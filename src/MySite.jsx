import React from 'react';
import ReactDOM from 'react-dom';
import './MySite.less';


const links = [
  { label: 'About us', url: '#' },
  { label: 'Blog', url: '#' },
  { label: 'Wikipedia', url: '#' },
];

const sections = [
  { heading: 'Section 1', content: 'content 1', imageUrl: 'https://media.gettyimages.com/photos/domestic-cat-picture-id172727025?s=612x612' },
  { heading: 'Section 2', content: 'content 2' },
  { heading: 'Section 3', content: 'content 3' },
];

// 1- implement a MySite component that returns Hello World
function MySite() {
  function clickHandler() {
    console.log('You contributed!');
  }

  return (
    <div className='container'>
      <header>
        <h1>My Website</h1>
        <Nav links={links} />
      </header>
      <div>
        {
          sections.map(section => <Section key={section.heading} section={section} />)
        }
      </div>
      <button onClick={clickHandler}>Contribute</button>
    </div>
  );
}

// 2- implement a functional component 'Nav' that takes links and returns a nav
function Nav({ links }) {
  return (
    <nav className='my-nav'>
      {
        links.map(link => <a key={link.label} href={link.url}>{link.label}</a>)
      }
    </nav>
  );
}

// 3- implement a functional component 'Section' that takes a section, and returns
// a section with an h3 with the section.heading, and a paragraph with the section.content.
function Section({ section }) {
  return (
    <section>
      <h3>{section.heading}</h3>
      <p>{section.content}</p>
      {
        section.imageUrl &&
        <img src={section.imageUrl} alt='cat' />
      }
    </section>
  );
}

ReactDOM.render(<MySite />, document.querySelector('#target1'));

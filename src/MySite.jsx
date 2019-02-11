import React from 'react';
import ReactDOM from 'react-dom';
import './MySite.less';


function MySite() {
  const links = [
    { label: 'About us', url: '#' },
    { label: 'Blog', url: '#' },
    { label: 'Wikipedia', url: '#' },
  ];

  const sections = [
    { heading: 'Section 1', content: 'content 1' },
    { heading: 'Section 2', content: 'content 2' },
    { heading: 'Section 3', content: 'content 3' },
  ];

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
    </div>
  );
}

// 3- implement a functional component 'Nav' that takes links and returns a nav
function Nav({ links }) {
  return (
    <nav className='my-nav'>
      {
        links.map(link => <a key={link.label} href={link.url}>{link.label}</a>)
      }
    </nav>
  );
}

// 4- implement a functional component 'Section' that takes { heading, content }
function Section({ section }) {
  return (
    <section>
      <h3>{section.heading}</h3>
      <p>{section.content}</p>
    </section>
  );
}
// and returns a section with an h3 heading and a paragraph.

ReactDOM.render(<MySite />, document.querySelector('#target1'));

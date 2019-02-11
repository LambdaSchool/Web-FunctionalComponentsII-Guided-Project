import React from 'react';
import ReactDOM from 'react-dom';
import './MySite.less';


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

class MySite extends React.Component {
  // 1- implement a constructor and initialize state to contain links and sections
  constructor(props) {
    super(props);
    this.state = {
      links,
      sections,
    };
    console.log(this.state);
  }

  render() {
    return (
      <div className='container'>
        <header>
          <h1>My Website</h1>
          <Nav links={this.state.links} />
        </header>
        <div className='sections-container'>
          {
            this.state.sections.map(section => <Section section={section} />)
          }
        </div>
      </div>
    );
  }
  // 2- implement a simplistic render method that returns Hello World
  // 5- implement a render method that returns the nav and the sections
}

// 3- implement a functional component 'Nav' that takes links and returns a nav
function Nav({ links }) {
  return (
    <nav className='my-nav'>
      {
        links.map(link => <a href={link.url}>{link.label}</a>)
      }
    </nav>
  );
}
// 4- implement a functional component 'Section' that takes { heading, content }
function Section({ section }) {
  return (
    <div className='section'>
      <h3>{section.heading}</h3>
      <p>{section.content}</p>
    </div>
  );
}
// and returns a section with an h3 heading and a paragraph.

ReactDOM.render(<MySite />, document.querySelector('#target1'));

import React from 'react';
import ReactDOM from 'react-dom';


const links = [
  { name: 'About us', url: '#' },
  { name: 'Blog', url: '#' },
  { name: 'Wikipedia', url: '#' },
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
      <div>
        My Site
      </div>
    );
  }

  // 4- implement a render method that returns the nav and the sections
}

// 2- implement a functional component 'Nav' that takes links and returns a nav

// 3- implement a functional component 'Section' that takes { heading, content }
// and returns a section with an h3 heading and a paragraph.

ReactDOM.render(<MySite />, document.querySelector('#target1'));

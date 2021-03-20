import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div id='overview'>
        <div className='banner'>
          <div className='id'>
            <div className='name'>Joshua K Smith</div>
            <div className='title'>Full-Stack Software Engineer</div>
          </div>
          <div className='links'>
            <div className='bbutton' onClick={e => window.location='/osrs'}>OSRS Planner App</div>
            <div className='bbutton' onClick={e => window.location='/greenfield'}>Greenfield Retail Portal</div>
          </div>
        </div>
        <div className='innerbody'>
          <div className='bio'>
            <div className='header'>Bio</div>
            <p>My name is Joshua Smith, and I’m a Full-Stack Software Engineer. At Galvanize, I worked 11 hours a day, 6 days a week for 12 weeks to train myself in JavaScript, Node, React, and much more. Something that program really ingrained in me was being autonomous. For example, I was tasked with creating a ratings and reviews section and the API solo, which I completed. My experience with agile workflow makes me a good fit for any software engineering team. When I’m not coding or taking care of my daughter, I’m playing video games or snowboarding.</p>
          </div>
          <div className='skills'>
            <div className='header'>Skills</div>
            <p><div>Technical:</div>
            Front-End - JavaScript (ES6), React.js, jQuery, CSS3, HTML5, Bootstrap<br />
            Back-End - Node.js, Express, MySQL, SQLite, MongoDB, Mongoose, PostgreSQL<br />
            Testing - Mocha, Chai, Jest<br />
            Tools - Git, npm, Webpack, Babel, Trello, Amazon Web Services (EC2), Loader.io, K6<br />
            Techniques - Agile Development, Pair Programming, Test Driven Development</p>
            <p><div>Other:</div>
            I can do other stuff sometimes</p>
          </div>
        </div>
      </div>
    );
  };
}

reactDOM.render(<App />, document.getElementById('app'));
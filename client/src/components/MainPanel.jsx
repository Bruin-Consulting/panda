import React from 'react';
import ReactDOM from 'react-dom';
import TitleText from './TitleText.jsx';

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
  }

    // Passes prop of title and 2 pieces of text to display in TitleText, and renders the component
  renderTitleText() {
      // Text to display in the TitleText component
    let title = 'WHAT WE DO'
    let text1 = 'We are a management consultancy dedicated to helping businesses navigate the strategic challenges of the 21st century. We partner with clients ranging from startups to Fortune 500 companies to deliver innovative and high-impact solutions.'
    let text2 = 'Founded in 2008 by UCLA students, Bruin Consulting is a 501(c)(3) non-profit organization.'
    return <TitleText title={title} text1={text1} text2={text2}/>;
  }

  

  render() {
    return(<>
      <section id='main-panel'>
        <div>
          {this.renderTitleText()}
        </div>
      </section>
    </>)
  }
}

export default MainPanel;
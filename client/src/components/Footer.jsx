import React from 'react';
import ReactDOM from 'react-dom';
import bruinLogo from '../images/bruin-logo.png';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<>
      <section id='footer'>
        <img className='bruin-logo' src={bruinLogo} alt='Bruin Consulting'></img>
        <div>
          &copy; 2022 <span className='bruin-text'>Bruin Consulting</span>. All Rights Reserved.
        </div>
      </section>
    </>)
  }
}

export default Footer;
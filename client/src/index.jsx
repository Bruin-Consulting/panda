import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import Header from './components/Header.jsx';
import MainPanel from './components/MainPanel.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<>
      <Header/>
      <MainPanel/>
      <Footer/>
    </>)
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
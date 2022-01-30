import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<>
      <h2>Hello World!</h2>
    </>)
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
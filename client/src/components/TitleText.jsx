import React from 'react';
import ReactDOM from 'react-dom';


// Common component across panels with a title and two texts
class TitleText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<>
      <section id='title-text'>
          {/* Title Text */}
        <div className='title'>
          {this.props.title}
        </div> 

          {/* First Piece of Text */}
        <div className='text1'>
          {this.props.text1}
        </div>
          
          {/* Second Piece of Text */}
        <div className='text2'>
        {this.props.text2}
        </div>
      </section>
    </>)
  }
}

export default TitleText;
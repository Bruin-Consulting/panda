import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<>
      {this.props.valueToDisplay}
      <div>
        <h3>Application Form</h3>
        <form method='POST' action='/test' encType='multipart/form-data'>
          <div>
            <input name='name' type='text' placeholder='Name' required></input>
          </div>
          <div>
            <input name='email' type='text' placeholder='Email' required></input>
          </div>
          <div>
            <input name='gradyear' type='text' list='years' placeholder='Graduation Year' required></input>
              <datalist id='years'>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
              </datalist>
          </div>
          <div>
            <input name='gpa' type='text' placeholder='Current GPA (Enter High School GPA if you&apos;re a freshman)' required></input>
          </div>
          <div>
            <input name='availability' type='text' placeholder='Are you available for in person activities at UCLA? (Yes/No)' required></input>
          </div>
          <div>
            <input name='origin' type='text' placeholder='How did you hear about us? (Facebook, word of mouth, flyers, etc)' required></input>
          </div>
          <div>
            <label>Resume: (.pdf, &lt; 1MB)
              <input name='resume' type='file' required></input>
            </label>
          </div>
          <div>
            <label> Blanked Out Resume (remove any personally identifying infomation): (.pdf, &lt; 1MB)
              <input name='resume-blank' type='file' required></input>
            </label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>)
  }
}

export default Form;
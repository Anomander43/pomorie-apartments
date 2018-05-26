// Dependencies
import React, { Component } from 'react';
// Externals
import Button from './Button';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        {/* Name field */}
        <input 
          type='text'
          aria-required='true'
          aria-invalid='false'
          placeholder="Name:"
        />
        
        {/* Email field */}
        <input 
          type='email'
          aria-required='true'
          aria-invalid='false'
          placeholder="E-mail:"
        />
        {/* Message textarea */}
        <textarea
        aria-invalid='false'
        placeholder="Message:">
        </textarea>

        {/* Submit button */}
        <input type='submit' value='send' className='submitButton' />
        {/* <Button
          email="anomander43@gmail.com"
          formValues={this.state}
        /> */}
      </div>
    );
  }
}

export default Form;

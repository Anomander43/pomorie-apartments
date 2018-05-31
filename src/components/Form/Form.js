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
      <form 
        action="https://formspree.io/anomander43+formspree@gmail.com"
        name="contact" 
        method="post">
        <input 
          name="name"
          type="text"
          aria-required="true"
          aria-invalid="false"
          placeholder="Name:"
        />
        <input 
          name="email"
          type="email"
          aria-required="true"
          aria-invalid="false"
          placeholder="E-mail:"
        />
        <textarea
          aria-invalid="false"
          name="message"
          placeholder="Message:">
        </textarea>

        <input type="submit" value="send" className="submitButton" />
        {/* <Button
          email="anomander43@gmail.com"
          formValues={this.state}
        /> */}
      </form>
    );
  }
}

export default Form;
